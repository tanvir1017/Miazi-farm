import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import BlurImageWithBlurHash from "../blurredimage";

export function HeadingBannerWithAspectRatio({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <AspectRatio ratio={12 / 5} className="bg-muted relative overflow-hidden">
      <BlurImageWithBlurHash
        src={src}
        alt={alt}
        fill
        className="rounded-md object-cover"
        placeholder="blur"
        blurDataURL="LPNKw;y?XSL}J.s9n#I[-;IURj%M"
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
