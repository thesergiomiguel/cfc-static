import { Editorial } from "./Editorial";
import { FeaturedCalls } from "./FeaturedCalls";
import { Hero } from "./Hero";
import { Testimonials } from "./Testimonials";

export function Homepage() {
  return (
    <main>
      <Hero />
      <FeaturedCalls />
      <Editorial />
      <Testimonials />
    </main>
  );
}
