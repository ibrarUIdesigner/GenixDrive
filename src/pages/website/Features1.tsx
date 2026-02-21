import { useState } from "react";
import { motion } from "framer-motion";
import frame from "../../assets/7th sec copy.png";
import frameMobile from "../../assets/FrameMobile.png";

import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import StoreActionsButtons from "../../components/web/StoreActionsButtons";
import SectionHeading from "../../components/web/SectionHeading";

import kf1 from "../../assets/features/2kf1.jpg";
import kf2 from "../../assets/features/2kf2.png";
import kf3 from "../../assets/features/2kf3.png";
import kf4 from "../../assets/features/2kf4.png";
const Features1 = () => {
  const faqs = [
    {
      q: "Do I need permission to track a friend?",
      a: "Yes. Friends must accept your request before you can track them, and the connection lasts for a maximum of 8 hours.",
    },
    {
      q: "Can I see my driving safety score?",
      a: "Yes. Your driving behavior is analyzed to generate a safety score with insights such as speed, braking, and cornering.",
    },
    {
      q: "Is GenixDrive available on both Android and iOS?",
      a: "Yes. You can download GenixDrive from the Play Store and App Store.",
    },
    {
      q: "Does GenixDrive work without internet?",
      a: "Core features require internet for live tracking and syncing. Some data is cached and updates when connectivity is restored.",
    },
    {
      q: "Can parents monitor teen drivers?",
      a: "Yes. Family Connect allows location sharing, place notifications, and trip summaries for peace of mind.",
    },
    {
      q: "How do rewards work?",
      a: "Safe driving earns points which can be redeemed for vouchers and offers available in the app.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {/* BANNER */}
      <motion.section
        className="banner h-screen overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Desktop Image */}
        <motion.img
          src={frame}
          alt="Features banner"
          className="hidden md:block absolute top-0 left-0 h-full w-full object-cover"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Mobile Image */}
        <motion.img
          src={frameMobile}
          alt="Features banner"
          className="block md:hidden absolute top-0 left-0 h-full w-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          className="content absolute md:w-1/3 top-5 md:top-1/2 p-2 md:p-0 text-center md:text-left md:left-[58px] transform md:-translate-y-1/2  text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <SubHeading size="4xl" className="mb-3 mainheading">
            2. Safety &<p className="text-secondary inline">Protection</p>
          </SubHeading>

          <Paragraph size="sm">
            Your safety is our top priority. With GenixDrive, every journey is
            protected — from real-time tracking to instant alerts, we ensure you
            and your loved ones are safe wherever the road takes you.
          </Paragraph>

          <StoreActionsButtons />
        </motion.div>
      </motion.section>

      {/* FEATURE */}
      <motion.section
        className="features px-[56px] py-[120px] bg-white padding-50"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          className="mb-10"
          paraText="GenixDrive by AiGenix (Private) Limited is a smart telematics solution designed to make driving safer and more intelligent. It monitors driving habits, provides safety scores."
        >
          <p>
            Key Highlights of
            <span className="text-secondary"> Safety & Protection</span>
          </p>
        </SectionHeading>

        {/* ......... */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-3 p-5 h-[400px] md:h-auto bg-secondary rounded-2xl overflow-hidden z-10 relative">
            <motion.img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={kf1}
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          </div>
          <div className="md:col-span-2 p-10 bg-secondary rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="3xl"
                color="white"
                weight="bold"
                className="mb-4"
              >
                1. Safety Comes First
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="medium"
                className="leading-8"
              >
                On every journey, safety is the top priority. GenixDrive’s
                Safety & Protection feature keeps you and your loved ones
                protected on the road, offering smart alerts and real-time
                notifications that help prevent risks before they turn into
                emergencies.
              </Paragraph>
            </div>
          </div>
        </motion.div>

        {/* .............. */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-2  p-10 bg-light-green rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="3xl"
                color="dark"
                weight="bold"
                className="mb-4"
              >
                2. Speed & Driving Alerts
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-8"
              >
                GenixDrive actively monitors driving behavior and sends instant
                alerts in case of over-speeding, harsh braking, or risky
                maneuvers. Parents can keep an eye on teen drivers, while
                families gain peace of mind knowing their loved ones are driving
                responsibly.
              </Paragraph>
            </div>
          </div>
          <div className="md:col-span-3 h-[400px] md:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
            <motion.img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={kf2}
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* ......... */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-3 p-5 h-[400px] md:h-auto bg-secondary rounded-2xl overflow-hidden z-10 relative">
            <motion.img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={kf3}
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          </div>
          <div className="md:col-span-2 p-10 bg-secondary rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="3xl"
                color="white"
                weight="bold"
                className="mb-4"
              >
                3. Geo-Fencing for Added Security
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="medium"
                className="leading-8"
              >
                Set up safe zones (geo-fences) for your vehicle or family
                members. Whether it’s your child arriving at school, your car
                leaving home, or entering an unknown location, you’ll get
                immediate notifications so you always know what’s happening.
              </Paragraph>
            </div>
          </div>
        </motion.div>

        {/* .............. */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-2  p-10 bg-light-green rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="3xl"
                color="dark"
                weight="bold"
                className="mb-4"
              >
                4. Anti-Theft Protection
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-8"
              >
                Your vehicle deserves protection too. With GenixDrive’s
                anti-theft tools, you’ll be alerted to unusual movements or
                unauthorized activity. It adds an extra layer of security,
                helping you protect one of your most valuable assets.
              </Paragraph>
            </div>
          </div>
          <div className="md:col-span-3 h-[400px] md:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
            <motion.img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={kf4}
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        className="faqs bg-surface-light px-[56px] py-[120px] padding-50"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading paraText="Choose a plan that fits your driving lifestyle and enjoy all the safety, connectivity, and performance features GenixDrive has to offer.">
          Frequently Asked <p className="text-secondary">Questions</p>
        </SectionHeading>

        <div className="mt-10 space-y-6">
          {faqs.map((item, i) => {
            const active = open === i;
            return (
              <motion.button
                key={i}
                className="w-full text-left relative bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-all"
                onClick={() => setOpen(active ? null : i)}
                aria-expanded={active}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.995 }}
              >
                {/* <span className="absolute left-6 top-6 w-6 h-1 bg-primary rounded-full"></span> */}
                <span
                  className={`inline-flex text-4xl items-center justify-center w-8 h-8 rounded-full ${
                    active ? " text-secondary" : " text-gray-900"
                  }`}
                >
                  {active ? "-" : "+"}
                </span>
                <div className="ml-12 flex items-center justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    Q{i + 1}: {item.q}
                  </h3>
                </div>
                {active && (
                  <p className="ml-12 mt-2 text-sm md:text-base text-gray-600 leading-7">
                    {item.a}
                  </p>
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Features1;
