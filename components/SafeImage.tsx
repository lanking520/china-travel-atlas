"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { PLACE_IMAGE_FALLBACK } from "@/content/place-images";

/** China place fallback (Great Wall Commons) — never foreign Unsplash lake. */
export const IMAGE_FALLBACK = PLACE_IMAGE_FALLBACK;

type SafeImageProps = Omit<ImageProps, "src" | "onError"> & {
  src: string;
  fallbackSrc?: string;
};

export function SafeImage({
  src,
  fallbackSrc = IMAGE_FALLBACK,
  alt,
  ...rest
}: SafeImageProps) {
  const [current, setCurrent] = useState(src);

  return (
    <Image
      {...rest}
      src={current}
      alt={alt}
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
