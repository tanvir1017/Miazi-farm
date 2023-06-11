import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export function HeadingBannerWithAspectRatio({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <AspectRatio ratio={12 / 5} className="bg-muted relative">
      <Image src={src} alt={alt} fill className="rounded-md object-cover" />
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
