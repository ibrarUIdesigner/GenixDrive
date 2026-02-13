import { Car, Share2, TrendingUp, HeartHandshake } from "lucide-react";
import SubHeading from "./sharedui/Subheading";
import Paragraph from "./sharedui/Paragraph";

const FeaturesStrip = () => {
  const features = [
    {
      id: 1,
      icon: <Car className="w-10 h-10 mb-6" />,
      title: "Smarter Driving",
      description:
        "Understand yours and your loved ones driving behavior with safety scores and smart insights calculated based on driving events.",
      bgColor: "bg-white",
      textColor: "text-black",
      iconColor: "text-black",
    },
    {
      id: 2,
      icon: <Share2 className="w-10 h-10 mb-6" />,
      title: "Seamless Meetups",
      description:
        "Create Genix meetups, chat instantly with your group, and be informed about everyone in real time using the live race screen.",
      bgColor: "bg-light-green",
      textColor: "text-black",
      iconColor: "text-black",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-10 h-10 mb-6" />,
      title: "Earn As You Drive",
      description:
        "Safe driving turns into real rewards — collect points, redeem perks, and enjoy benefits every time you drive.",
      bgColor: "bg-white",
      textColor: "text-black",
      iconColor: "text-black",
    },
    {
      id: 4,
      icon: <HeartHandshake className="w-10 h-10 mb-6" />,
      title: "Always Connected",
      description:
        "Stay linked with real-time location sharing and trip updates that keep your loved ones close, informed, and protected.",
      bgColor: "bg-secondary",
      textColor: "text-white",
      iconColor: "text-white",
    },
  ];

  return (
    <div className="w-full font-cairo">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`${feature.bgColor} ${feature.textColor} p-10 lg:p-12 min-h-[400px] flex flex-col justify-center items-start`}
          >
            <div className={feature.iconColor}>{feature.icon}</div>

            <SubHeading
              color={feature.textColor === "text-white" ? "white" : "dark"}
              weight="bold"
              size="2xl"
              className="mb-6"
            >
              {feature.title}
            </SubHeading>

            <Paragraph
              color={feature.textColor === "text-white" ? "white" : "default"}
              weight="medium"
              size="sm"
              className="leading-relaxed"
            >
              {feature.description}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesStrip;
