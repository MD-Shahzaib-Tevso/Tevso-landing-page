"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
    fallbackText?: string;
};

export function FallbackImage({
    src,
    alt,
    fallbackText = "Case Study",
    ...props
}: Props) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(`/placeholder.jpg`)}
            // onError={() => setImgSrc(`https://placehold.co/E8E8E8/311EE6?text=${encodeURIComponent(fallbackText)}`)}
        />
    );
}