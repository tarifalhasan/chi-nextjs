import Image from "next/image";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 mx-auto">
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
      <ul className="flex items-center">
        <li className=" px-5 text-sm font-normal hover:text-skin-primary  transition-all duration-500">
          <Link href={"/"}>
            <FaTelegram className=" w-4 h-4" />
          </Link>
        </li>
        <li className=" px-5 text-sm font-normal hover:text-skin-primary  transition-all duration-500">
          <Link href={"/"}>Mint</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
