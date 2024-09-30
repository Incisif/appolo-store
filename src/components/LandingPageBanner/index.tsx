import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner relative flex items-center">
      <Image
        src="/assets/banners/landingPage.webp"
        alt="banner"
        width={1200}
        height={379}
        className="rounded-lg object-cover"
        data-testid="banner-image"
      />
      <div
        className="absolute flex flex-col font-manrope text-6xl text-zinc-600 font-semibold left-16 gap-2"
        data-testid="banner-text"
      >
        <p>Capture</p>
        <p>Life&#39;s</p>
        <p>Essence</p>
      </div>
    </div>
  );
};

export default Banner;
