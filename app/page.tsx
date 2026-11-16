import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Variants } from "@/components/Variants";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";
import { Partnership } from "@/components/Partnership";
import { Closing } from "@/components/Closing";
import { MiniBar } from "@/components/MiniBar";
import { Motion } from "@/components/Motion";

export default function Home() {
  return (
    <>
      <MiniBar />
      <main id="top">
        <Hero />
        <Story />
        <Variants />
        <Steps />
        <Testimonials />
        <Partnership />
      </main>
      <Closing />
      <Motion />
    </>
  );
}
