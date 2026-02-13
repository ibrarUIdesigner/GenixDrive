import centerMobile from "../assets/homeMobile.png";
import Button from "./Button";
import StoreActionsButtons from "./web/StoreActionsButtons";

const Hero = () => {
  return (
    <div className="bg-primary min-h-[calc(100vh+40px)] w-full text-white font-cairo overflow-hidden relative flex items-center">
      {/* Center Image (Absolute Positioned) */}
      <div className="absolute -bottom-2 sm:-bottom-6 inset-0 z-0 hidden md:flex items-center justify-center pointer-events-none">
        <img
          src={centerMobile}
          alt="App Mockup"
          className="h-[65vh] lg:h-[95%] object-contain drop-shadow-2xl relative z-10 -bottom-[20px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full relative z-30">
        {/* Left Content */}
        <div className="md:col-span-5 flex flex-col gap-5 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.1] text-center md:text-left">
            Drive Smart <br />
            Stay Safe. <br />
            Feel <span className="text-light-green">Close.</span>
          </h1>

          <div className="hidden md:flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <Button variant="primary" size="md">
              Get Started For Free
            </Button>
            <Button variant="outline" size="md">
              Explore Features
            </Button>
          </div>
          {/* <div className="w-12 h-[1px] bg-white rotate-90 absolute -left-0 -bottom-[45px]"></div> */}
          {/* <div className="w-12 h-[1px] bg-white rotate-90 absolute -left-0 -bottom-[55px]"></div> */}
          <div className="hidden md:flex scroll-indication  gap-5 mt-5">
            <div className="scroll-linee-indicator"></div>
            <p className="text-base text-white/60">
              Scroll to <span className="block">Explore</span>{" "}
            </p>
          </div>
        </div>

        {/* Mobile Center Image (Inline) */}
        <div className="md:hidden relative z-10 mt-6">
          <div className="flex justify-center">
            <img
              src={centerMobile}
              alt="App Mockup"
              className="h-[42vh] object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Spacer for Center Image */}
        <div className="hidden lg:block md:col-span-3"></div>

        {/* Right Content */}
        <div className="md:col-span-4 text-center md:text-left  md:flex flex-col gap-5 lg:pl-10 mt-8 md:mt-0">
          <div className="flex justify-center md:justify-start gap-12 lg:gap-16">
            <div>
              <p className="text-xs md:text-sm text-light-purple mb-1">
                Active Users
              </p>
              <p className="text-2xl md:text-3xl font-bold">10K+</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-light-purple mb-1">
                Downloads
              </p>
              <p className="text-2xl md:text-3xl font-bold">50K+</p>
            </div>
          </div>

          <p className="text-xs  md:text-sm text-white/90 leading-relaxed font-light">
            From real-time safety alerts to family location sharing and exciting
            rewards — GenixDrive is your complete driving companion.
          </p>

          <div className="mb-10 md:mb-auto">
            <p className="text-xs font-bold uppercase mb-4 tracking-widest text-light-purple">
              Download Now On:
            </p>
            <StoreActionsButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
