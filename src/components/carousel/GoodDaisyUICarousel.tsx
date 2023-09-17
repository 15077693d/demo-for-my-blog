type IProps = {
  carouselId: string;
  classNameCarousel?: string;
  classNameForImage?: string;
};

export default function GoodDaisyUICarousel({ carouselId }: IProps) {
  const handleClickBtn = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const btn = event.currentTarget;
    const carousel = document.getElementById(carouselId);
    console.log(carousel);
    if (carousel) {
      const href = btn.getAttribute("href")!;
      const target = carousel.querySelector<HTMLDivElement>(href)!;
      const left = target.offsetLeft;
      carousel.scrollTo({ left: left });
    }
  };
  return (
    <>
      <div id={carouselId} className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a
          onClick={(e) => handleClickBtn(e)}
          href="#item1"
          className="btn btn-xs"
        >
          1
        </a>
        <a
          onClick={(e) => handleClickBtn(e)}
          href="#item2"
          className="btn btn-xs"
        >
          2
        </a>
        <a
          onClick={(e) => handleClickBtn(e)}
          href="#item3"
          className="btn btn-xs"
        >
          3
        </a>
        <a
          onClick={(e) => handleClickBtn(e)}
          href="#item4"
          className="btn btn-xs"
        >
          4
        </a>
      </div>
    </>
  );
}
