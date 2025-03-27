"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import axios from "axios"; // Import axios for making API requests
import { SingleImageDropzone } from "@/components/SingleImageDropzone"; // Image upload component
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEdgeStore } from "@/lib/edgestore";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Admin() {
  const [projects, setProjects] = useState([null]); // Local state for projects
  const [file, setFile] = useState(null); // State to hold the image file
  const [progress, setProgress] = useState(0);
  const { edgestore } = useEdgeStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [itemsPerPage] = useState(20); // Number of items per page
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const watchFields = watch(["name", "websiteUrl"]); // Watch the required fields

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

  // Handle form submission
  const onSubmit = async (data) => {
    if (file) {
      setIsSubmitting(true);
      // Upload the image to Edge Store
      try {
        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            // You can use this to show a progress bar or handle progress display
            setProgress(progress);
          },
        });

        // Once the image is uploaded, we proceed with adding the project
        const imageUrl = res?.url; // Assuming Edge Store provides the image URL

        // Add the new project with the uploaded image URL
        const newProject = {
          name: data.name,
          websiteUrl: data.websiteUrl,
          imageUrl,
        };

        // Call the API to store the project in the database
        const response = await axios.post("/api/add-project", newProject);
        if (response.status === 201) {
          toast.success("Added New Project");

          // Fetch the latest data from the server
          await fetchProjects();
        }

        setIsSubmitting(false);

        // Reset the form after submission
        reset();
        setFile(null); // Clear the image file state
      } catch (error) {
        console.error("Image upload failed:", error);
        setIsSubmitting(false);
      }
    }
  };

  // Handle the image file change in the dropzone
  const handleImageChange = (file) => {
    setFile(file); // Set the selected file into state
  };

  const handleDelete = async (id) => {
    // Create a promise for the delete operation
    const deletePromise = axios.delete(`/api/add-project?id=${id}`);

    // Use toast.promise to handle loading, success, and error states
    toast.promise(deletePromise, {
      loading: "Deleting project...", // Loading message
      success: (response) => {
        // Refresh the list of projects after successful deletion
        fetchProjects();
        return "Project deleted successfully"; // Success message
      },
      error: (error) => {
        console.error("Error deleting project:", error);
        return "Failed to delete project"; // Error message
      },
    });
  };

  const onEditSubmit = async (data) => {
    if (!editingProject) return;

    setIsUpdating(true);

    try {
      let imageUrl = editingProject.imageUrl;

      if (file) {
        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            setProgress(progress);
          },
        });
        imageUrl = res?.url;
      }

      const updatedProject = {
        id: editingProject.id,
        name: data.name,
        websiteUrl: data.websiteUrl,
        imageUrl,
      };

      const response = await axios.put("/api/add-project", updatedProject);
      if (response.status === 200) {
        toast.success("Project updated successfully");
        await fetchProjects();
      }

      setIsUpdating(false);
      reset();
      setFile(null);
      setEditingProject(null);
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Failed to update project");
      setIsUpdating(false);
    }
  };

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const isSubmitDisabled = !watchFields || !file; // Disable button if required fields are empty or no image is selected

  return (
    <div className="relative">
      <div className="sticky top-0 left-0 h-[3rem] shadow flex items-center justify-between gap-5 bg-white z-50 px-10">
        <Link href={"/"}>
          <span className="text-4xl font-semibold">ShuvoDesign</span>
        </Link>
        <div className="flex items-center gap-5">
          <Link href={"/admin"}>Images</Link>
          <Link href={"/admin/video"}>Videos</Link>
        </div>
        <UserButton showName />
      </div>
      <div className="w-full flex items-center justify-between mt-5 px-5">
        {isLoading ? (
          <Skeleton className="h-9 w-32 rounded-md" />
        ) : (
          <Dialog>
            <DialogTrigger
              onClick={() => {
                reset({
                  name: "",
                  websiteUrl: "",
                }); // Reset the form with existing data
              }}
              className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm"
            >
              Add Project
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Project</DialogTitle>
                <DialogDescription>
                  Fill in the project details to add a new project.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold">Name</label>
                  <Input
                    type="text"
                    {...register("name", {
                      required: "Project name is required",
                    })}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold">
                    Website URL
                  </label>
                  <Input
                    {...register("websiteUrl", {
                      required: "Project websiteUrl is required",
                    })}
                  />
                  {errors.websiteUrl && (
                    <span className="text-red-500">
                      {errors.websiteUrl.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold">
                    Project Image
                  </label>
                  <SingleImageDropzone
                    onChange={handleImageChange}
                    disabled={false}
                    value={file}
                    className="border"
                  />
                  {errors.image && (
                    <span className="text-red-500">{errors.image.message}</span>
                  )}
                </div>

                {/* Progress Bar */}
                {progress > 0 && progress < 100 && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1 text-center">
                      {progress}% Uploading...
                    </div>
                  </div>
                )}

                <div className="flex justify-end space-x-3">
                  <Button
                    type="submit" // Standard form submission
                    disabled={isSubmitDisabled || isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <Loader className="animate-spin mr-2 w-5 h-5" />{" "}
                        Adding...
                      </div>
                    ) : (
                      "Add Project"
                    )}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        )}

        {isLoading ? (
          <Skeleton className="h-9 w-64 rounded-md" />
        ) : (
          <Input
            type="text"
            placeholder="Search by project name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
        )}
      </div>

      <div className="mt-5 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5">
        {isLoading ? (
          <>
            {[...Array(8)].map((_, index) => (
              <Card key={`skeleton-${index}`}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="w-full h-[15rem] rounded-md" />
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Skeleton className="h-9 w-24 rounded-md" />
                  <Skeleton className="h-9 w-24 rounded-md" />
                </CardFooter>
              </Card>
            ))}
          </>
        ) : (
          filteredProjects?.map((project) => {
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
                      alt={project?.websiteUrl}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="ml-auto flex gap-2">
                    <Dialog>
                      <DialogTrigger
                        onClick={() => {
                          setEditingProject(project); // Set the project being edited
                          reset({
                            name: project.name,
                            websiteUrl: project.websiteUrl,
                          }); // Reset the form with existing data
                          setFile(null); // Clear the image file state
                        }}
                        className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm"
                      >
                        Edit Project
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit this project</DialogTitle>
                          <DialogDescription>
                            Make changes to update the project.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          onSubmit={handleSubmit(onEditSubmit)}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-sm font-semibold">
                              Name
                            </label>
                            <Input
                              type="text"
                              defaultValue={project?.name}
                              {...register("name", {
                                required: "Project name is required",
                              })}
                            />
                            {errors.name && (
                              <span className="text-red-500">
                                {errors.name.message}
                              </span>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold">
                              Website URL
                            </label>
                            <Input
                              defaultValue={project?.websiteUrl}
                              {...register("websiteUrl", {
                                required: "Project websiteUrl is required",
                              })}
                            />
                            {errors.websiteUrl && (
                              <span className="text-red-500">
                                {errors.websiteUrl.message}
                              </span>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold">
                              Project Image
                            </label>
                            <SingleImageDropzone
                              onChange={handleImageChange}
                              disabled={false}
                              value={file || project?.imageUrl}
                              className="border"
                            />
                            {errors.image && (
                              <span className="text-red-500">
                                {errors.image.message}
                              </span>
                            )}
                          </div>

                          {/* Progress Bar */}
                          {progress > 0 && progress < 100 && (
                            <div className="mt-4">
                              <div className="w-full bg-gray-300 rounded-full h-2">
                                <div
                                  className="bg-blue-600 h-2 rounded-full"
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>
                              <div className="text-sm text-gray-600 mt-1 text-center">
                                {progress}% Uploading...
                              </div>
                            </div>
                          )}

                          <div className="flex justify-end space-x-3">
                            <Button
                              type="submit" // Standard form submission
                              disabled={isUpdating}
                            >
                              {isUpdating ? (
                                <div className="flex items-center justify-center">
                                  <Loader className="animate-spin mr-2 w-5 h-5" />{" "}
                                  Updating...
                                </div>
                              ) : (
                                "Update"
                              )}
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button variant={"destructive"}>Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this project and remove your data from
                            database.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(project?.id)}
                          >
                            Confirm
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardFooter>
              </Card>
            );
          })
        )}
      </div>
      {/* shadcn Pagination Component */}
      <Pagination className="mt-5 pb-10">
        <PaginationContent>
          <PaginationItem>
            <Button variant={"outline"} disabled={currentPage === 1}>
              <PaginationPrevious
                className={"cursor-pointer"}
                onClick={() => paginate(currentPage - 1)}
              />
            </Button>
          </PaginationItem>
          {/* Page Numbers */}
          {(() => {
            const totalPages = Math.ceil(
              filteredProjects.length / itemsPerPage
            ); // Total number of pages
            const visiblePageButtons = 5; // Number of visible page buttons

            // If total pages are less than or equal to the visible limit, show all pages
            if (totalPages <= visiblePageButtons) {
              return Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    className="cursor-pointer"
                    onClick={() => paginate(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ));
            }

            // Apply sliding window logic for more than 5 pages
            const halfVisibleButtons = Math.floor(visiblePageButtons / 2);
            let startPage = Math.max(1, currentPage - halfVisibleButtons);
            let endPage = Math.min(
              totalPages,
              currentPage + halfVisibleButtons
            );

            // Adjust the range if near the start or end
            if (currentPage <= halfVisibleButtons) {
              endPage = visiblePageButtons;
            } else if (currentPage >= totalPages - halfVisibleButtons) {
              startPage = totalPages - visiblePageButtons + 1;
            }

            // Generate page buttons within the visible range
            return Array.from({ length: endPage - startPage + 1 }, (_, i) => (
              <PaginationItem key={startPage + i}>
                <PaginationLink
                  className="cursor-pointer"
                  onClick={() => paginate(startPage + i)}
                  isActive={currentPage === startPage + i}
                >
                  {startPage + i}
                </PaginationLink>
              </PaginationItem>
            ));
          })()}
          <PaginationItem>
            <Button
              variant={"outline"}
              disabled={
                currentPage ===
                Math.ceil(filteredProjects.length / itemsPerPage)
              }
            >
              <PaginationNext
                className={"cursor-pointer"}
                onClick={() => paginate(currentPage + 1)}
              />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default Admin;
