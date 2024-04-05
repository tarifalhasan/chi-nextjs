import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex  fixed left-0 right-0 top-0 items-center justify-between px-8 py-5 mx-auto">
      <div>
        <Image src={"/logo.svg"} alt="chi-logo" width={112} height={26} />
      </div>
      <ul className="flex items-center">
        <li className=" px-5 text-sm font-normal hover:text-skin-primary  transition-all duration-500">
          <Link href={"/"}>Home</Link>
        </li>
        <li className=" px-5 text-sm font-normal hover:text-skin-primary  transition-all duration-500">
          <Link href={"/"}>Mint</Link>
        </li>
      </ul>
      <ul className="flex gap-x-5 items-center">
        <li className="text-sm font-normal hover:text-skin-primary  transition-all duration-500">
          <Link href={"/"}>
            <FaTelegram className=" w-5 h-5" />
          </Link>
        </li>
        <li className="text-sm font-normal hover:text-skin-primary  transition-all duration-500">
          <Link href={"/"}>
            <FaXTwitter className=" w-5 h-5" />
          </Link>
        </li>
        <li className="text-sm font-normal hover:text-skin-primary  transition-all duration-500">
          <Link href={"/"}>
            <FaDiscord className=" w-6 h-6" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
