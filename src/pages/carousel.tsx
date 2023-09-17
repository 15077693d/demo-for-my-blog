import React from "react";
import DaisyUICarousel from "~/components/carousel/DaisyUICarousel";

export default function rating() {
  return (
    <div className="flex flex-col">
      <div className="min-h-[30vh]" />
      <DaisyUICarousel carouselId="test" />
      <div className="min-h-[100vh]" />
    </div>
  );
}
