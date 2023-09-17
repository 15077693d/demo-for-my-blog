export default function SimpleRating({ name }: { name: string }) {
  return (
    <div className="rating">
      <input
        type="radio"
        name={name}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  );
}
