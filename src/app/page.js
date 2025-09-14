import BioData from "@/components/BioData/BioData";
import EntrepreneurialExperience from "@/components/EntrepreneuralExperience/EntrepreneuralExperience";
import HeroSection from "@/components/HomePage/HeroSection";
import WorkExperience from "@/components/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BioData />
      <WorkExperience/>
      <EntrepreneurialExperience/>
    </>
  );
}
