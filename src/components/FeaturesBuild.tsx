import doodle from "../assets/Doodle.png";

import feature1 from "../assets/features/1.jpg";
import feature2 from "../assets/features/2.png";
import feature3 from "../assets/features/3.png";
import feature4 from "../assets/features/4.png";
import feature5 from "../assets/features/5.jpg";
import Button from "./Button";
import Paragraph from "./sharedui/Paragraph";
import SubHeading from "./sharedui/Subheading";

const FeaturesBuild = () => {
  return (
    <section className="bg-secondary text-white font-cairo  py-[116px] px-[58px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="z-10 text-4xl md:text-5xl font-bold mt-4 relative w-full md:w-1/2 tracking-wider">
            <img
              className="absolute -z-10 -top-[28px] left-[18px] w-[242px]"
              src={doodle}
              alt=""
            />
            Features Build for your Safety | Connection | Convenience
          </h2>
        </div>
        {/* Feature1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="flex flex-col gap-4">
            <SubHeading color="white" weight="bold" size="3xl">
              Social & Family Connect
            </SubHeading>

            <Paragraph size="sm" color="white">
              Feel peace of mind, stay protected, and keep your loved ones just
              a tap away. GenixDrive gives you the confidence of knowing your
              loved ones are safe.
            </Paragraph>
            <Button size="lg">Learn More</Button>
          </div>
          <div className="relative order-1 lg:order-none">
            <div className="w-full h-[220px]  md:w-[539px] md:h-[440px] bg-white/10 rounded-2xl"></div>
            <div className="rounded-2xl absolute top-4 left-4 w-full h-[220px] md:w-[539px] md:h-[440px] overflow-hidden ">
              <img
                src={feature1}
                alt="Drive & Earn"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Feature2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative order-1 lg:order-0">
            <div className=" w-full h-[220px]  md:w-[539px] md:h-[440px] bg-white/10 rounded-2xl"></div>
            <div className="rounded-2xl w-full h-[220px] absolute top-4 left-4 md:w-[539px] md:h-[440px] overflow-hidden ">
              <img
                src={feature2}
                alt="Drive & Earn"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <SubHeading color="white" weight="bold" size="3xl">
              Gamification & Rewards
            </SubHeading>

            <Paragraph size="sm" color="white">
              Always alert. Always watching out for you. Always putting your
              safety first. GenixDrive becomes your smart digital companion,
              watching over every mile with consistent protection.
            </Paragraph>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
        {/* Feature3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="flex flex-col gap-4">
            <SubHeading color="white" weight="bold" size="3xl">
              Safety & Protection
            </SubHeading>

            <Paragraph size="sm" color="white">
              Always alert. Always watching out for you. Always putting your
              safety first.GenixDrive becomes your smart digital companion,
              watching over every mile with constant protection.
            </Paragraph>
            <Button size="lg">Learn More</Button>
          </div>
          <div className="relative order-1 lg:order-none">
            <div className="  w-full h-[220px] md:w-[539px] md:h-[440px]  bg-white/10 rounded-2xl"></div>
            <div className="rounded-2xl absolute top-4 left-4 w-full h-[220px] md:w-[539px] md:h-[440px]  overflow-hidden ">
              <img
                src={feature3}
                alt="Drive & Earn"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Feature4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative order-1 lg:order-none">
            <div className="  w-full h-[220px] md:w-[539px] md:h-[440px]  bg-white/10 rounded-2xl"></div>
            <div className="rounded-2xl absolute top-4 left-4 w-full h-[220px] md:w-[539px] md:h-[440px]  overflow-hidden ">
              <img
                src={feature4}
                alt="Drive & Earn"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <SubHeading color="white" weight="bold" size="3xl">
              Organize meetups
            </SubHeading>
            <Paragraph size="sm" color="white">
              It’s connection, coordination, and adventure—all in one place.
              Turn plans into experiences with GenixMeet—create a meetup, bring
              everyone together in one chat, and watch the group’s movement
              unfold in real time with the race screen.
            </Paragraph>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
        {/* Feature5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="flex flex-col gap-4">
            <SubHeading color="white" weight="bold" size="3xl">
              Smart Vehicle Care
            </SubHeading>
            <Paragraph size="sm" color="white">
              Take care of your vehicle with smart telematics features.
              GenixDrive helps you monitor usage, track performance, and keep
              your car safer and smarter on the road.
            </Paragraph>

            <Button size="lg">Learn More</Button>
          </div>
          <div className="relative order-1 lg:order-none">
            <div className="  w-full h-[220px] md:w-[539px] md:h-[440px]  bg-white/10 rounded-2xl"></div>
            <div className="rounded-2xl absolute top-4 left-4 w-full h-[220px] md:w-[539px] md:h-[440px]  overflow-hidden ">
              <img
                src={feature5}
                alt="Drive & Earn"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBuild;
