import CTASection from "@/components/common/sections/cta-section";
import FeatureSection from "@/components/common/sections/feature-section";
import PopularSection from "@/components/common/sections/popular-lessons";
import TesttimonialSection from "@/components/common/sections/testtimonial-section";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";


export default function HomePage() {
  return (
    <main className="px-5 md:px-20 xl:px-40">
      <section className="hero-section min-h-[70vh] space-y-8 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 py-12 md:py-30">
        <div className="flex-4 space-y-6">
          <Tag variant="yellow" label="NEW: AI CONVERSATION PARTNER" className="font-medium" iconTag={<BsFillLightningChargeFill/>} />   
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">Master English with{" "}<strong className="text-[#0edbca] block mt-2">Developers</strong></h2>
          <p className="text-[#14cabb] font-medium text-lg md:text-xl leading-relaxed max-w-xl">Improve your English through real-world programming scenarios, technical conversations, and coding challenges.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="text-base">Start Learning Today</Button>
            <Button variant="outline" className="text-base">View Lessons</Button>
          </div>
        </div>

        <div className="flex-6 relative w-full aspect-square md:aspect-auto md:h-[500px]">
          <Image src="/images/image-hero-section.avif" fill alt="Hero Section" className="object-cover rounded-2xl shadow-2xl" priority/>
        </div>
      </section>

      <FeatureSection/>

      <PopularSection/>

      <TesttimonialSection/>

      <CTASection/>
    </main>
  )
}