import { SectionHeaderWithScroll } from "../../../components/SectionHeaderWithScroll";
import { TestimonialPost } from "./TestimonialPost";
import "./Testimonials.scss";

const posts = [
  {
    title: "Alessia Locatelli",
    content:
      "I am enrolled in Call For Curators newsletter and I always read with interest the international positions that they report.\nI believe they make a quality pre-selection to the Calls and they give an important contribution to the creation of new Art Professionals with an international layout ​​and also able to create “network” in this global world.",
  },
  {
    title: "Claudio Cravero",
    content:
      "I am a constant reader and user of Call for curators. I mainly consult it re job offers and very rarely to look for curator-in-residence opportunities. The structure of the website, both on laptop and via mobile phone, is pretty much user-friendly and easy to get access to main content. I do enjoy the look of the website; it is clean, precise and not over distracting with popping-up windows and so forth. it’s tidy, and this is priceless…",
  },
  {
    title: "Valentina Casacchia",
    content:
      "What I like the most is that I am constantly updated to new positions and that gives me an overview of what’s going on in a very short time",
  },
];

export function Testimonials() {
  return (
    <section className="Testimonials">
      <SectionHeaderWithScroll
        title="Testimonials"
        targetId="#testimony-block"
        distance="block"
      />

      <main className="Testimonials__content">
        <div id="testimony-block" className="Testimonials__window">
          {posts.map((post, i) => (
            <TestimonialPost key={i} {...post} />
          ))}
        </div>
      </main>
    </section>
  );
}
