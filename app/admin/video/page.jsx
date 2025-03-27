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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

function Video() {
  const [projects, setProjects] = useState([null]); // Local state for projects
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

  const watchFields = watch(["title", "videoId"]); // Watch the required fields

  // Fetch projects when the component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  // Fetch all projects from the API
  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/add-video");
      setProjects(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching video:", error);
      toast.error("Failed to fetch video");
      setIsLoading(false);
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Add the new project with the uploaded image URL
      const newVideo = {
        title: data.title,
        videoId: data.videoId,
      };
      console.log(newVideo);

      // Call the API to store the project in the database
      const response = await axios.post("/api/add-video", newVideo);
      if (response.status === 201) {
        toast.success("Added New Video");

        // Fetch the latest data from the server
        await fetchProjects();
      }

      setIsSubmitting(false);

      // Reset the form after submission
      reset();
    } catch (error) {
      console.error("Video upload failed:", error);
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    // Create a promise for the delete operation
    const deletePromise = axios.delete(`/api/add-video?id=${id}`);

    // Use toast.promise to handle loading, success, and error states
    toast.promise(deletePromise, {
      loading: "Deleting video...", // Loading message
      success: (response) => {
        // Refresh the list of projects after successful deletion
        fetchProjects();
        return "video deleted successfully"; // Success message
      },
      error: (error) => {
        console.error("Error deleting video:", error);
        return "Failed to delete video"; // Error message
      },
    });
  };

  const onEditSubmit = async (data) => {
    if (!editingProject) return;

    setIsUpdating(true);

    try {
      const updatedVideo = {
        id: editingProject.id,
        title: data.title,
        videoId: data.videoId,
      };

      const response = await axios.put("/api/add-video", updatedVideo);
      if (response.status === 200) {
        toast.success("Video updated successfully");
        await fetchProjects();
      }

      setIsUpdating(false);
      reset();
      setEditingProject(null);
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Failed to update project");
      setIsUpdating(false);
    }
  };

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                  title: "",
                  videoId: "",
                }); // Reset the form with existing data
              }}
              className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm"
            >
              Add Video
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Video</DialogTitle>
                <DialogDescription>
                  Fill in the video details to add a new video.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold">Title</label>
                  <Input
                    type="text"
                    {...register("title", {
                      required: "video title is required",
                    })}
                  />
                  {errors.title && (
                    <span className="text-red-500">{errors.title.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold">VideoId</label>
                  <Input
                    {...register("videoId", {
                      required: "VideoId is required",
                    })}
                  />
                  {errors.videoId && (
                    <span className="text-red-500">
                      {errors.videoId.message}
                    </span>
                  )}
                </div>

                <div className="flex justify-end space-x-3">
                  <Button
                    type="submit" // Standard form submission
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <Loader className="animate-spin mr-2 w-5 h-5" />{" "}
                        Adding...
                      </div>
                    ) : (
                      "Add Video"
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
            placeholder="Search by video title..."
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
                  <CardTitle>{project?.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <iframe
                    className="w-full h-64 rounded-lg shadow-lg"
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </CardContent>
                <CardFooter>
                  <div className="ml-auto flex gap-2">
                    <Dialog>
                      <DialogTrigger
                        onClick={() => {
                          setEditingProject(project); // Set the project being edited
                          reset({
                            name: project.title,
                            videoId: project.videoId,
                          }); // Reset the form with existing data
                        }}
                        className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm"
                      >
                        Edit Video
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit this Video</DialogTitle>
                          <DialogDescription>
                            Make changes to update the video.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          onSubmit={handleSubmit(onEditSubmit)}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-sm font-semibold">
                              Title
                            </label>
                            <Input
                              type="text"
                              defaultValue={project?.title}
                              {...register("title", {
                                required: "video title is required",
                              })}
                            />
                            {errors.title && (
                              <span className="text-red-500">
                                {errors.title.message}
                              </span>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold">
                              VideoId
                            </label>
                            <Input
                              defaultValue={project?.videoId}
                              {...register("videoId", {
                                required: "videoId is required",
                              })}
                            />
                            {errors.videoId && (
                              <span className="text-red-500">
                                {errors.videoId.message}
                              </span>
                            )}
                          </div>

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

export default Video;
