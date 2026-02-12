import Image from "next/image";
import { images } from "@/utils/index";

const HomeCTA = () => {
  return (
    <section className="w-full flex flex-col items-center gap-8">
      {/* Section title */}
      <h2 className="text-white text-xl font-semibold">
        Start with our templates
      </h2>

      {/* Cards */}
      <div className="flex gap-6">
        
        {/* Card 1 */}
        <div className="relative w-[320px] h-[90px] rounded-xl overflow-hidden">
          <Image
            src={images.home_CTA}
            alt="EC2 Usage Pattern Analysis"
            fill
            className="object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="relative w-[320px] h-[90px] rounded-xl overflow-hidden">
          <Image
            src={images.home_CTA2}
            alt="Reserved Instance Opportunities"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default HomeCTA;
