import Image from "next/image";

export default function Signup() {
  return (
    <div className="relative h-screen w-full overflow-hidden" data-testid="signup-page"  >
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/assets/signupBg.webp"
          alt="signup background photo"
          className="object-cover"
          data-testid="background-image"
          fill
          priority
        />
      </div>

      
      
    </div>
  );
}
