import React from "react";
import frame from "../../assets/frame.png";
import SubHeading from "../../components/sharedui/Subheading";
import Paragraph from "../../components/sharedui/Paragraph";
import {
  CircleCheck,
  CircleMinus,
  Headphones,
  Heart,
  Wallet,
} from "lucide-react";
import Button from "../../components/Button";
import ReadytoDrive from "../../components/web/ReadytoDrive";
import feature2 from "../../assets/features/2.png";
const Pricing = () => {
  return (
    <div className="pricing">
      <div className="banner">
        <img src={frame} alt="Pricing banner" className="w-full"/>
      </div>

      {/* PRICE CARDS SECTION */}
      <section className="bg-white price-cards px-[56px] py-[120px]">
        <div className="section-heading text-center mb-[150px] md:w-1/2 m-auto">
          <SubHeading size="4xl" color="dark" className="mb-4">
            <p>
              Explore Our <span className="text-primary">Flexible</span>{" "}
            </p>
            <p>Pricing Plans</p>
          </SubHeading>
          <Paragraph
            size="base"
            color="default"
            weight="medium"
            className="leading-5"
          >
            Choose a plan that fits your driving lifestyle and enjoy all the
            safety, connectivity, and performance features GenixDrive has to
            offer.
          </Paragraph>
        </div>

        {/* cARDS */}
        <div>
          <div className="card-container md:w-[500px] relative bg-light-green p-5 rounded-2xl block m-auto">
            <div className="text-right">
              <div className="price bg-gray-700 inline-block p-2 rounded-full mb-4 ">
                <span className="text-white text-sm">$19.99/month</span>
              </div>
            </div>

            <SubHeading size="4xl" className="mb-5">
              Premium Plan
            </SubHeading>
            <SubHeading size="xl" className="mb-2">
              GenixPrime
            </SubHeading>
            <Paragraph
              size="base"
              color="default"
              weight="medium"
              className="leading-5"
            >
              For those who want complete control, safety, and rewards in one
              place.
            </Paragraph>

            <div className="benefits mt-10 mb-5">
              <SubHeading size="xl" className="mb-5">
                Includes :
              </SubHeading>

              <p className="flex items-center gap-4  mb-4">
                <CircleCheck size={18} /> <span>30-Day Trip Tracking</span>
              </p>
              <p className="flex items-center gap-4 mb-4">
                <CircleCheck size={18} /> <span>Real-Time Driving Alerts</span>
              </p>
              <p className="flex items-center gap-4 mb-4">
                <CircleCheck size={18} />{" "}
                <span>Route History & Live Location</span>
              </p>
              <p className="flex items-center gap-4 mb-4">
                <CircleCheck size={18} />{" "}
                <span>Driver Rewards & Emergency Response</span>
              </p>
              <p className="flex items-center gap-4">
                <CircleCheck size={18} /> <span>Event Planning & Tracking</span>
              </p>
            </div>
            <div className="text-center">
              <Button size="lg" variant={"dark"} className="!rounded-full ">
                $19.99/month
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION */}
      <section className="bg-surface-light  px-[56px] py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative order-1 lg:order-none">
            <div className="w-full h-[220px]  md:w-[539px] md:h-[440px] bg-secondary rounded-2xl"></div>
            <div className="rounded-2xl absolute top-4 left-4 w-full h-[220px] md:w-[539px] md:h-[440px] overflow-hidden ">
              <img
                src={feature2}
                alt="Drive & Earn"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <SubHeading color="dark" weight="bold" size="3xl">
              Risk free plans
            </SubHeading>

            <div>
              <p className="flex items-center gap-4 mb-5">
                <span className="flex justify-center items-center bg-light-green p-5 rounded-2xl">
                  <Wallet size={18} />
                </span>
                <div>
                  <SubHeading color="dark" weight="medium" size="xl">
                    14-Day Money Back Guarantee
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="medium"
                    className="leading-5"
                  >
                    If the product does not perform as advertised, you are
                    eligible for a full refund within 14 days of your purchase.
                  </Paragraph>
                </div>
              </p>
              <p className="flex items-center gap-4 mb-5">
                <span className="flex justify-center items-center bg-light-green p-5 rounded-2xl">
                  <Headphones size={18} />
                </span>
                <div>
                  <SubHeading color="dark" weight="medium" size="xl">
                    24/7 Fast Support
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="medium"
                    className="leading-5"
                  >
                    Our Customer Service team is available around the clock to
                    assist with any questions or concerns you may have.
                  </Paragraph>
                </div>
              </p>
              <p className="flex items-center gap-4 mb-5">
                <span className="flex justify-center items-center bg-light-green p-5 rounded-2xl">
                  <CircleMinus size={18} />
                </span>
                <div>
                  <SubHeading color="dark" weight="medium" size="xl">
                    Cancel Anytime
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="medium"
                    className="leading-5"
                  >
                    You can cancel your subscription at any time, for any
                    reason, with no strings attached.
                  </Paragraph>
                </div>
              </p>
              <p className="flex items-center gap-4 mb-5">
                <span className="flex justify-center items-center bg-light-green p-5 rounded-2xl">
                  <Heart size={18} />
                </span>
                <div>
                  <SubHeading color="dark" weight="medium" size="xl">
                    Secure & Private Purchase
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="medium"
                    className="leading-5"
                  >
                    We prioritize your privacy and use advanced measures to
                    protect all your personal and financial information.
                  </Paragraph>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO DRIVE */}
      <ReadytoDrive />
    </div>
  );
};

export default Pricing;
