import Image from "next/image";
import { images } from "@/utils/index";

const HomeCTA = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 md:gap-8">
      <h2 className="text-white text-lg md:text-xl font-semibold">
        Start with our templates
      </h2>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-3xl">
        
        {/* Card 1 */}
        <div className="relative w-full sm:w-1/2 h-24 md:h-28 rounded-xl overflow-hidden">
          <Image
            src={images.home_CTA}
            alt="EC2 Usage Pattern Analysis"
            fill
            className="object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="relative w-full sm:w-1/2 h-24 md:h-28 rounded-xl overflow-hidden">
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
