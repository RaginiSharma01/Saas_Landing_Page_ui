import Image from "next/image";
import { images } from "@/utils/index";
import HomeBanner from "./HomeBanner";
import ChatInput from "./HomeChatBox";
import HomeCTA from "./HomeCTA";

export default function Home() {
  return (
    <main className="bg-black min-h-screen px-20 py-2">
      
      {/* Hero section */}
      <section className="relative w-full h-[720px] overflow-hidden rounded-xl">
        <Image
          src={images.home_bg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Centered content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-10 px-6">
          <HomeBanner />
          <ChatInput />
          <HomeCTA />
        </div>
      </section>

      {/* Rest of page */}
      <section className="h-[800px] bg-black" />
    </main>
  );
}
