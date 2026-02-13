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
    <div className="w-full flex justify-center mt-6">
      <div className="max-w-6xl w-full flex justify-center gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="
              relative
              w-[210px]
              h-[250px]
              rounded-3xl
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
