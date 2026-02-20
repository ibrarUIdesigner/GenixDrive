import AboutHero from "../../components/AboutHero";
import AboutSection from "../../components/AboutSection";
import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";

import ab1 from "../../assets/ab1.jpg";
import ab2 from "../../assets/ab2.png";

import kf1 from "../../assets/kf1.png";
import kf2 from "../../assets/kf2.png";
import kf3 from "../../assets/kf3.png";
import kf4 from "../../assets/kf4.png";
import kf5 from "../../assets/kf5.png";
import ReadytoDrive from "../../components/web/ReadytoDrive";
import SectionHeading from "../../components/web/SectionHeading";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* About Hero Section (Slider) */}
      <AboutHero />

      {/* SECTION2 */}
      <section className="bg-surface-light px-[56px] py-[120px] padding-50">
        <SectionHeading
          paraText="We are shifting our approach towards a cleaner, more visual
            experience prioritizing impactful screens over heavy text. Excessive
            content can overwhelm users and clutter the interface, diluting the
            effectiveness of our product presentation."
        >
          Why GenixDrive is a<p className="text-primary">Game-Changer</p>
        </SectionHeading>

        <div className="grid md:grid-cols-5 gap-5">
          <div className="md:col-span-3 p-5 h-[400px] md:h-auto  bg-secondary rounded-2xl overflow-hidden z-10 relative">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={ab1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full  p-5  z-10">
              <SubHeading size="2xl" color="white" weight="medium">
                About AiGenix (Private) Limited
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="medium"
                className="leading-5"
              >
                AiGenix is a Karachi-based tech company building AI-driven
                solutions like GenixDrive to make mobility smarter, safer, and
                more connected.
              </Paragraph>
            </div>
          </div>
          <div className="md:col-span-2 p-10 bg-light-green rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="4xl"
                color="dark"
                weight="bold"
                className="mb-4"
              >
                What is GenixDrive?
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-8"
              >
                GenixDrive is a smart telematics solution developed by AiGenix
                (Private) Limited, a technology-driven company based in Karachi,
                Pakistan. Designed for both mobile and in-vehicle devices,
                GenixDrive tracks and analyzes driving behavior to generate
                clear safety scores. From speed and braking to cornering and
                acceleration, it provides drivers with meaningful insights into
                how responsibly they drive.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-5 mt-5">
          <div className="md:col-span-2  p-10 bg-secondary rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="4xl"
                color="white"
                weight="bold"
                className="mb-4"
              >
                What is GenixDrive?
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="medium"
                className="leading-8"
              >
                GenixDrive is a smart telematics solution developed by AiGenix
                (Private) Limited, a technology-driven company based in Karachi,
                Pakistan. Designed for both mobile and in-vehicle devices,
                GenixDrive tracks and analyzes driving behavior to generate
                clear safety scores. From speed and braking to cornering and
                acceleration, it provides drivers with meaningful insights into
                how responsibly they drive.
              </Paragraph>
            </div>
          </div>
          <div className="md:col-span-3 h-[400px] md:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={ab2}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* SECTION4 */}
      <section className="px-[56px] py-[120px] padding-50">
        <div className="section-heading text-center mb-[50px] md:mb-[150px] w-full md:w-1/2 m-auto">
          <SubHeading size="4xl" color="dark" className="mb-4">
            Key Features That
            <p className="text-primary">Drive the Difference</p>
          </SubHeading>
          <Paragraph
            size="base"
            color="default"
            weight="medium"
            className="leading-5"
          >
            Get started in minutes download the app or use our optional device,
            and begin protecting your loved ones with smart monitoring and peace
            of mind.
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-3 gap-5 justify-items-center">
          <div className="key-feature-container text-center bg-surface-light rounded-2xl p-5 border border-gray-200">
            <SubHeading size="2xl" color="dark" className="mb-1">
              Connection
            </SubHeading>
            <Paragraph
              size="base"
              color="default"
              weight="medium"
              className="leading-5"
            >
              Connection Stay close to your loved ones with real‑time updates
              that keep everyone informed and protected.
            </Paragraph>
            <div className="mt-7 text-center">
              <img className="m-auto block" src={kf1} alt="" />
            </div>
          </div>
          <div className="key-feature-container text-center bg-surface-light rounded-2xl p-5 border border-gray-200">
            <SubHeading size="2xl" color="dark" className="mb-1">
              GenixMeet
            </SubHeading>
            <Paragraph
              size="base"
              color="default"
              weight="medium"
              className="leading-5"
            >
              Plan meetups, chat instantly, and track your group together with
              the shared live race screen.
            </Paragraph>
            <div className="mt-7 text-center">
              <img className="m-auto block" src={kf2} alt="" />
            </div>
          </div>
          <div className="key-feature-container text-center bg-surface-light rounded-2xl p-5 border border-gray-200">
            <SubHeading size="2xl" color="dark" className="mb-1">
              Rewards
            </SubHeading>
            <Paragraph
              size="base"
              color="default"
              weight="medium"
              className="leading-5"
            >
              Drive safer, earn more — unlock points, perks, and real‑world
              benefits for good driving habits.
            </Paragraph>
            <div className="mt-7 text-center">
              <img className="m-auto block" src={kf3} alt="" />
            </div>
          </div>
          <div className="key-feature-container text-center bg-surface-light rounded-2xl p-5 border border-gray-200">
            <SubHeading size="2xl" color="dark" className="mb-1">
              Insights
            </SubHeading>
            <Paragraph
              size="base"
              color="default"
              weight="medium"
              className="leading-5"
            >
              Understand your driving patterns with clear safety scores and
              smart behavioral analysis.
            </Paragraph>
            <div className="mt-7 text-center">
              <img className="m-auto block" src={kf5} alt="" />
            </div>
          </div>
          <div className="key-feature-container text-center bg-surface-light rounded-2xl p-5 border border-gray-200">
            <SubHeading size="2xl" color="dark" className="mb-1">
              Live Tracking
            </SubHeading>
            <Paragraph
              size="base"
              color="default"
              weight="medium"
              className="leading-5"
            >
              See real‑time movement, monitor trips, and know where your loved
              ones are — instantly and effortlessly.
            </Paragraph>
            <div className="mt-7 text-center">
              <img className="m-auto block" src={kf4} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}

      <AboutSection bg="surface-light" />

      <ReadytoDrive />
    </div>
  );
};

export default About;
