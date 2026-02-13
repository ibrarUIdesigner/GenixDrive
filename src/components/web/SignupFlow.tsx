import React, { useState } from "react";
import SubHeading from "../sharedui/Subheading";
import Paragraph from "../sharedui/Paragraph";

import step1 from "../../assets/signup/1.png";
import step2 from "../../assets/signup/2.png";
import step3 from "../../assets/signup/3.png";
import step4 from "../../assets/signup/4.png";

const SignupFlow = () => {
  return (
    <section className="bg-white text-black font-cairo p-[70px] md:p-[135px]">
      <div className="section-heading text-center">
        <SubHeading size="4xl" color="dark">
          Sign-up Process
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
      <div className="mt-[70px]">
        <Switch />

        <div className="steps grid grid-cols-1 md:grid-cols-2 gap-10 mt-[76px]">
          {/* STEP1 */}
          <div className="step-container relative p-10 rounded-2xl bg-surface-light border overflow-hidden">
            <div className="step-details">
              <SubHeading
                size="2xl"
                weight="black"
                className="uppercase text-purple-700 mb-2"
              >
                step 1
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-5"
              >
                First, download the GenixDrive app from the Google Play Store or
                App Store.
              </Paragraph>
              <img
                src={step1}
                alt="step 1"
                className="w-full h-[200px] mt-[50px]"
              />
            </div>
          </div>
          {/* STEP2 */}
          <div className="step-container relative p-10 rounded-2xl bg-surface-light border">
            <div className="step-details">
              <SubHeading
                size="2xl"
                weight="black"
                className="uppercase text-purple-700 mb-2"
              >
                step 2
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-5"
              >
                First, download the GenixDrive app from the Google Play Store or
                App Store.
              </Paragraph>
              <img
                src={step2}
                alt="step 2"
                className="w-full h-[200px] object-cover mt-[50px] "
              />
            </div>
          </div>
          {/* STEP3 */}
          <div className="step-container relative   p-10 rounded-2xl bg-surface-light border">
            <div className="step-details">
              <SubHeading
                size="2xl"
                weight="black"
                className="uppercase text-purple-700 mb-2"
              >
                step 3
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-5"
              >
                First, download the GenixDrive app from the Google Play Store or
                App Store.
              </Paragraph>
              <img
                src={step3}
                alt="step 3"
                className="w-full h-[200px] object-cover mt-[50px] "
              />
            </div>
          </div>
          {/* STEP4 */}
          <div className="step-container p-10 relative rounded-2xl bg-surface-light border overflow-hidden">
            <div className="step-details">
              <SubHeading
                size="2xl"
                weight="black"
                className="uppercase text-purple-700 mb-2"
              >
                step 4
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-5"
              >
                First, download the GenixDrive app from the Google Play Store or
                App Store.
              </Paragraph>
              <img
                src={step4}
                alt="step 4"
                className="w-full h-[200px] object-cover mt-[50px] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupFlow;

const Switch = () => {
  const [mode, setMode] = useState<"with" | "without">("with");
  return (
    <div className="flex items-center justify-center">
      <div className="relative inline-flex items-center w-[420px] h-14 rounded-full border border-black/10 bg-white shadow-sm p-1">
        <div
          className={`absolute inset-y-1 left-1 w-1/2 rounded-full bg-primary transition-transform duration-300 ${
            mode === "with" ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <button
          type="button"
          onClick={() => setMode("with")}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${
            mode === "with" ? "text-white" : "text-black"
          }`}
        >
          WITH DEVICE
        </button>
        <button
          type="button"
          onClick={() => setMode("without")}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${
            mode === "without" ? "text-white" : "text-black"
          }`}
        >
          WITHOUT DEVICE
        </button>
      </div>
    </div>
  );
};
