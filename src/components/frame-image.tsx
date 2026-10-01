import { cn } from "lib/utils";

export function FrameImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("frame-photo w-full rounded-2xl object-cover", className)}
    />
  );
}
