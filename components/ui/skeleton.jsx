import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-black/30", className)}
      {...props}
    />
  );
}

export { Skeleton };
