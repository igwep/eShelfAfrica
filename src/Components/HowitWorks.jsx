import 'react';

export const HowitWorks = () => {
  const benefits = [
    {
      title: "Limitless Storage",
      description: "Store and access an extensive collection of e-books without physical boundaries.",
      image: "/svg/limitless.svg",
    },
    {
      title: "Instant Retrieval",
      description: "Find your desired content quickly with our advanced search options.",
      image: "/svg/instant.svg",
    },
    {
      title: "User-Friendly Interface",
      description: "Navigate effortlessly through our application.",
      image: "/svg/user-friendly.svg",
    },
    {
      title: "Secure Transactions",
      description: "Enjoy peace of mind with our secure payment options and data protection measures.",
      image: "/svg/secure.svg",
    },
  ];

  const howItWorks = [
    {
      number: 1,
      title: "Browse",
      description: "Explore a vast selection of ebooks across various genres.",
    },
    {
      number: 2,
      title: "Buy/Sell",
      description: "Easily purchase or list your ebooks for sale.",
    },
    {
      number: 3,
      title: "Share",
      description: "Join our referrer program to earn rewards by sharing your favorite titles.",
    },
  ];

  return (
    <div className="bg-black py-12">
      <div className="relative flex flex-wrap justify-between gap-8 px-6 tablet:px-24 mx-4 tablet:mx-28">
        {/* Left Section: Benefits */}
        <div className="w-full tablet:w-[27%] flex flex-col gap-4 z-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-center">
              {/* Icon */}
              <div
                className="px-3 py-2 border rounded-lg flex justify-center items-center"
                style={{ borderColor: '#FFC23A' }}
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="min-w-10 min-h-10"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-1">
                <p
                  className="font-semibold text-lg text-white"
                  style={{ color: '#FFC23A' }}
                >
                  {benefit.title}
                </p>
                <p className="text-xs text-gray-300 w-[100%]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Graphic */}
        <div className="absolute inset-0 justify-center items-center z-0 hidden desktop:flex">
          <img
            src="/svg/Group 2.svg"
            alt="Center Graphic"
            className="h-[380px] w-[380px] tablet:h-[580px] tablet:w-[580px]"
          />
        </div>

        {/* Right Section: How it Works */}
        <div className="w-full tablet:w-[30%] flex flex-col gap-6 items-start z-10">
          <p className="text-white text-[24px] tablet:text-[32px]">How it Works:</p>
          <div className="flex flex-col gap-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex gap-5 items-center">
                {/* Number Icon */}
                <div
                  className="border-2 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: '#FFEABC' }}
                >
                  <p className="px-4 py-2 tablet:px-5 tablet:py-3 text-black font-bold">{step.number}</p>
                </div>
                {/* Text */}
                <div className="flex flex-col">
                  <p
                    className="font-semibold text-lg text-white"
                    style={{ color: '#FFC23A' }}
                  >
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-300 w-[100%]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
