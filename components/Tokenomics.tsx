import Image from "next/image";

const Tokenomics = () => {
  return (
    <div className=" py-6 lg:py-16 xl:py-5">
      <div className="">
        <h3 className=" text-center text-2xl md:text-6xl font-pixel">
          Tokenomics
        </h3>
      </div>
      <div className=" lg:-mt-[8%]">
        <Image
          src={"/tokenomice.webp"}
          alt=""
          width={1440}
          height={1035}
          className=" w-full h-auto  hidden lg:block"
          quality={80}
        />
        <Image
          src={"/tokenomice-mobile.webp"}
          alt=""
          width={470}
          height={872}
          className=" w-full h-auto  lg:hidden"
          quality={80}
        />
      </div>
    </div>
  );
};

export default Tokenomics;
