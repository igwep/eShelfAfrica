// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Submit form data to API or process as needed
    console.log('Form Submitted', formData);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col gap-8 h-auto py-8 px-4 tablet:px-24 mx-4 tablet:mx-28">
        {/* Image and Write-up */}
        <div className="flex flex-col tablet:flex-row gap-8 items-center">
          {/* Image */}
          <div className="w-full tablet:w-[45%] h-[407px] bg-cover bg-center">
            <img
              src="images/contact.png"
              className="w-full h-full object-cover rounded-2xl"
              alt="Happy Lady with Laptop"
            />
          </div>

          {/* Write-up */}
          <div className="flex flex-col gap-6 justify-center w-full tablet:w-[45%] text-center md:text-left">
            <p className="font-medium text-[32px] tablet:text-[45px] leading-[48px] tablet:leading-[60px] text-gray-900">
              Make 100k every week from digital materials!
            </p>
            <p className="text-[20px]">Sign Up to get Started</p>

            <div className="flex justify-center tablet:justify-start">
              <button className="flex p-2 rounded-md items-center  text-white gap-3" style={{ backgroundColor: '#F9A431' }}>
                Sign up <img src="/svg/Icon.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full tablet:max-w-[541px] max-w-2xl mx-auto p-4 mt-20">
  <form
    onSubmit={handleSubmit}
    className="bg-white p-6 pb-8 rounded-md space-y-8"
  >
    <div className="text-center mb-8">
      <h2 className="text-[32px] font-semibold text-gray-800">Join Our Community</h2>
      <h2 className="tablet:text-[20px]  mx-4" style={{ color: '#6C6C6C' }}>
        Stay updated with the latest releases and exclusive offers.
      </h2>
    </div>

    {/* Form Fields */}
    <div>
      <label
        htmlFor="firstName"
        className="block text-sm font-medium text-gray-700"
      >
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter First Name"
        className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        required
      />
    </div>

    <div>
      <label
        htmlFor="lastName"
        className="block text-sm font-medium text-gray-700"
      >
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter Last Name"
        className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        required
      />
    </div>

    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
        className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        required
      />
    </div>

    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="********"
        className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        required
      />
    </div>

    <div>
      <label
        htmlFor="confirmPassword"
        className="block text-sm font-medium text-gray-700"
      >
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="********"
        className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full text-white py-2 rounded-md shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
      style={{ backgroundColor: '#1E1E1E' }}
    >
      Join Now
    </button>
  </form>
</div>

      </div>
    </div>
  );
};
