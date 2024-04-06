"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <header className=" bg-black z-50  fixed left-0 right-0 top-0  px-8 py-5 mx-auto">
      <div className="flex  items-center justify-between ">
        <div>
          <Image src={"/logo.svg"} alt="chi-logo" width={112} height={26} />
        </div>
        <ul className=" hidden sm:flex items-center">
          <li className=" font-jet px-5 text-sm font-normal hover:text-skin-primary  transition-all duration-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" px-5 text-sm font-normal hover:text-skin-primary  transition-all duration-500">
            <Link href={"/"}>Mint</Link>
          </li>
        </ul>
        <ul className=" hidden sm:flex gap-x-5 items-center">
          <li className="text-sm font-normal hover:text-skin-primary  transition-all duration-500">
            <Link target="_blank" href={"/"}>
              <FaTelegram className=" w-5 h-5" />
            </Link>
          </li>
          <li className="text-sm font-normal hover:text-skin-primary  transition-all duration-500">
            <Link target="_blank" href={"/"}>
              <FaXTwitter className=" w-5 h-5" />
            </Link>
          </li>
          <li className="text-sm font-normal hover:text-skin-primary  transition-all duration-500">
            <Link target="_blank" href={"/"}>
              <FaDiscord className=" w-6 h-6" />
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className=" sm:hidden"
        >
          {!isOpenMenu ? (
            <HiOutlineMenuAlt3 className=" w-8 h-8" />
          ) : (
            <IoClose className=" w-8 h-8" />
          )}
        </button>
      </div>
      {isOpenMenu && (
        <ul className=" flex flex-col items-center gap-y-4">
          <li className=" font-jet px-5 text-sm font-normal hover:text-skin-primary  transition-all duration-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" px-5 text-sm font-normal hover:text-skin-primary  transition-all duration-500">
            <Link href={"/"}>Mint</Link>
          </li>
          <li className="text-sm font-normal hover:text-skin-primary  transition-all duration-500">
            <Link target="_blank" href={"/"}>
              <FaTelegram className=" w-5 h-5" />
            </Link>
          </li>
          <li className="text-sm font-normal hover:text-skin-primary  transition-all duration-500">
            <Link target="_blank" href={"/"}>
              <FaXTwitter className=" w-5 h-5" />
            </Link>
          </li>
          <li className="text-sm font-normal hover:text-skin-primary  transition-all duration-500">
            <Link target="_blank" href={"/"}>
              <FaDiscord className=" w-6 h-6" />
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
