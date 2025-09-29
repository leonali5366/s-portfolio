"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // categories (you can fetch these from API if you store categories there)
  const categories = ["all", "business", "roofer", "medical", "blog"];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/add-project");
      setProjects(response.data.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  // Filter by category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p?.category === selectedCategory);

  // Pagination logic
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="bg-[#121212] min-h-screen space-y-14">
      <h1 className="text-5xl text-center pt-5 font-mono text-white">
        All Projects
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 px-5">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1); // reset page when category changes
            }}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="mt-5 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="w-full h-[320px] rounded-md" />
          ))
        ) : currentProjects.length > 0 ? (
          currentProjects.map((project) => (
            <Card key={project?.id}>
              <CardHeader>
                <CardTitle>{project?.name}</CardTitle>
                <CardDescription>
                  <a
                    href={project?.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project?.websiteUrl}
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-[15rem]">
                  <Image
                    src={project?.imageUrl}
                    alt={project?.name}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No projects found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center pb-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {totalPages > 5 && <PaginationEllipsis />}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(prev + 1, totalPages)
                    )
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default Projects;
