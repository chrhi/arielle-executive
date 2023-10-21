import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-fit bg-gray-50 border-t">
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2021-2022 All rights reserved | Build with ❤ by{" "}
          <Link
            href={"https://github.com/chrhi"}
            className="hover:text-blue-600 font-semibold cursor-pointer"
          >
            abdellah chehri{" "}
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
