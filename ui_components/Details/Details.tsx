import Image from "next/image";
import { images } from "@/utils/index";

export default function Details() {
  const features = [
    {
      icon: images.i_icon,
      title: "Save Time & Resources",
      desc: "Automate up to 70% of routine operational tasks.",
    },
    {
      icon: images.i2_icon,
      title: "Optimize Cloud Bill",
      desc: "Get proactive recommendations to eliminate waste.",
    },
    {
      icon: images.i3_icon,
      title: "Security & Reliability",
      desc: "Stay ahead of compliance issues and operational risks.",
    },
    {
      icon: images.i4_icon,
      title: "Always-on Support",
      desc: "Your AI team works 24/7 to handle queries and take actions.",
    },
  ];

  const blogs = [
    {
      image: images.bg_card,
    },
    {
      image: images.bg2_card,
    },
    {
      image: images.bg3_card,
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        
        <h2 className="text-center text-3xl font-semibold mb-12">
          Why Choose CloudThinker?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-800 bg-[#0b0f0a] p-6 text-center hover:border-green-500 transition"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-semibold">
              Trending Blogs
            </h3>
            <p className="text-gray-400 text-sm">
              Latest news, technologies, applications and use cases from our team.
            </p>
          </div>

          <button className="flex text-black px-4 py-2 rounded-full text-sm font-medium transition hover:opacity-90"
                style={{background:"linear-gradient(263deg, #10F9F1 0.3%, #2CC0F2 50.15%, #54F3A6 100%)",}}>
                View all 
            </button>

            </div>

       
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-gray-800 bg-[#0b0f0a] hover:transition"
            >
              <Image
                src={blog.image}
                alt={"blog page"}
                className="w-full object-cover"
              />

              <div>
            
              </div>
            </div>
          ))}
        </div>

       
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Ready to run a leaner, smarter cloud operation?
          </h3>
          <p className="text-gray-400 mb-6">
            Let our AI team handle the heavy lifting so your team can focus on innovation.
          </p>

          <div className="flex justify-center gap-4">
            <button className="text-black px-6 py-2 rounded-full font-medium transition hover:opacity-90"style={{background:"linear-gradient(263deg, #10F9F1 0.3%, #2CC0F2 50.15%, #54F3A6 100%)",
}}
>
  Book a demo
</button>

            <button className="border border-gray-600 px-6 py-2 rounded-full hover:border-white transition">
              Try for free
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
