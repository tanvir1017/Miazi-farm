import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import Image from "next/image";

export function HeadingBannerWithAspectRatio({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <AspectRatio ratio={12 / 5} className="bg-muted relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="rounded-xl object-cover"
      />
    </AspectRatio>
  );
}
export function LoginBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <AspectRatio ratio={12 / 5} className="bg-muted relative">
      <Image src={src} alt={alt} fill className="rounded-md object-cover" />
    </AspectRatio>
  );
}
