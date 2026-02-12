import Image from "next/image";
import Marquee from "react-fast-marquee";
import { images } from "@/utils/index";

export default function ScrollIcon() {
  const logos = [
    images.ScrollLogo1,
    images.ScrollLogo2,
    images.ScrollLogo3,
    images.ScrollLogo4,
  ];

  return (
    <section className="w-full py-16 bg-black text-center">
      <h2 className="text-white text-xl font-semibold mb-10">
        Trusted by engineers at
      </h2>

      <Marquee
        speed={50}
        pauseOnHover={true}
        gradient={true}
        autoFill={true}
        gradientColor="black"
        className="bg-black"
      >
        <div className="flex gap-20 px-10">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Company logo"
              height={40}
              className="opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
}
