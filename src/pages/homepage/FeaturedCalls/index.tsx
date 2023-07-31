import { SectionHeaderWithScroll } from "../../../components/SectionHeaderWithScroll";
import { calls } from "../../../mock-data/calls";
import { Call } from "./Call";
import "./FeaturedCalls.scss";

export function FeaturedCalls() {
  return (
    <section className="Featured">
      <SectionHeaderWithScroll
        title="Featured opportunities"
        targetId="#featured-block"
      />

      <main className="Featured__content">
        <div id="featured-block" className="Featured__window">
          {calls.map((post, i) => (
            <Call key={i} {...post} />
          ))}
        </div>
      </main>

      <footer className="SectionFooter">
        <h2>
          <a href="/call">More opportunities →</a>
        </h2>
      </footer>
    </section>
  );
}
