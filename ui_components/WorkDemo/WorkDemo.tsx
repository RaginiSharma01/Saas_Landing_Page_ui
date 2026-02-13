import Image from "next/image";
import { images } from "@/utils/index";
import WorkDemoFooter from "./WorkDemoFooter";

export default function WorkDemo() {
  return (
    
    <div className="bg-black text-white">
<div className="text-white justify-center text-center text-3xl font-semibold ">
    <h1>How CloudThinker Works</h1>
</div>
     
      <section className="relative py-10 overflow-hidden">
        
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #18270B 0%, rgba(5, 7, 4, 0.7) 50%, #000000 100%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Cloud Operations
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Ask Alex anything - whether it is cost-related,
              security-focused, or technical issues. They all
              understand natural language and complex questions.
            </p>
          </div>

         
          <div className="flex justify-center">
            <Image
              src={images.demo_image}
              alt="Cloud operations"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #18270B 0%, rgba(5, 7, 4, 0.7) 50%, #000000 100%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
         
          <div className="flex justify-center md:order-1">
            <Image
              src={images.demo_image2}
              alt="Insights"
              className="rounded-xl shadow-lg"
            />
          </div>

         
          <div className="md:order-2">
            <h2 className="text-3xl font-semibold mb-4">
              Get Actionable Insights
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Alex works with the rest of the team and responds in
              seconds with tailored guidance, diagnostics, and next
              steps—all based on your live cloud environment.
            </p>
          </div>
        </div>
      </section>

     
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #18270B 0%, rgba(5, 7, 4, 0.7) 50%, #000000 100%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
         
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Monitor in Real Time
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing how IT teams manage and resolve
              critical issues. Our AI team brings incident response
              workflows directly into the familiar Slack
              environment.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src={images.demo_image3}
              alt="Real time monitoring"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <WorkDemoFooter/>
    </div>
  );
}
