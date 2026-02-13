import Image from "next/image";
import { images } from "@/utils/index";

export default function Footer() {
  return (
    <footer
      className="text-white px-6 py-12"
      style={{
        background:
          "radial-gradient(80% 80% at 20% 50%, #0f3d2e 0%, #05140f 60%, #020403 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Left section */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={images.Footer_icon}
              alt="CloudThinker logo"
              width={200}
              height={40}
            />
          </div>

          <p className="text-gray-400 max-w-md mb-6">
            Advanced AI Agents for Cloud Productivity, Operation and
            Optimization.
          </p>

          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <Image
              src={images.Map_icon}
              alt="Location"
              width={18}
              height={18}
            />
            <span>Thu Duc City, Ho Chi Minh City, Vietnam</span>
          </div>

          <p className="text-gray-500 text-sm">
            Copyright © 2025 Builder Studio
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Documents</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Follow + Legal */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">LinkedIn</li>
              <li className="hover:text-white cursor-pointer">Discord</li>
              <li className="hover:text-white cursor-pointer">Facebook</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
