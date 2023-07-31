import { SectionHeaderWithScroll } from "../../../components/SectionHeaderWithScroll";
import { testimonials } from "../../../mock-data/testimonial-posts";
import { TestimonialPost } from "./TestimonialPost";
import "./Testimonials.scss";

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
          {testimonials.map((post, i) => (
            <TestimonialPost key={i} {...post} />
          ))}
        </div>
      </main>
    </section>
  );
}
