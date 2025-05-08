import React from "react";
import {
  FaSquareFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import { IoLogoGithub, IoLogoYoutube } from "react-icons/io";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100006997960060" target="_blank" rel="noreferrer">
                <FaSquareFacebook className="text-2xl cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/shashank-shekhar-singh-2b9076224/" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-2xl cursor-pointer" />
              </a>
              <a href="https://github.com/Shashank-6363" target="_blank" rel="noreferrer">
                <IoLogoGithub className="text-2xl cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@shekhar260" target="_blank" rel="noreferrer">
                <IoLogoYoutube className="text-2xl cursor-pointer" />
              </a>
            </div>
            
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
            <footer className="text-center text-sm text-gray-700 py-4">
  © 2024 Your Company. All rights reserved. | Supportive Partner ❤️ <span className="font-semibold text-gray-700">Shashank</span>
</footer>
            
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
