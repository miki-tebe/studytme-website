import { BsCart4 } from "react-icons/bs";
import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="sticky top-0 z-50 flex items-center justify-between px-6 pt-6 bg-white border-b border-gray-100 h-header md:py-6">
    <h1 className="text-3xl font-black transition duration-500 text-twitch-purple hover:underline underline-offset-2 hover:animate-pulse">
      <Link href="/">STUDYTME</Link>
    </h1>

    <ul className="md:items-center md:flex">
      <li className="text-base font-medium text-gray-500 border-t border-gray-100 md:border-0 md:ml-6 hover:text-gray-900">
        <Link href="/">Home</Link>
      </li>
      <li className="text-base font-medium text-gray-500 border-t border-gray-100 md:border-0 md:ml-6 hover:text-gray-900">
        <Link href="/about">About</Link>
      </li>
      <li className="text-base font-medium text-gray-500 border-t border-gray-100 md:border-0 md:ml-6 hover:text-gray-900">
        <Link href="/sponsors">Sponsors</Link>
      </li>
    </ul>

    <Link href="https://studytme-shop.fourthwall.com/cart" passHref>
      <BsCart4 className="w-6 h-6 hover:cursor-pointer fill-twitch-purple hover:fill-twitch-purple-hover" />
    </Link>
  </header>
);

export default Header;
