import React from "react";
import frame from "../../assets/frame2.png";
import BlogBanner from "../../assets/blogbaner.jpg";
import userPlaceHolder from "../../assets/userPlaceHolder.png";

import { useNavigate } from "react-router-dom";

import blog1 from "../../assets/blogs/1.jpg";
import blog2 from "../../assets/blogs/2.png";
import blog3 from "../../assets/blogs/3.jpg";
import blog4 from "../../assets/blogs/4.jpg";
import blog5 from "../../assets/blogs/5.jpg";
import blog6 from "../../assets/blogs/6.jpg";
import SubHeading from "../../components/sharedui/Subheading";
import Paragraph from "../../components/sharedui/Paragraph";
import ReadytoDrive from "../../components/web/ReadytoDrive";

const BlogsRecords = [
  {
    blogImg: blog1,
    category: "Telematics",
    title: "Smart Driving with Connected Vehicles",
    description:
      "Discover how telematics technology improves vehicle safety, efficiency, and real-time monitoring for modern drivers.",
    user: {
      userName: "Awais Khan",
      userImg:
        "https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-10",
    },
  },
  {
    blogImg: blog2,
    category: "Maintenance",
    title: "5 Tips to Keep Your Car in Top Shape",
    description:
      "Regular maintenance ensures long vehicle life. Learn simple steps to prevent breakdowns and reduce repair costs.",
    user: {
      userName: "Awais Khan",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603020.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-08",
    },
  },
  {
    blogImg: blog3,
    category: "Safety",
    title: "How GPS Tracking Enhances Security",
    description:
      "GPS tracking helps monitor vehicle location and ensures safety for families and fleet managers alike.",
    user: {
      userName: "Awais Khan",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603021.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-06",
    },
  },
  {
    blogImg: blog4,
    category: "Technology",
    title: "The Future of AI in Automobiles",
    description:
      "AI-powered insights are transforming driving experiences with predictive analytics and smart alerts.",
    user: {
      userName: "Awais Khan",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603022.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-05",
    },
  },
  {
    blogImg: blog5,
    category: "Lifestyle",
    title: "Road Trips Made Safer & Smarter",
    description:
      "Use connected apps and vehicle data to plan efficient and enjoyable road trips with your loved ones.",
    user: {
      userName: "Awais Khan",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603023.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-03",
    },
  },
  {
    blogImg: blog6,
    category: "Innovation",
    title: "Electric Vehicles & Smart Monitoring",
    description:
      "Learn how monitoring tools help optimize battery usage and performance in modern electric vehicles.",
    user: {
      userName: "Awais Khan",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603024.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-01",
    },
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className="blogs">
      {/* BANNER */}
      <div className="banner">
        <img src={frame} alt="Pricing banner" className="w-full" />
      </div>

      {/* BLOGS SECTION */}
      <section className="bg-white price-cards px-[56px] py-[120px] padding-50">
        <div className="col-span-3 p-5  bg-secondary rounded-2xl overflow-hidden z-10 relative h-[490px] mb-10">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={BlogBanner}
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          <div className="absolute bottom-0 left-0 w-full  p-10  z-10">
            <span className="inline-block bg-blue-500 text-white p-1 rounded-sm text-sm">
              Technology
            </span>
            <SubHeading
              size="4xl"
              color="white"
              weight="bold"
              className="mt-5 mb-5"
            >
              GenixDrive – Turning Everyday Journeys{" "}
              <p>into Safer, Smarter Experiences</p>
            </SubHeading>
            <div className="flex items-center gap-2 items-center">
              <img
                className="w-8 h-8 rounded-full mr-2 object-cover"
                src={userPlaceHolder}
                alt=""
              />

              <Paragraph color="white" size="sm" weight="bold">
                Tracey Wilson
              </Paragraph>
              <Paragraph color="white" size="sm" className="text-gray-600">
                Augest 20, 2022
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BlogsRecords.map((blog, index) => (
            <div
              onClick={() => navigate(`/blogs/${index}`)}
              key={index}
              className="blog-card-container cursor-pointer bg-white p-5 rounded-2xl shadow-2xl"
            >
              <div className="blog-img mb-4">
                <img
                  className="w-full h-[240px] object-cover rounded-2xl"
                  src={blog.blogImg}
                  alt=""
                />
              </div>
              <div className="blog-deta">
                <strong className="text-primary leading-5 mb-3 block">
                  {blog.category}
                </strong>
                <SubHeading className="mb-5" size="2xl">
                  {blog.title}
                </SubHeading>
                <Paragraph color="muted" size="sm" className="text-gray-600">
                  {blog.description}
                </Paragraph>
              </div>
              <div className="user-details mt-5">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2 object-cover"
                    src={blog.user.userImg}
                    alt=""
                  />
                  <div>
                    <Paragraph color="default" size="sm" weight="bold">
                      {blog.user.userName}
                    </Paragraph>
                    <Paragraph
                      color="muted"
                      size="sm"
                      className="text-gray-600"
                    >
                      {blog.user.date}
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* READY TO DRIVE */}
      <ReadytoDrive />
    </div>
  );
};

export default Blogs;
