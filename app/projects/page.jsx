"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Projects = () => {
  const [projects, setProjects] = useState([null]); // Local state for projects
  const [isLoading, setIsLoading] = useState(false);
  // Fetch projects when the component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  // Fetch all projects from the API
  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/add-project");
      setProjects(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-[#121212] min-h-screen space-y-14">
      <h1 className="text-5xl text-center pt-5 font-mono text-white">
        All Projects
      </h1>
      <div className="mt-5 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5">
        {isLoading ? (
          <>
            <Skeleton className={"w-full h-[320px] rounded-md"}></Skeleton>
            <Skeleton className={"w-full h-[320px] rounded-md"}></Skeleton>
            <Skeleton className={"w-full h-[320px] rounded-md"}></Skeleton>
            <Skeleton className={"w-full h-[320px] rounded-md"}></Skeleton>
            <Skeleton className={"w-full h-[320px] rounded-md"}></Skeleton>
            <Skeleton className={"w-full h-[320px] rounded-md"}></Skeleton>
            <Skeleton className={"w-full h-[320px] rounded-md"}></Skeleton>
            <Skeleton className={"w-full h-[320px] rounded-md"}></Skeleton>
          </>
        ) : (
          projects?.map((project) => {
            return (
              <Card key={project?.id}>
                <CardHeader>
                  <CardTitle>{project?.name}</CardTitle>
                  <CardDescription>
                    <a
                      href={project?.websiteUrl}
                      target="_blank"
                      rel="ShohanurDesign Reference"
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
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Projects;
