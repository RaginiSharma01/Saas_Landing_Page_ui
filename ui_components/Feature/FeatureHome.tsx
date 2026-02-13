import FeatureBanner from "./FeatureBanner";
import FeatureContent from "./FeatureContent";

export default function FeatureHome() {
  const features = ["Always-on", "Scalable", "Secure", "Intelligent"];

  return (
    <section className="w-full bg-black pt-16 flex flex-col items-center gap-10">
      
     
      <div className="flex gap-3 flex-wrap justify-center">
        {features.map((feature, index) => (
          <span
            key={index}
            className="
              flex items-center justify-center
              h-6 px-4
              text-sm text-white
              bg-feature-btn-bg
              border border-feature-btn-border
              rounded-full
            "
          >
            {feature}
          </span>
        ))}
      </div>

      
    <h1 className="text-white text-5xl font-semibold text-center">
  Meet Your Dream Team
</h1>

<h4 className="text-gray-400 text-lg text-center max-w-xl">
  Supercharge your cloud operations with our AI Specialists.
</h4>

      <FeatureBanner/>
      <FeatureContent/>
    </section>
    
  );
}
