import React from "react";
import SubHeading from "../sharedui/Subheading";
import Paragraph from "../sharedui/Paragraph";
import { Linkedin, Youtube, Twitter } from "lucide-react";
import logo from "../../assets/logo.png";
import StoreActionsButtons from "./StoreActionsButtons";

const Footer = () => {
  return (
    <footer className="font-cairo bg-primary text-white px-[58px] py-12 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 justify-between">
        <div className="space-y-4 col-span-2">
          <div className="h-10 w-32 rounded flex items-center justify-center">
            <img src={logo} alt="Genix Drive Logo" />
          </div>
          <Paragraph
            size="base"
            color="white"
            className="max-w-xs text-justify"
          >
            GenixDrive is your trusted driving companion — built to keep you,
            your family, and your vehicle safe on every journey. Stay connected,
            drive smarter, and enjoy the peace of mind you deserve.
          </Paragraph>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <SubHeading color="white" weight="bold" size="4xl" className="mb-4 ">
            Quick <p>Access</p>
          </SubHeading>
          <ul className="space-y-3 text-sm">
            <li>
              <a className="hover:opacity-90" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:opacity-90" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:opacity-90" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:opacity-90" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:opacity-90" href="#">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <SubHeading color="white" weight="bold" size="4xl" className="mb-4">
            Features
          </SubHeading>
          <ul className="space-y-3 text-sm">
            <li>
              <a className="hover:opacity-90" href="#">
                Social & Family Connect
              </a>
            </li>
            <li>
              <a className="hover:opacity-90" href="#">
                Safety & Protection
              </a>
            </li>
            <li>
              <a className="hover:opacity-90" href="#">
                Driving Insights
              </a>
            </li>
            <li>
              <a className="hover:opacity-90" href="#">
                Gamification & Rewards
              </a>
            </li>
          </ul>
        </div>

        <div>
          <SubHeading color="white" weight="bold" size="4xl" className="mb-4">
            Download <p>Now</p>
          </SubHeading>
          <StoreActionsButtons className="!block" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
