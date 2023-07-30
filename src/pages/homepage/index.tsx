import { Editorial } from "./Editorial";
import { FeaturedCalls } from "./FeaturedCalls";
import { Hero } from "./Hero";
import { Institutions } from "./Institutions";
import { Testimonials } from "./Testimonials";

export function Homepage() {
  return (
    <main className="Homepage">
      <Hero />
      <FeaturedCalls />
      <Editorial />
      <Testimonials />
      <Institutions />
    </main>
  );
}
