import Hero from "../../components/Hero";
import FeaturesStrip from "../../components/FeaturesStrip";
import AboutSection from "../../components/AboutSection";
import BenefitsSection from "../../components/BenefitsSection";
import FeaturesBuild from "../../components/FeaturesBuild";
import SignupFlow from "../../components/web/SignupFlow";
import ReadytoDrive from "../../components/web/ReadytoDrive";
import SectionHeading from "../../components/web/SectionHeading";
import cric from "../../assets/circ.png";

import blog1 from "../../assets/blogs/1.jpg";
import blog2 from "../../assets/blogs/2.png";
import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const BlogsRecords = [
    {
      blogImg: blog1,
      category: "Telematics",
      title: "6 Tools & Resources We Used While Developing AlignUI",
      description:
        "Discover how telematics technology improves vehicle safety, efficiency, and real-time monitoring for modern drivers.",
      user: {
        userName: "Onur Eren",
        userImg:
          "https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80",
        date: "2026-02-10",
      },
    },
    {
      blogImg: blog2,
      category: "Maintenance",
      title: "Story of AlignUI Design System: From an Idea to the Release",
      description:
        "Regular maintenance ensures long vehicle life. Learn simple steps to prevent breakdowns and reduce repair costs.",
      user: {
        userName: "Onur Eren",
        userImg:
          "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603020.jpg?semt=ais_hybrid&w=740&q=80",
        date: "2026-02-08",
      },
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-primary">
      <Hero />
      <FeaturesStrip />
      <AboutSection bg="white" />
      {/* <BenefitsSection /> */}
      <FeaturesBuild />
      <SignupFlow />
      {/* BLOGS */}
      <section className="px-[56px] py-[120px] bg-surface-light padding-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            className="mb-20 paratExt"
            paraText="Stay updated with the latest tips, insights, and stories on safe driving, family protection, and smart vehicle care. Our blog is designed to help drivers and families make every journey smarter, safer, and more rewarding."
          >
            From the GenixDrive
            <div className="inline-block relative ml-5 p-2">
              <p>Blog</p>
              <img
                src={cric}
                alt="circle"
                className="absolute left-[70px] top-1/2 -translate-1/2 max-w-[193px] h-[112px]"
              />
            </div>
          </SectionHeading>

          <div className="flex flex-wrap justify-center gap-5 gap-5 place-items-center">
            {BlogsRecords.map((blog, index) => (
              <div
                onClick={() => navigate(`/blogs/${index}`)}
                key={index}
                className="w-full max-w-sm blog-card-container cursor-pointer bg-white p-5 rounded-2xl shadow-2xl"
              >
                <div className="blog-img mb-4">
                  <img
                    className="w-full h-[240px] object-cover rounded-2xl"
                    src={blog.blogImg}
                    alt=""
                  />
                </div>
                <div className="blog-deta">
                  <strong className="text-primary leading-5 mb-3 block blog-category">
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
                      <Paragraph
                        className="blog-user"
                        color="default"
                        size="sm"
                        weight="bold"
                      >
                        {blog.user.userName}
                      </Paragraph>
                      <Paragraph
                        color="muted"
                        size="sm"
                        className="text-gray-600 blog-date"
                      >
                        {blog.user.date}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReadytoDrive />
    </div>
  );
};

export default Home;
