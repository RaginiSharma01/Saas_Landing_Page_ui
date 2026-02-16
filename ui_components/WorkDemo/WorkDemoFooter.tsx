import Image from "next/image";
import { images } from "@/utils/index";

export default function WorkDemoFooter() {
  const cards = [
    {
      icon: images.demo_icon,
      title: "AI Assistant",
      desc: "Always on. Always up-to-date. Always ready to help.",
    },
    {
      icon: images.demo_icon2,
      title: "Cloud FinOps",
      desc: "Track, optimize and forecast cloud spending.",
    },
    {
      icon: images.demo_icon3,
      title: "Security & Compliance",
      desc: "Identify misconfigurations and fix them before problems.",
    },
    {
      icon: images.demo_icon4,
      title: "Task Automation",
      desc: "Automate repetitive tasks to save time and reduce error.",
    },
  ];

  return (
    

<section className="bg-black text-white py-18 ">
  {/* Header */}
  <div className="text-center max-w-2xl mx-auto mb-12 p-2">
    <h2 className="text-3xl font-semibold mb-3">
      Built for Modern Cloud Teams
    </h2>
    <p className="text-gray-400">
      Trusted by forward-thinking engineering and operations teams
      to simplify cloud management, improve agility, and drive ROI.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
    {cards.map((card, index) => (
      <div
        key={index}
        className="relative rounded-xl border border-gray-800 bg-linear-to-b from-[#0b0f0a] to-black p-6 text-center hover:border-gray-800 transition"
      >
        <div className="flex justify-center mb-4">
          <Image src={card.icon} alt={card.title} width={40} height={40} />
        </div>

        <h3 className="text-lg font-semibold mb-2">
          {card.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {card.desc}
        </p>
      </div>
    ))}
  </div>

  {/* Divider (outside grid) */}
  <div className="flex justify-center mt-16">
    <Image
      src={images.divider}
      alt="Divider line"
      className="w-[80%] max-w-4xl"
    />
  </div>
</section>

);
}
