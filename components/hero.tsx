import Image from "next/image";

const Hero = () => {
  return (
    <div className=" min-h-screen relative overflow-hidden bg-hero bg-cover bg-center flex items-center flex-col justify-center">
      <div className="  px-4 container w-full mx-auto">
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
            <h4 className=" text-center sm:text-left text-5xl font-normal text-skin-primary font-neuemachina">
              collection
            </h4>
            <h5 className=" text-center sm:text-left text-lg md:text-xl font-normal text-white font-jet">
              In the realm where energies converge, CHI breathes,A force unseen,
              in the cosmic weave.
            </h5>

            <p className=":text-left text-xs sm:text-sm font-jet font-normal">
              Through the silence, spirits achieve,The essence of CHI, <br />{" "}
              for those who believe.
            </p>
            <div className=" pt-[25px]   lg:pt-[20px]">
              <button className=" w-full lg:w-auto text-black  items-center justify-center h-[42px] px-6 inline-flex hover:bg-skin-primary/80 bg-skin-primary">
                Mint now
              </button>
            </div>
          </div>
        </div>
        <div className=" pt-12">
          <Image
            className=" hidden lg:block z-10 lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[1000px] w-full lg:absolute lg:top-1/2  lg:-translate-y-1/2 right-0"
            src={"/hero_.png"}
            alt="gherdknvd"
            width={788}
            height={501}
          />

          <Image
            src={"/hero_mobiel.png"}
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
