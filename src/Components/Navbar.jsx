// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between relative items-center tablet:py-4 px-4 mx-2 tablet:px-24 mt-4 tablet:mr-28 mb-4 tablet:ml-28">
      {/* Logo */}
      <div>
        <img src="svg/eShelveAfrica 1.svg" alt="eShelve Africa" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="block tablet:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden tablet:flex gap-2">
        <button className="text-lg text-white px-3 rounded-md py-2 bg-primary">Sign in</button>
        <button className="px-3 rounded-md py-2 text-lg text-primary">Sign up</button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'h-24 px-4 mt-4' : 'h-0'
        }`}
      >
        <div className={`flex flex-col bg-white gap-2 `}>
          <button className="text-lg text-white px-3 rounded-md py-2 bg-primary">Sign in</button>
          <button className="px-3 rounded-md py-2 text-lg text-primary">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
