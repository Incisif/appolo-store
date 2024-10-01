import Banner from "../components/LandingPageBanner";
import CardsSection from "@/components/CardsSection";
import VisionSection from "@/components/VisionSection";

const LandingPage = () => {
  return (
    <div>
      <h1 className="hidden">Welcome to Appolo!</h1>
      <Banner />
      <CardsSection />
      <VisionSection />
    </div>
  );
};

export default LandingPage;
