import Image from "next/image";
import { images } from "@/utils/index";

export default function ChatInput() {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          flex items-center
          w-full
          max-w-md
          md:max-w-2xl   /* desktop same as before */
          lg:max-w-3xl
          h-14 md:h-16 lg:h-20
          px-4 md:px-6
          rounded-xl
          bg-black/40
          border border-white/20
          backdrop-blur-md
        "
      >
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm md:text-lg"
        />

        <button
          className="
            w-9 h-9
            md:w-11 md:h-11
            lg:w-14 lg:h-14
            flex items-center justify-center
            rounded-lg
            bg-linear-to-r
            from-btn-bg
            via-btn-bg2
            to-btn-bg3
          "
        >
          <Image
            src={images.send_icon}
            alt="Send"
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
  );
}

