import { Star } from "lucide-react";
import img1 from "../assets/brings1.jpg";
import img2 from "../assets/brings2.jpg";
import img3 from "../assets/brings3.png";
import SubHeading from "./sharedui/Subheading";
import Paragraph from "./sharedui/Paragraph";

const BenefitsSection = () => {
  const items = [
    {
      image: img1,
      title: "Enhanced Safety & Peace Of Mind",
      description:
        "With instant alerts, geo-fencing, and family location sharing, GenixDrive ensures drivers and loved ones stay protected on every journey.",
    },
    {
      image: img2,
      title: "Smarter Driving & Vehicle Management",
      description:
        "Driving insights, trip history, and smart telematics help users improve their driving habits, extend vehicle health, and make every ride more efficient and reliable.",
    },
    {
      image: img3,
      title: "Motivation Through Rewards & Connectivity",
      description:
        "By gamifying safe driving and enabling family or social connections, GenixDrive not only encourages responsible driving but also makes safety engaging and rewarding.",
    },
  ];

  return (
    <section className="bg-gray-100 text-black font-cairo py-[116px] px-[58px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-10">
          <Star className="w-6 h-6 text-secondary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Here’s What GenixDrive Brings to You
          </h2>
          <Star className="w-6 h-6 text-secondary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-white border border-surface-light shadow-sm"
            >
              <div className="w-[428px] max-w-full h-[428px] bg-black/5 rounded-[17.09px] overflow-hidden mx-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <SubHeading
                  color="dark"
                  weight="bold"
                  size="xl"
                  className="mb-2"
                >
                  {item.title}
                </SubHeading>

                <Paragraph
                  color="default"
                  weight="medium"
                  size="sm"
                  className="leading-relaxed"
                >
                  {item.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
