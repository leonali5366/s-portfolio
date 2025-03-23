import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-white/30", className)}
      {...props}
    />
  );
}

export { Skeleton };
