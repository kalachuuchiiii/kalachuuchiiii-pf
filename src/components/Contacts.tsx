import React from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="w-full min-h-screen bg-white  text-zinc-950 flex flex-col items-center justify-center px-8 py-20 space-y-10">
      <h1 className="text-4xl font-bold mb-6 text-emerald-700">Contact Me</h1>

      <div className="flex flex-col md:flex-row md:space-x-16 space-y-6 md:space-y-0 items-start">
        {/* GitHub */}
        <a
          href="https://github.com/kalachuuchiiii"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 hover:text-emerald-400 transition-colors"
        >
          <FaGithub size={30} />
          <span className="text-lg">kalachuuchiiii</span>
        </a>

        {/* Email */}
        <a
          href="mailto:parissrowlet@gmail.com"
          className="flex items-center space-x-3 hover:text-emerald-400 transition-colors"
        >
          <MdEmail size={30} />
          <span className="text-lg">parissrowlet@gmail.com</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+639993045921"
          className="flex items-center space-x-3 hover:text-emerald-400 transition-colors"
        >
          <MdPhone size={30} />
          <span className="text-lg">+63 993 045 921</span>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/a.hopelieswithin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 hover:text-emerald-400 transition-colors"
        >
          <FaFacebook size={30} />
          <span className="text-lg">Paris Liam M. Gabagat</span>
        </a>
      </div>
      <p className=" indie-flower text-2xl mt-40">Thank yoi hehe ^^</p>
    </div>
  );
};

export default Contacts;
