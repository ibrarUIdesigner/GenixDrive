import React from "react";
import SubHeading from "../../components/sharedui/Subheading";
import Paragraph from "../../components/sharedui/Paragraph";
import { useNavigate } from "react-router-dom";

import blog1 from "../../assets/blogs/1.jpg";
import blog2 from "../../assets/blogs/2.png";
import blog3 from "../../assets/blogs/3.jpg";
import blog4 from "../../assets/blogs/4.jpg";
import blog5 from "../../assets/blogs/5.jpg";
import blog6 from "../../assets/blogs/6.jpg";

const BlogsRecords = [
  {
    blogImg: blog1,
    category: "Social & Family Connect",
    title: "What Makes GenixDrive Different",
    description:
      "Discover how telematics technology improves vehicle safety, efficiency, and real-time monitoring for modern drivers.",
    user: {
      userName: "Olivia Rhye",
      userImg:
        "https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-10",
    },
  },
  {
    blogImg: blog2,
    category: "Safety & Protection",
    title: "What Makes GenixDrive Different",
    description:
      "Regular maintenance ensures long vehicle life. Learn simple steps to prevent breakdowns and reduce repair costs.",
    user: {
      userName: "Phoenix Baker",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603020.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-08",
    },
  },
  {
    blogImg: blog3,
    category: "Driving Insights",
    title: "What Makes GenixDrive Different",
    description:
      "GPS tracking helps monitor vehicle location and ensures safety for families and fleet managers alike.",
    user: {
      userName: "Lana Steiner",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603021.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-06",
    },
  },
  {
    blogImg: blog4,
    category: "Driving Insights",
    title: "What Makes GenixDrive Different",
    description:
      "AI-powered insights are transforming driving experiences with predictive analytics and smart alerts.",
    user: {
      userName: "Alec Whitten",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603022.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-05",
    },
  },
  {
    blogImg: blog5,
    category: "Social & Family Connect",
    title: "What Makes GenixDrive Different",
    description:
      "Use connected apps and vehicle data to plan efficient and enjoyable road trips with your loved ones.",
    user: {
      userName: "Demi WIlkinson",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603023.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-03",
    },
  },
  {
    blogImg: blog6,
    category: "Gamification & Rewards",
    title: "What Makes GenixDrive Different",
    description:
      "Learn how monitoring tools help optimize battery usage and performance in modern electric vehicles.",
    user: {
      userName: "Candice Wu",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603024.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-01",
    },
  },
];

export default BlogDetails;
