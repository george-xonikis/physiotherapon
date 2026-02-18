import Image from "next/image";

type HeroVariant = "home" | "terzanidis" | "papatheodorou" | "default";

interface HeroSectionProps {
  variant?: HeroVariant;
  firstName?: string;
  lastName?: string;
}

export default function HeroSection({ variant = "home", firstName, lastName }: HeroSectionProps) {
  if (variant === "terzanidis") {
    return (
      <section
        id="hero"
        className="relative w-full h-screen flex justify-center items-center overflow-hidden"
      >
        <Image
          src="/images/terzanidsBg.webp"
          alt=""
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(4,19,12,0.29)]" />
        <h3 className="relative z-10 text-white text-[38px] font-bold leading-[56px] tracking-[0.3em] text-center font-heading">
          {firstName ?? "ΣΤΑΥΡΟΣ"} <br /> {lastName ?? "ΤΕΡΖΑΝΙΔΗΣ"}
        </h3>
      </section>
    );
  }

  if (variant === "papatheodorou") {
    return (
      <section
        id="hero"
        className="relative w-full h-screen flex justify-center items-center overflow-hidden"
      >
        <Image
          src="/images/papatheodorouBg.webp"
          alt=""
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(4,19,12,0.29)]" />
        <h3 className="relative z-10 text-white text-[38px] font-bold leading-[56px] tracking-[0.3em] text-center font-heading">
          {firstName ?? "ΕΥΑΓΓΕΛΟΣ"} <br /> {lastName ?? "ΠΑΠΑΘΕΟΔΩΡΟΥ"}
        </h3>
      </section>
    );
  }

  if (variant === "default") {
    return (
      <section
        id="hero"
        className="relative w-full h-screen flex items-center overflow-hidden"
      >
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>
    );
  }

  // home variant
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center mb-[-200px] overflow-hidden"
    >
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        className="object-cover object-center lg:object-fixed"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto relative z-10">
        <Image
          src="/images/logoTrans.png"
          alt="Physiotherapon"
          width={400}
          height={300}
          className="block mx-auto max-h-[300px] w-auto"
          priority
        />
      </div>
    </section>
  );
}
