import Banner from "../components/LandingPageBanner";
import CardsSection from "@/components/CardsSection";
import VisionSection from "@/components/VisionSection";
import SignupDiscountBanner from "@/components/SignupDiscountBanner";

const LandingPage = () => {
  return (
    <div>
      <h1 className="hidden">Welcome to Appolo!</h1>
      <Banner />
      <CardsSection />
      <SignupDiscountBanner />
      <VisionSection />
    </div>
  );
};

export default LandingPage;
