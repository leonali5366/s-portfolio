import { prisma } from "@/lib/prisma";
import { z } from "zod";

// ✅ Schema now allows categories array
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  websiteUrl: z.string().url("Invalid URL"),
  imageUrl: z.string().url("Invalid URL"),
  categories: z.array(z.string()).nonempty("At least one category is required"),
});

// POST: Create a new project
export async function POST(req) {
  try {
    const { name, websiteUrl, imageUrl, categories } = await req.json();

    // Validate input
    const validationResult = schema.safeParse({
      name,
      websiteUrl,
      imageUrl,
      categories,
    });
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({ message: validationResult.error.errors[0].message }),
        { status: 400 }
      );
    }

    // Save project
    const newProject = await prisma.projects.create({
      data: { name, websiteUrl, imageUrl, categories },
    });

    return new Response(
      JSON.stringify({ status: "success", data: newProject }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding project:", error.message);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}

// GET: Fetch all projects
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (id) {
      const project = await prisma.projects.findUnique({ where: { id: String(id) } });
      if (!project) {
        return new Response(JSON.stringify({ message: "Project not found" }), { status: 404 });
      }
      return new Response(JSON.stringify({ status: "success", data: project }), { status: 200 });
    } else {
      const projects = await prisma.projects.findMany();
      return new Response(JSON.stringify({ status: "success", data: projects }), { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}

// PUT: Update a project
export async function PUT(req) {
  try {
    const { id, name, websiteUrl, imageUrl, categories } = await req.json();

    const validationResult = schema.safeParse({
      name,
      websiteUrl,
      imageUrl,
      categories,
    });
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({ message: validationResult.error.errors[0].message }),
        { status: 400 }
      );
    }

    const updatedProject = await prisma.projects.update({
      where: { id: String(id) },
      data: { name, websiteUrl, imageUrl, categories },
    });

    return new Response(
      JSON.stringify({ status: "success", data: updatedProject }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating project:", error.message);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}

// DELETE: Delete project
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ message: "Project ID is required" }), { status: 400 });
    }

    await prisma.projects.delete({ where: { id: String(id) } });

    return new Response(JSON.stringify({ status: "success", message: "Project deleted" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting project:", error.message);
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}
