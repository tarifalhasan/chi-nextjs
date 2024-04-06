import Link from "next/link";

import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <header className="flex  items-center justify-between px-8 py-5 mx-auto">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="36"
          viewBox="0 0 68 36"
          fill="none"
        >
          <path
            d="M57.4954 22.6396V23.1675H61.541V28.6346H53.9792V25.8068H58.05V25.304H54.0045V19.8369H61.541V22.6396H57.4954Z"
            fill="#FFF500"
          />
          <path
            d="M52.8767 23.4942L51.2257 24.2357L52.8767 24.9773V28.6346H45.3149V19.8369H52.8767V23.4942ZM49.7764 22.1243H48.8059V23.092H49.7764V22.1243ZM49.7764 25.3794H48.8059V26.3472H49.7764V25.3794Z"
            fill="#FFF500"
          />
          <path
            d="M41.1276 28.6346L40.1226 25.4925L39.1048 28.6346H35.3901L38.6087 19.8369H41.6237L44.8423 28.6346H41.1276Z"
            fill="#FFF500"
          />
          <path
            d="M35.0752 25.5303V28.6346H27.9861V19.8369H31.4616V25.5303H35.0752Z"
            fill="#FFF500"
          />
          <path
            d="M68.0001 7.11206V16.0668H64.4899V12.7536H63.4761V16.0668H59.9658V7.11206H63.4761V10.4253H64.4899V7.11206H68.0001Z"
            fill="#FFF500"
          />
          <path
            d="M59.3357 10.2718H56.9988V16.0668H53.4807V10.2718H51.1438V7.11206H59.3357V10.2718Z"
            fill="#FFF500"
          />
          <path
            d="M52.0889 12.9071V16.0668H44.8423V7.11206H48.3951V12.9071H52.0889Z"
            fill="#FFF500"
          />
          <path
            d="M44.3698 10.2718H42.0329V16.0668H38.5149V10.2718H36.178V7.11206H44.3698V10.2718Z"
            fill="#FFF500"
          />
          <path
            d="M31.5023 9.96479V10.5021H35.5478V16.0668H27.9861V13.1885H32.0568V12.6768H28.0113V7.11206H35.5478V9.96479H31.5023Z"
            fill="#FFF500"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3827 0L21.314 7.30174L19.2099 10.4344L10.3012 4.48367L4.59189 8.00547V17.0676L12.9486 22.3083L10.9359 25.5001L0.811035 19.1505V5.90426L10.3827 0Z"
            fill="#FFF500"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.9313 35.5112L-5.72205e-05 28.2095L2.10402 25.0769L11.0127 31.0276L16.7221 27.5058V18.4437L8.36536 13.2029L10.3781 10.0111L20.5029 16.3607V29.607L10.9313 35.5112Z"
            fill="#FFF500"
          />
        </svg>
        <span className=" pt-2 text-xs font-normal font-jet">
          ©2024 STLTH LABS. All Rights Reserved
        </span>
      </div>

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

export default Footer;
