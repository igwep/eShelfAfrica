// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";

export const TopSellingBooks = () => {
  const books = [
    {
      image: "/images/theEmpress.png",
      title: "The Empress",
      subtitle: "Author: Samuel M",
    },
    {
      image: "/images/thisIsTheOurEnd.png",
      title: "This Is Our End",
      subtitle: "Author: Samuel M",
    },
    {
      image: "/images/theBookTitle.png",
      title: "The Book Title",
      subtitle: "Author: Samuel M",
    },
    {
      image: "/images/hit.jpg",
      title: "The Mister",
      subtitle: "Author: Samuel M",
    },
  ];

  const scrollContainerRef = useRef(null);

  // Handle horizontal scroll with touch gestures
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;

    const scrollContainer = scrollContainerRef.current;
    const scrollAmount = touchStartX - touchEndX;

    if (Math.abs(scrollAmount) > 5) {
      scrollContainer.scrollLeft += scrollAmount; // Scroll horizontally
    }
  };

  return (
    <div className="w-full bg-gray-100 overflow-hidden pt-28 pb-28">
      <div className="flex flex-col w-full">
        {/* Section Title */}
        <div className="flex justify-center py-8">
          <p className="text-3xl">Top Selling Books</p>
        </div>

        {/* Books Carousel */}
        <div
          className="flex overflow-x-scroll overflow-y-visible h-auto w-full scrollbar-hide"
          ref={scrollContainerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            WebkitOverflowScrolling: "touch", // For smooth scrolling on iOS
            scrollBehavior: "smooth", // Enable smooth scroll behavior
          }}
        >
          {books.map((book, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white h-auto w-[80%] tablet:w-[45%] desktop:w-[26%] mx-4 shadow-xl rounded-md flex flex-col items-center p-4"
            >
              <img
                src={book.image}
                alt={`Slide ${index + 1}`}
                className="tablet:w-full w-[90%] tablet:h-[100%] h-[90%] object-cover mb-2"
              />
              <div className="flex justify-between w-full">
                <div className="flex flex-col w-[70%]">
                  <h2 className="text-[20px] text-gray-800">{book.title}</h2>
                  <p className="text-[15px] text-gray-600">{book.subtitle}</p>
                </div>
                <p
                  className="text-[32px]"
                  style={{
                    color: "#25A40C",
                  }}
                >
                  ₦3,600
                </p>
              </div>
              <div className="flex mt-4 justify-between w-full">
                <img src="/svg/stars.svg" alt="Stars" />
                <p className="text-[20px]">17.4k Reviews</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-20">
          <button
            className="flex items-center px-4 py-2 rounded-md gap-2 text-white"
            style={{
              backgroundColor: "#1E1E1E",
            }}
          >
            Explore more <img src="/svg/Icon.svg" alt="Explore Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
