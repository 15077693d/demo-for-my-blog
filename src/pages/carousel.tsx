import React from "react";
import BadDaisyUICarousel from "~/components/carousel/BadDaisyUICarousel";
import GoodDaisyUICarousel from "~/components/carousel/GoodDaisyUICarousel";

export default function rating() {
  return (
    <div className="flex flex-col">
      <div className="min-h-[30vh]" />
      <h1>Bad</h1>
      <BadDaisyUICarousel carouselId="test" />
      <h1>Good</h1>

      <GoodDaisyUICarousel carouselId="test2" />

      <div className="min-h-[100vh]" />
    </div>
  );
}
