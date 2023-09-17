import React from "react";
import SimpleRating from "~/components/rating/SimpleRating";
import SimpleBadRating from "~/components/rating/SimpleRatingBad";

export default function Rating() {
  return (
    <div className="flex flex-col">
      <h1>Bad</h1>
      <SimpleBadRating />
      <SimpleBadRating />
      <h1>Good</h1>
      <SimpleRating name="123" />
      <SimpleRating name="1234" />
    </div>
  );
}
