// eslint-disable-next-line no-unused-vars
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Footer = () => {
  return (
    <div className="bg-[#181818] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            {/* Icons */}
            <div className="flex space-x-4 ">
              {/* Instagram Icon */}
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
              <XIcon sx={{fontSize:'24px'}} />
               {/*   <InstagramIcon />  */}
              </a>

              {/* YouTube Icon */}
              <a href="https://www.instgram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
              <InstagramIcon sx={{fontSize:'24px'}} /> 
              </a>

              {/* LinkedIn Icon */}
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
             <YouTubeIcon sx={{fontSize:'24px'}} />
              </a>

              {/* Twitter (X) Icon */}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
             <LinkedInIcon sx={{fontSize:'24px'}} />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-200 hover:text-white">About us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-200 hover:text-white">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-200 hover:text-white">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-200 hover:text-white">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-200 hover:text-white">BlogAfrica</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-200 hover:text-white">eLearning Courses</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-200 hover:text-white">Free AI</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="mb-2">
                <a href="mailto:support@eshelfafrica.com.ng" className="text-gray-200 hover:text-white">support@eshelfafrica.com.ng</a>
              </li>
              <li className="mb-2">
                <a href="tel:+2348060657918" className="text-gray-200 hover:text-white">+2348060657918</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        
      </div>
    </div>
  );
};
