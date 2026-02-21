import { Car, Share2, TrendingUp, HeartHandshake } from "lucide-react";

import Paragraph from "./sharedui/Paragraph";
import { motion } from "framer-motion";
import SubHeading from "./sharedui/SubHeading";

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
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
        }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className={`group relative ${feature.bgColor} ${feature.textColor} p-10 lg:p-12 min-h-[400px] flex flex-col justify-center items-start l ring-1 ring-black/5 shadow-sm`}
          >
            <div
              className="pointer-events-none absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(160px circle at 80% 20%, rgba(0,0,0,0.06), transparent 60%)",
              }}
            />
            <div
              className={`${feature.iconColor} transition-transform duration-300 group-hover:-translate-y-1`}
            >
              {feature.icon}
            </div>

            <SubHeading
              color={feature.textColor === "text-white" ? "white" : "dark"}
              weight="bold"
              size="2xl"
              className="mb-6 stri-heading"
            >
              {feature.title}
            </SubHeading>

            <Paragraph
              color={feature.textColor === "text-white" ? "white" : "default"}
              weight="medium"
              size="sm"
              className="leading-relaxed strip-text"
            >
              {feature.description}
            </Paragraph>
            {/* <span className="mt-6 h-1 w-16 rounded-full bg-current/20 transition-all duration-300 group-hover:w-24 group-hover:bg-current/40" /> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesStrip;
