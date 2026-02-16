import centerMobile from "../assets/HomeCenterMobile.png";
import ill from "../assets/ill.jpg";
import Paragraph from "./sharedui/Paragraph";
import SubHeading from "./sharedui/Subheading";
import { motion } from "framer-motion";

const AboutSection = ({ bg }: { bg: string }) => {
  return (
    <motion.section
      className={`bg-${bg} text-black font-cairo p-[70px] md:p-[135px]`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        <motion.div
          className="lg:col-span-6"
          variants={{
            hidden: { opacity: 0, x: -24 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
        <motion.div
          className="lg:col-span-6"
          variants={{
            hidden: { opacity: 0, x: 24 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative bg-surface-light rounded-2xl p-8 h-[360px] lg:h-[420px] flex items-center justify-center shadow-sm overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <motion.img
              src={ill}
              alt="GenixDrive app"
              className="h-full w-auto object-contain drop-shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -right-10 -bottom-10 w-64 h-64 bg-secondary/10 blur-3xl rounded-full"
              animate={{ x: [0, 8, 0], y: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
