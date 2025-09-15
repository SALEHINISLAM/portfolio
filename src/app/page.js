import BioData from "@/components/BioData/BioData";
import EntrepreneurialExperience from "@/components/EntrepreneuralExperience/EntrepreneuralExperience";
import HeroSection from "@/components/HomePage/HeroSection";
import Videos from "@/components/Videos/Videos";
import VolunteerSection from "@/components/Volunteering/Volunteering";
import WorkExperience from "@/components/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BioData />
      <WorkExperience/>
      <EntrepreneurialExperience/>
      <Videos/>
      <VolunteerSection />
    </>
  );
}
