import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
 
  const toDate = new Date();

  return (
    <footer className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex text-gray-400 space-x-4">
            <a href="https://www.facebook.com/dependra.bhatta" target="_blank">
              <FaFacebookSquare size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagramSquare size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dependra-bhatta/"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/?lang=en" target="_blank">
              <FaSquareXTwitter size={24} />
            </a>
          </div>
          <div className="mt-6 border-t border-gray-700 flex flex-col items-center text-gray-400 text-sm">
            <p className="mt-2">&copy; {toDate.getFullYear()} Dipendra Bhatta </p>
            <p>Gahanna, OH, United States</p>
            <p className="text-blue-600">
              <a href="mailto:bhatta.dependra@gmail.com">
                bhatta.dependra@gmail.com
              </a>
            </p>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
