// eslint-disable-next-line no-unused-vars
import React from 'react';

export const About = () => {
  return (
    <div className="bg-gray-50 pb-24">
      <div className="flex flex-col gap-20 py-4 px-6 tablet:px-24 pt-20 mt-4 tablet:mr-28 mb-4 tablet:ml-28">
        {/* First Write-Up */}
        <div className="bg-other flex flex-col gap-8 tablet:gap-16 px-6 py-6 tablet:px-[128px] tablet:py-[55px] rounded-3xl">
          <p className="text-center text-base tablet:text-xl text-gray-700">
            Unlock a World of Knowledge with Our Ebook Marketplace Explore an extensive library of ebooks covering every subject imaginable from personal growth and hobbies to academic resources. Whether you&apos;re a student seeking study materials or a teacher looking for classroom resources, our platform offers something for everyone. Discover high-quality, affordable content designed to educate, inspire, and empower.
          </p>
          <div className="flex flex-col gap-4 tablet:gap-8">
            <p className="text-center text-base tablet:text-xl text-gray-700">
              Join our community of learners and educators today, and take your Knowledge to the next level!
            </p>
            <div className="flex justify-center">
              <button
                className="text-white px-4 py-2 tablet:px-6 tablet:py-2 rounded-md gap-2 flex items-center justify-center"
                style={{ backgroundColor: "#F9A431" }}
              >
                Explore Books <div><img src="/svg/Icon.svg" alt="Explore Icon" /></div>
              </button>
            </div>
          </div>
        </div>

        {/* Second Write-Up */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 text-center w-full tablet:w-[65%] items-center">
            <h1 className="text-2xl tablet:text-3xl">About eShelf</h1>
            <p className="text-gray-500 text-sm tablet:text-base">
              eShelf is your ultimate digital marketplace for buying and selling ebooks. Our platform connects readers and authors, providing a seamless experience for discovering and sharing knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
