import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Define a schema for input validation
const schema = z.object({
  title: z.string().min(1, "Title is required"),
  videoId: z.string().min(1, "Invalid ID"),
});

// POST: Create a new project
export async function POST(req) {
  try {
    const { title, videoId } = await req.json();

    // Validate input
    const validationResult = schema.safeParse({ title, videoId });
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({ message: validationResult.error.errors[0].message }),
        { status: 400 }
      );
    }

    // Create a new project
    const newVideo = await prisma.video.create({
      data: {
        title,
        videoId,
      },
    });

    // Return success response
    return new Response(JSON.stringify({ status: "success", data: newVideo }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error adding project:", error.message);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}

// GET: Fetch all projects or a single project by ID
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id"); // Get the project ID from query params

    if (id) {
      // Fetch a single project by ID
      const project = await prisma.video.findUnique({
        where: { id: String(id) },
      });

      if (!project) {
        return new Response(JSON.stringify({ message: "Project not found" }), {
          status: 404,
        });
      }

      return new Response(
        JSON.stringify({ status: "success", data: project }),
        { status: 200 }
      );
    } else {
      // Fetch all projects
      const videos = await prisma.video.findMany();
      return new Response(JSON.stringify({ status: "success", data: videos }), {
        status: 200,
      });
    }
  } catch (error) {
    console.error("Error fetching videos:", error.message);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}

// PUT: Update a project by ID
export async function PUT(req) {
  try {
    const { id, title, videoId } = await req.json();

    // Validate input
    const validationResult = schema.safeParse({ title, videoId });
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({ message: validationResult.error.errors[0].message }),
        { status: 400 }
      );
    }

    // Update the project
    const updatedVideo = await prisma.video.update({
      where: { id: String(id) },
      data: {
        title,
        videoId,
      },
    });

    return new Response(
      JSON.stringify({ status: "success", data: updatedVideo }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating video:", error.message);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}

// DELETE: Delete a project by ID
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id"); // Get the project ID from query params

    if (!id) {
      return new Response(JSON.stringify({ message: "video ID is required" }), {
        status: 400,
      });
    }

    // Delete the project
    await prisma.video.delete({
      where: { id: String(id) },
    });

    return new Response(
      JSON.stringify({ status: "success", message: "video deleted" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting video:", error.message);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
