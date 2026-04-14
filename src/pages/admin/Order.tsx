import React from "react";
import InfoCard from "../../components/sharedui/InfoCard";
import SubHeading from "../../components/sharedui/SubHeading";
import Badge from "../../components/sharedui/Badge";
import { Link } from "react-router-dom";
import { AlertTriangle, BadgeCheck, Phone, Smartphone } from "lucide-react";
import img1 from "../../assets/admin/1.png";
import img2 from "../../assets/admin/2.png";
import Paragraph from "../../components/sharedui/Paragraph";

const Order = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        {/* section left */}
        <div className="col-span-3 p-5 rounded-lg bg-white ">
          <div className="flex gap-5 ">
            {/* CARD 1 */}
            <div
              id="lato-font"
              className=" bg-gray-100 flex-1  p-2 border-gray-300 border rounded-lg relative"
            >
              <span className="w-[55px] h-[55px] bg-white border-gray-100 border rounded-full flex absolute -translate-y-1/2 left-1/2  -translate-x-1/2 items-center justify-center">
                <Smartphone size={22} className="text-blue-500" />
              </span>
              <div className="mt-10 text-center">
                <SubHeading className="text-center" weight="medium" size="lg">
                  Option 1: Smartphone Tracking
                </SubHeading>
                <SubHeading
                  className="text-center mt-5"
                  weight="bold"
                  size="xl"
                >
                  Use Smartphone
                </SubHeading>

                <div className="img mt-[30px]">
                  <img className="block m-auto" src={img1} alt="" />
                </div>

                <Paragraph>
                  You can start using Genix Drive right away with your
                  smartphone to record trips and driving insights.
                </Paragraph>
              </div>
              {/* checkbox */}
              <div
                className="check bg-white border border-gray-100 p-3 rounded-lg mt-[20px] flex items-center gap-3
              "
              >
                <input type="checkbox" name="" id="smphone" />
                <label htmlFor="smphone">
                  Use my smartphone as primary tracking device.
                </label>
              </div>

              {/* disclaimer */}
              <div className="mt-[20px] text-center text-gray-400 flex items-center gap-2 justify-center">
                <AlertTriangle size={16} />
                <span className="text-xs">
                  Disclaimer: Lower accuracy (GPS based).
                </span>
              </div>
            </div>
            {/* CARD 2 */}
            <div
              id="lato-font"
              className=" bg-gray-100 flex-1 p-2 border-green-300 border rounded-lg relative"
            >
              <span className="w-[55px] h-[55px] bg-white border-green-300 border rounded-full flex absolute -translate-y-1/2 left-1/2  -translate-x-1/2 items-center justify-center">
                <Smartphone size={22} className="text-blue-500" />
              </span>
              <div className="mt-10 text-center">
                <Badge variant="success">Completed</Badge>
                <SubHeading
                  className="text-center mt-5"
                  weight="medium"
                  size="lg"
                >
                  Option 2: Dedicated Device
                </SubHeading>
                <SubHeading
                  className="text-center mt-5"
                  weight="bold"
                  size="xl"
                >
                  Dedicated Monitoring Device
                </SubHeading>

                <div className="img mt-[30px]">
                  <img className="block m-auto" src={img2} alt="" />
                </div>

                <Paragraph>
                  To unlock maximum accuracy, real-time precision, and enhanced
                  reliability, we highly recommend installing our dedicated
                  monitoring device.
                </Paragraph>
              </div>
              {/* key benifits */}
              <div className="key-benifts mt-[30px]">
                <strong>Key Benefits:</strong>
                <p className="flex items-center gap-1.5 mb-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-gray-900 flex"></span>
                  <span>Ensures more consistent data capture.</span>
                </p>
                <p className="flex items-center gap-1.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-gray-900 flex"></span>
                  <span>Improved driving analysis and reporting.</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-900 flex"></span>
                  <span>Better overall app experience and reliability</span>
                </p>
              </div>
              {/* checkbox */}
              <div
                className="check bg-white border border-gray-100 p-3 rounded-lg mt-[20px] flex items-center gap-3
              "
              >
                <input type="checkbox" name="" id="device" />
                <label htmlFor="device">Order your device</label>
              </div>
            </div>
          </div>
        </div>
        {/* section-right */}
        <div className="col-span-2 p-5 rounded-lg bg-white ">
          <div className="bg-orange-100 p-2 border border-orange-400 rounded-lg text-center">
            <Badge variant="warning">PRIME</Badge>
            <SubHeading weight="bold" size="lg" className="mt-[10px]">
              GenixPrime
            </SubHeading>
          </div>
          {/* features list */}
          <div className="mt-[10px] rounded-lg border border-gray-400 overflow-hidden">
            <div className="features-head p-2 relative overflow-hidden border-b border-gray-400">
              <strong>Features</strong>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <Badge variant="warning">PRIME</Badge>
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Driving Score</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Trip Monitoring</p>
              <span className="bg-orange-100 text-xs absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                30 Days
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">
                Device Integration
                <span className="block text-gray-400">
                  Device Charges, $100
                </span>
              </p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Event Planning & Monitoring</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Emergency Response</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Real-Time Driving Alerts</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Route History</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Driver Rewards</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden ">
              <p className="text-sm">Live Location</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
          </div>
          {/* pricing */}
          <div className="pricing relative mt-[20px] rounded-lg  border border-purple-700 p-3">
            <span className="text-center text-xs rounded-full -translate-y-1/2 absolute left-1/2 -translate-x-1/2 top-0 p-2 text-white bg-purple-600">
              Best Value
            </span>
            <div>
              <strong>1 year, $191.99</strong>
              <Paragraph>$15.99/ month + One-time $100 for device</Paragraph>
            </div>
            <input
              name="price"
              type="radio"
              className="absolute top-1/2 -translate-y-1/2 right-5"
            />
          </div>
          <div className="pricing relative mt-[10px] rounded-lg  border border-gray-400 p-3">
            <div>
              <strong>1 year, $191.99</strong>
              <Paragraph>One-time $100 for device</Paragraph>
            </div>
            <input
              name="price"
              type="radio"
              className="absolute top-1/2 -translate-y-1/2 right-5"
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoCard title="Active Plan">
            <SubHeading size="lg" weight="bold">
              GenixDrive Premium
            </SubHeading>
            <div className="mt-2">
              <Badge variant="success">Active</Badge>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Next Renewal: 15 March 2026
            </p>
          </InfoCard>
          <InfoCard title="Quick Actions">
            <div className="flex flex-wrap gap-3">
              <Link
                to="/support"
                className="inline-flex items-center gap-2 rounded-lg ring-1 ring-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Phone className="w-4 h-4" />
                Contact Support
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg ring-1 ring-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Smartphone className="w-4 h-4" />
                Open App
              </a>
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default Order;
