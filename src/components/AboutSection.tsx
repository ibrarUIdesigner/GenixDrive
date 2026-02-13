import centerMobile from "../assets/HomeCenterMobile.png";
import ill from "../assets/ill.jpg";
import Paragraph from "./sharedui/Paragraph";
import SubHeading from "./sharedui/Subheading";

const AboutSection = ({ bg }: { bg: string }) => {
  return (
    <section className={`bg-${bg} text-black font-cairo p-[70px] md:p-[135px]`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SubHeading color="dark" weight="bold" size="4xl" className="mb-6">
            What is GenixDrive used for?
          </SubHeading>
          <Paragraph
            color="default"
            weight="medium"
            size="base"
            className="leading-8"
          >
            GenixDrive is a smart driving companion designed to make every
            journey safer, smarter, and more rewarding. It uses advanced
            telematics and AI to track driving behavior, monitor vehicle
            performance, and provide real-time safety alerts. Families can stay
            connected through location sharing and place notifications, while
            drivers gain valuable insights to improve their driving habits.
            Additionally, GenixDrive makes safe driving a rewarding experience
            with points, vouchers, and other incentives.
          </Paragraph>
        </div>
        <div className="lg:col-span-6">
          <div className="bg-surface-light rounded-2xl p-8 h-[360px] lg:h-[420px] flex items-center justify-center shadow-sm">
            <img
              src={ill}
              alt="GenixDrive app"
              className="h-full w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
