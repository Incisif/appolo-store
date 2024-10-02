import Image from "next/image";
import SignupForm from "../../../components/SignupForm";

export default function Signup() {
  return (
    <div
      className="relative h-svh w-full overflow-hidden  "
      data-testid="signup-page"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 ">
        <Image
          src="/assets/signupBkg.webp"
          alt="signup background photo"
          className="object-cover brightness-75"
          data-testid="background-image"
          fill
          priority
        />
      </div>
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 flex items-center">
        <SignupForm />
        <div
          className=" font-manrope font-semibold text-9xl text-white ml-36 self-center space-y-4"
          data-testid="background-text"
        >
          <p>Bring</p>
          <p>Your</p>
          <p>Vision to</p>
          <p>Life</p>
        </div>
      </div>
    </div>
  );
}
