import { Editorial } from "./Editorial";
import { FeaturedCalls } from "./FeaturedCalls";
import { Hero } from "./Hero";

export function Homepage() {
  return (
    <main>
      <Hero />
      <FeaturedCalls />
      <Editorial />
    </main>
  );
}
