import About from "@/components/about";
import Hero from "@/components/hero";
import Plans from "@/components/plans";
import Trainers from "@/components/trainers";
import Services from "@/components/ui/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Plans />
      <Trainers />
      <About />
    </div>
  )
}
