import React from "react";
import {
  // FaFacebook,
  // FaTwitter,
  // FaInstagram,
  // FaLinkedinIn,
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
              {/* <FaFacebook size={24} /> */}
              <a href="https://www.facebook.com/profile.php?id=100006997960060" target="_blank">
                <FaSquareFacebook className="text-2xl cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/shashank-shekhar-singh-2b9076224/" target="_blank">
                <FaLinkedin className="text-2xl cursor-pointer" />
              </a>
              <a href="https://github.com/Shashank-6363" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub className="text-2xl cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@shekhar260" target="_blank">
                <IoLogoYoutube className="text-2xl cursor-pointer" />
              </a>
              {/* <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} /> */}
            </div>
            
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
            <footer className="text-center text-sm text-gray-700 py-4">
  © 2024 Your Company. All rights reserved. | Supportive Partner ❤️ <span className="font-semibold text-gray-700">Shashank</span>
</footer>
              {/* <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Shashank</p> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
