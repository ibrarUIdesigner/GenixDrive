import img1 from "../assets/brings1.jpg";
import img2 from "../assets/brings2.jpg";
import img3 from "../assets/brings3.png";
import blueStr from "../assets/bluestr.png";
import SubHeading from "./sharedui/SubHeading";
import Paragraph from "./sharedui/Paragraph";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const items = [
    {
      image: img1,
      title: "Enhanced Safety & Peace of Mind",
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
    <motion.section
      className="bg-gray-100 text-black font-cairo padding-50 py-[116px] px-[58px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SubHeading
            color="dark"
            weight="bold"
            size="4xl"
            className="mb-2 text-center"
          >
            Here’s What GenixDrive
            <div className="flex items-center justify-center gap-5">
              <img src={blueStr} alt="" />
              <p>Brings to You</p>
              <img src={blueStr} alt="" />
            </div>
          </SubHeading>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {items.map((item, idx) => (
            <motion.article
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="group rounded-xl overflow-hidden bg-white border border-surface-light shadow-sm"
            >
              <div className="w-[428px] max-w-full h-[428px] bg-black/5 rounded-[17.09px] overflow-hidden mx-auto">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BenefitsSection;
