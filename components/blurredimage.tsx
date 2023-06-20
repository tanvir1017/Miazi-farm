"use client";
import { WithClassName } from "@/types/common";
import cn from "clsx";
import Image from "next/image";
import { useState } from "react";

import type { ComponentProps } from "react";

interface BlurImageProps extends WithClassName, ComponentProps<typeof Image> {
  alt: string;
}

export default function BlurImageWithBlurHash(props: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={ (
        props.className,
        "duration-700 ease-in-out",
        isLoading
          ? "blur-2xl scale-110"
          : "blur-0 scale-100"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
