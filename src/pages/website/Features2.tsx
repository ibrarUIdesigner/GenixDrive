import React, { useState } from "react";
import frame from "../../assets/7th sec copy.png";
import frameMobile from "../../assets/FrameMobile.png";

import SubHeading from "../../components/sharedui/Subheading";
import Paragraph from "../../components/sharedui/Paragraph";
import StoreActionsButtons from "../../components/web/StoreActionsButtons";
import SectionHeading from "../../components/web/SectionHeading";

import ab1 from "../../assets/ab1.jpg";
import ab2 from "../../assets/ab2.png";
import kf1 from "../../assets/features/3kf1.png";
import kf2 from "../../assets/features/3kf2.png";
import kf3 from "../../assets/features/3kf3.png";
import kf4 from "../../assets/features/3kf4.png";
const Features2 = () => {
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
      <section className="banner h-screen overflow-hidden relative">
        {/* Desktop Image */}
        <img
          src={frame}
          alt="Features banner"
          className="hidden md:block absolute top-0 left-0 h-full w-full object-cover"
        />

        {/* Mobile Image */}
        <img
          src={frameMobile}
          alt="Features banner"
          className="block md:hidden absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="content absolute md:w-1/3 top-5 md:top-1/2 left-[58px] transform md:-translate-y-1/2  text-white">
          <SubHeading size="4xl" className="mb-5">
            3. Driving
            <p className="text-secondary">Insights</p>
          </SubHeading>

          <Paragraph size="sm">
            Drive smarter, safer, and more confidently with GenixDrive. By
            transforming your driving data into meaningful insights, GenixDrive
            helps you understand your habits, improve safety, and protect what
            truly matters.
          </Paragraph>

          <StoreActionsButtons />
        </div>
      </section>

      {/* FEATURE */}
      <section className="features px-[56px] py-[120px] bg-white">
        <SectionHeading
          className="mb-10"
          paraText="GenixDrive by AiGenix (Private) Limited is a smart telematics solution designed to make driving safer and more intelligent. It monitors driving habits, provides safety scores."
        >
          <p>
            Key Highlights of{" "}
            <span className="text-secondary">Driving Insights</span> &
          </p>
        </SectionHeading>

        {/* ......... */}
        <div className="grid md:grid-cols-5 gap-5">
          <div className="md:col-span-3 p-5 h-[400px] md:h-auto  bg-secondary rounded-2xl overflow-hidden z-10 relative">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={kf1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          </div>
          <div className="md:col-span-2 p-10 bg-light-green rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="4xl"
                color="dark"
                weight="bold"
                className="mb-4"
              >
                1. Turning Data Into Safer Journeys
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-8"
              >
                GenixDrive transforms telematics data into practical safety
                insights. By analyzing speed, braking, acceleration, and
                cornering, it reveals patterns that affect your safety on the
                road. These insights help you make smarter driving choices and
                create a habit of safer mobility every day.
              </Paragraph>
            </div>
          </div>
        </div>

        {/* .............. */}
        <div className="grid md:grid-cols-5 gap-5 mt-5">
          <div className="md:col-span-2  p-10 bg-secondary rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="4xl"
                color="white"
                weight="bold"
                className="mb-4"
              >
                2. Safety Scoring on Every Trip
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="medium"
                className="leading-8"
              >
                Every journey is tracked and scored with safety as the priority.
                The score reflects how responsibly you handle your vehicle,
                showing where you’re doing well and where improvement is needed.
                Over time, these scores encourage safer driving and reduce the
                risk of accidents.
              </Paragraph>
            </div>
          </div>
          <div className="md:col-span-3 h-[400px] md:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={kf2}
              alt=""
            />
          </div>
        </div>

        {/* ......... */}
        <div className="grid md:grid-cols-5 gap-5 mt-5">
          <div className="md:col-span-3 p-5 h-[400px] md:h-auto  bg-secondary rounded-2xl overflow-hidden z-10 relative">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={kf3}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full  p-5  z-10">
              <SubHeading size="2xl" color="white" weight="medium">
                3. Spotting Risky Behaviors
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="medium"
                className="leading-5"
              >
                Many unsafe habits go unnoticed while driving, but GenixDrive
                brings them to light. The app highlights risky events like
                over-speeding, sudden braking, or harsh cornering, making you
                aware of potential dangers. By identifying these patterns, it
                empowers you to drive more responsibly.
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
                3. Spotting Risky Behaviors
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-8"
              >
                Many unsafe habits go unnoticed while driving, but GenixDrive
                brings them to light. The app highlights risky events like
                over-speeding, sudden braking, or harsh cornering, making you
                aware of potential dangers. By identifying these patterns, it
                empowers you to drive more responsibly.
              </Paragraph>
            </div>
          </div>
        </div>

        {/* .............. */}
        <div className="grid md:grid-cols-5 gap-5 mt-5">
          <div className="md:col-span-2  p-10 bg-secondary rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="4xl"
                color="white"
                weight="bold"
                className="mb-4"
              >
                4. Insights for Every Vehicle
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="medium"
                className="leading-8"
              >
                Safety should never depend on the type of vehicle you’re using.
                GenixDrive works with both motorcycles and cars, tailoring its
                analysis to give accurate safety feedback for each trip. Whether
                two wheels or four, you’ll always know how safe your driving
                really is.
              </Paragraph>
            </div>
          </div>
          <div className="md:col-span-3 h-[400px] md:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={kf4}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs bg-surface-light px-[56px] py-[120px]">
        <SectionHeading paraText="Choose a plan that fits your driving lifestyle and enjoy all the safety, connectivity, and performance features GenixDrive has to offer.">
          Frequently Asked <p className="text-secondary">Questions</p>
        </SectionHeading>

        <div className="mt-10 space-y-6">
          {faqs.map((item, i) => {
            const active = open === i;
            return (
              <button
                key={i}
                className="w-full text-left relative bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-all"
                onClick={() => setOpen(active ? null : i)}
                aria-expanded={active}
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
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Features2;
