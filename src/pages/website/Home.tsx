import React from "react";
import Hero from "../../components/Hero";
import FeaturesStrip from "../../components/FeaturesStrip";
import AboutSection from "../../components/AboutSection";
import BenefitsSection from "../../components/BenefitsSection";
import FeaturesBuild from "../../components/FeaturesBuild";
import SignupFlow from "../../components/web/SignupFlow";
import ReadytoDrive from "../../components/web/ReadytoDrive";

const Home = () => {
  return (
    <div className="bg-primary">
      <Hero />
      <FeaturesStrip />
      <AboutSection bg="white" />
      <BenefitsSection />
      <FeaturesBuild />
      <SignupFlow />
      <ReadytoDrive />
    </div>
  );
};

export default Home;
