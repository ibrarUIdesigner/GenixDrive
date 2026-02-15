import React from "react";
import SectionHeading from "../../components/web/SectionHeading";

import sigup from "../../assets/sign1.png";
import fami from "../../assets/q.png";
import drv from "../../assets/q2.png";
import rwsd from "../../assets/q3.png";
import blueStr from "../../assets/grnstr.png";

import demo1 from "../../assets/demo1.png";
import demo2 from "../../assets/demo2.png";

import SubHeading from "../../components/sharedui/Subheading";
import Paragraph from "../../components/sharedui/Paragraph";
import ReadytoDrive from "../../components/web/ReadytoDrive";

const Demo = () => {
  return (
    <div>
      {/* BANNER */}
      <section className="banner"></section>

      <div className="relative ">
        {/* <img src={demo1} className="absolute " />
        <img src={demo2} className="absolute " /> */}
        {/* SIGNUO */}
        <section className="demo px-[56px] py-[120px] bg-white">
          <SectionHeading
            className="mb-10"
            paraText="Start your journey with a quick signup and optional smart device installation."
          >
            <div className="flex items-center justify-center gap-5">
              <img src={blueStr} alt="" />
              <p>Sign Up & Setup</p>
              <img src={blueStr} alt="" />
            </div>
          </SectionHeading>

          <div className="img">
            <img className="w-full" src={sigup} alt="" />
          </div>
        </section>
        {/* SIGNUO */}
        <section className="demo px-[56px] py-[120px] bg-white">
          <SectionHeading paraText="Stay connected with real-time location sharing & place alerts.">
            <div className="flex items-center justify-center gap-5">
              <img src={blueStr} alt="" />
              <p>Add Family or Friends</p>
              <img src={blueStr} alt="" />
            </div>
          </SectionHeading>

          <div className="img">
            <img className="w-full" src={fami} alt="" />
          </div>
        </section>
        {/* START DRIVINF */}
        <section className="demo px-[56px] py-[120px] bg-white">
          <SectionHeading paraText="Your driving behavior is analyzed in real-time for safety insights.">
            <div className="flex items-center justify-center gap-5">
              <img src={blueStr} alt="" />
              <p>Start Driving</p>
              <img src={blueStr} alt="" />
            </div>
          </SectionHeading>

          <div className="img">
            <img className="w-full" src={drv} alt="" />
          </div>
        </section>
        {/* REWARDS*/}
        <section className="demo px-[56px] py-[120px] bg-white">
          <SectionHeading paraText="Earn rewards for every safe and responsible move you make on the road. GenixDrive recognizes your good driving habits by awarding points that can be redeemed for exciting vouchers, discounts, and exclusive offers—turning safety into a rewarding experience.">
            <div className="flex items-center justify-center gap-5">
              <img src={blueStr} alt="" />
              <p>Rewards & Level Up</p>
              <img src={blueStr} alt="" />
            </div>
          </SectionHeading>

          <div className="img">
            <img className="w-full" src={rwsd} alt="" />
          </div>
        </section>
      </div>

      <ReadytoDrive />
    </div>
  );
};

export default Demo;
