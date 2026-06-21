import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Career Connect
            </h2>

            <p className="text-gray-400 mt-2">
              Find your dream job and connect with top companies.
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-center">
              Connect With Us
            </h3>

            <div className="flex gap-5 text-2xl text-gray-400 justify-center">

              <a href="#">
                <FaFacebook className="hover:text-blue-500 transition" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-pink-500 transition" />
              </a>

              <a href="#">
                <FaTwitter className="hover:text-sky-400 transition" />
              </a>

              <a href="#">
                <FaGithub className="hover:text-white transition" />
              </a>

              <a href="#">
                <FaLinkedin className="hover:text-blue-400 transition" />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-5 text-center text-gray-500">
          © 2026 Career Connect | All Rights Reserved
        </div>

      </div>

    </footer>
  );
};

export default Footer;

