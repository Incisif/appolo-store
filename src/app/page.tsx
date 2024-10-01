import Banner from "../components/LandingPageBanner";
import CardsSection from "@/components/CardsSection";

const LandingPage = () => {
  return (
    <div>
      <h1 className="hidden">Welcome to Appolo!</h1>
      <Banner />
      <CardsSection />
    </div>
  );
};

export default LandingPage;
