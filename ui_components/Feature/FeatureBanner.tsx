import Image from "next/image";
import { images } from "@/utils/index";

export default function FeatureBanner() {
  const team = [
    images.Alex,
    images.Kai,
    images.Anna,
    images.Oliver,
    images.Tony,
  ];

  return (
    <div className="w-full flex justify-center mt-6 px-4">
      <div
        className="
          max-w-6xl
          w-full
          flex
          flex-wrap
          justify-center
          gap-4
          md:gap-8
          lg:gap-10
        "
      >
        {team.map((member, index) => (
          <div
            key={index}
            className="
              relative
              w-28 h-36        /* mobile */
              sm:w-36 sm:h-48  /* small tablets */
              md:w-44 md:h-56  /* tablets */
              lg:w-52 lg:h-64  /* desktop */
              rounded-2xl md:rounded-3xl
              overflow-hidden
              transition
              duration-300
              hover:-translate-y-2
              hover:scale-105
            "
          >
            <Image
              src={member}
              alt="Team member"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
