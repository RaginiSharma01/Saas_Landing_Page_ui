import Image from "next/image";
import { images } from "@/utils/index";
import Link from "next/link";

export default function FeatureContent() {
  return (
    <div className="relative bg-black text-center pt-20 overflow-hidden">
      <h1 className="text-4xl font-semibold mb-4 text-white">
        Enterprise Security
      </h1>

      <p className="max-w-2xl mx-auto text-gray-400 mb-10">
        Our team delivers cutting-edge cloud solutions backed by
        Langfuse&apos;s industry-leading enterprise security, ensuring your
        data is protected with state-of-the-art encryption, monitoring, and
        compliance tools.
      </p>
 <div className="flex justify-center gap-8 mb-8">
    <Link href="#" className=" text-white hover:underline gap-1">
        security
      </Link>
      <Link href="#" className="text-white hover:underline">
        Enterprise FAQ
      </Link>
 </div>
      {/* Logos */}
      <div className="flex justify-center items-center gap-10 mb-6">
        <Image src={images.ISO} alt="ISO 27001" width={70} height={70} />
        <Image src={images.Aicpa} alt="SOC 2" width={70} height={70} />
        <Image src={images.Gdpr} alt="GDPR" width={70} height={70} />
        <Image src={images.Hipaa} alt="HIPAA" width={70} height={70} />
      </div>

     <div>
        <Image src={images.divider} alt="Divider line" className="p-8"/>
     </div>

    </div>
  );
}
