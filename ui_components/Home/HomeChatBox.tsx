import Image from "next/image";
import { images } from "@/utils/index";

export default function ChatInput() {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          flex items-center
          w-[608px] h-[120px]
          px-6
          rounded-[12px]

          bg-black/40
          border border-white/20
          backdrop-blur-md

          shadow-[0_0_30px_rgba(16,249,241,0.15)]
          transition
          focus-within:border-white/40
          focus-within:shadow-[0_0_40px_rgba(16,249,241,0.35)]
        "
      >
        {/* Input */}
        <input
          type="text"
          
          className="
            flex-1
            bg-transparent
            outline-none
            text-white
            placeholder-gray-400
            text-lg
          "
        />

        {/* Send button */}
        <button
          className="
            w-11 h-11
            flex items-center justify-center
            rounded-lg

            bg-gradient-to-r
            from-btn-bg
            via-btn-bg2
            to-btn-bg3

            shadow-[0_0_15px_rgba(16,249,241,0.5)]
            hover:opacity-90
            hover:scale-105
            active:scale-95
            transition
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
