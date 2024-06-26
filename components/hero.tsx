import Image from "next/image";

const Hero = () => {
  return (
    <div className="  min-h-screen 2xl:min-h-[841px] relative overflow-hidden bg-hero bg-cover bg-center flex items-center flex-col justify-center">
      <div className=" py-20  px-4 relative container w-full mx-auto">
        <div className=" space-y-5">
          <div className=" flex  items-center ">
            <div>
              <h2 className=" font-pixel text-skin-primary font-normal md:text-[11rem]   lg:text-[8rem] text-[6.375rem]">
                CHI
              </h2>
            </div>
            <div>
              <p className=" font-neuemachina text-skin-primary text-3xl md:text-5xl">
                CW404
              </p>
              <p className=" font-neuemachina text-skin-primary text-3xl md:text-5xl">
                NFT
              </p>
            </div>
          </div>
          <div className=" space-y-3 pl-4 max-w-[604px]">
            <h2 className=" text-center sm:text-left text-5xl font-normal text-skin-primary font-neuemachina">
              collection
            </h2>
            <p className=" text-center sm:text-left text-lg md:text-xl font-normal text-white font-jet">
              In the realm where energies converge, CHI breathes,A force unseen,
              in the cosmic weave.
            </p>

            <p className=":text-left text-xs sm:text-sm font-jet font-normal">
              Through the silence, spirits achieve,The essence of CHI, <br />{" "}
              for those who believe.
            </p>
            <div className=" pt-[25px]   lg:pt-[20px]">
              <button
                id="mint"
                aria-label="mint"
                className=" w-full lg:w-auto text-black  items-center justify-center h-[42px] px-6 inline-flex hover:bg-skin-primary/80 bg-skin-primary"
              >
                Mint now
              </button>
            </div>
          </div>
          <Image
            className=" hidden lg:block absolute z-30  left-[25%] top-[62%]"
            src={"/hero_assets.png"}
            width={301}
            height={201}
            alt="chi-nft"
          />
        </div>
        <div className=" pt-12">
          <Image
            className=" hidden lg:block z-10 lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[1000px] w-full lg:absolute lg:top-1/2  lg:-translate-y-1/2 right-0"
            src={"/hero_.webp"}
            alt="gherdknvd"
            width={788}
            height={501}
          />

          <Image
            src={"/hero_mobiel.webp"}
            width={675}
            height={439}
            alt="dfd"
            className=" lg:hidden w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
