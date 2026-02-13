import Image from "next/image";
import Link from "next/link";
import { images } from "@/utils/index";

export default function Header() {
  return (
    <header className="w-full bg-black border-b border-gray-800 fixed z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={images.icon}
            alt="CloudThinker Logo"
            width={200}
            height={40}
            priority
          />
         
        </div>

       
        <nav className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <Link href="#" className="hover:text-white">Pricing</Link>
          <Link href="#" className="hover:text-white">Documents</Link>
          <Link href="#" className="hover:text-white">Blog</Link>
          <Link href="#" className="hover:text-white">Contact Us</Link>
          <Link href="#" className="hover:text-white">Services</Link>
        </nav>

      
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="
              w-20 h-9
              flex items-center justify-center
              rounded-xl
              text-white text-sm font-medium
              hover:opacity-90
              transition
            "
          >
            Log in
          </Link>

        
          <Link
            href="#"
             className="
              w-20 h-9
              flex items-center justify-center
              rounded-xl
              text-black text-sm font-medium
              bg-[linear-gradient(263deg,#10F9F1_0.3%,#2CC0F2_50.15%,#54F3A6_100%)]
              hover:opacity-90
              transition
            "
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}