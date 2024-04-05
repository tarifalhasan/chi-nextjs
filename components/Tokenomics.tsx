import Image from "next/image";

const Tokenomics = () => {
  return (
    <div className=" py-6">
      <div className="">
        <h3 className=" text-center text-2xl md:text-6xl font-pixel">
          Tokenomics
        </h3>
      </div>
      <div className="">
        <Image
          src={"/tokenomice.png"}
          alt=""
          width={1440}
          height={1035}
          className=" w-full h-auto  hidden lg:block"
        />
        <Image
          src={"/tokenomice-mobile.png"}
          alt=""
          width={470}
          height={872}
          className=" w-full h-auto  lg:hidden"
        />
      </div>
    </div>
  );
};

export default Tokenomics;
