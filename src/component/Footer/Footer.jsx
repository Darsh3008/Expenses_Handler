import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-3">Darsh Kanani</h2>
          <p className="text-sm opacity-90">
            Sharing knowledge about programming, web development and projects.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="hover:text-yellow-200 transition">Darsh Kanani</p>
          <p className="hover:text-yellow-200 transition">Surat, India</p>
          <p className="hover:text-yellow-200 transition">+91 7859995483</p>
          <p className="hover:text-yellow-200 transition">darshkanani326@email.com</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Me</h3>

          <div className="flex gap-5 text-2xl">

            <a className="hover:scale-125 transition" href="https://www.instagram.com/darsh_3008?igsh=MTRzeW53MXp4ZmM4dA==" >
              <FaInstagram />
            </a>
            

            <a className="hover:scale-125 transition" href="https://github.com/Darsh3008">
              <FaGithub />
            </a>

            <a className="hover:scale-125 transition" href="https://www.linkedin.com/in/darsh-kanani-61b718375">
              <FaLinkedin />
            </a>


          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center py-4 bg-black/20">
        © {new Date().getFullYear()} Darsh Kanani • All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;