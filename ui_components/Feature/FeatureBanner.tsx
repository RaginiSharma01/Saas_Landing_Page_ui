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
    <section className="w-full bg-black py-12 flex justify-center">
      <div className="flex gap-6 flex-wrap justify-center">
        {team.map((member, index) => (
          <div
            key={index}
            className="
              relative
              w-[180px]
              h-[220px]
              rounded-xl
              overflow-hidden
              bg-neutral-900
              hover:scale-105
              transition
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
    </section>
  );
}
