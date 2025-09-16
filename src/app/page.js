import AcademicPoster from "@/components/AcademicPoster/AcademicPoster";
import BioData from "@/components/BioData/BioData";
import EntrepreneurialExperience from "@/components/EntrepreneuralExperience/EntrepreneuralExperience";
import HeroSection from "@/components/HomePage/HeroSection";
import Presentation from "@/components/Presentations/Presentations";
import Videos from "@/components/Videos/Videos";
import VolunteerSection from "@/components/Volunteering/Volunteering";
import Websites from "@/components/Websites/Websites";
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
      <Websites/>
      <Presentation/>
      <AcademicPoster/>
    </>
  );
}
