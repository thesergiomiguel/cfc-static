import { SectionHeaderWithScroll } from "../../../components/SectionHeaderWithScroll";
import { Call } from "./Call";
import "./FeaturedCalls.scss";

// Mock data.
// 10 posts should be shown on the homepage.
const posts = [
  {
    title: "Rupert residency programme 2024",
    location: "Vilnius, Lithuania",
    thumbnail: "https://picsum.photos/1520/652",
    callType: "Residency",
    deadline: "6 hours left",
  },
  {
    title: "Curator at Le Bicolore",
    location: "Paris, France",
    thumbnail: "https://picsum.photos/937/442",
    callType: "Job",
    deadline: "31 days left",
  },
  {
    title: "Recruiting a new director for FVU",
    location: "London, UK",
    thumbnail: "https://picsum.photos/737/442",
    callType: "Education",
    deadline: "Deadline ended",
  },
  {
    title: "Rupert residency programme 2024",
    location: "Vilnius, Lithuania",
    thumbnail: "https://picsum.photos/1437/842",
    callType: "Residency",
    deadline: "No deadline",
  },
  {
    title:
      "The Ninth Edition of the International Awards for Art Criticism (IAAC 9) is open for submissions",
    location: "Worldwide",
    thumbnail: "https://picsum.photos/437/242",
    callType: "Awards",
    deadline: "60 days 6 hours left",
  },
  {
    title: "Curatorial Assistant-Dia Art Foundation",
    location: "New York, USA",
    thumbnail: "https://picsum.photos/437/272",
    callType: "Jobs, Curator",
    deadline: "No deadline",
  },
  {
    title: "Augusta Savage Curator of African American Art",
    location: "Washington, USA",
    thumbnail: "https://picsum.photos/837/542",
    callType: "Jobs",
    deadline: "10 days left",
  },
  {
    title: "Exhibitions Designer at the Hood Museum of Art",
    location: "Hanover, Germany",
    thumbnail: "https://picsum.photos/937/542",
    callType: "Residency",
    deadline: "Deadline ended",
  },
  {
    title: "EAST CALL CURATORIAL RESIDENCY",
    location: "Worldwide",
    thumbnail: "https://picsum.photos/837/342",
    callType: "Education",
    deadline: "23 days left",
  },
  {
    title: "Curator in Residence at Bemis Center",
    location: "Madrid, Spain",
    thumbnail: "https://picsum.photos/800/600",
    callType: "Jobs",
    deadline: "No deadline",
  },
];

export function FeaturedCalls() {
  return (
    <section className="Featured">
      <SectionHeaderWithScroll
        title="Featured opportunities"
        targetId="#featured-block"
      />

      <main className="Featured__content">
        <div id="featured-block" className="Featured__window">
          {posts.map((post, i) => (
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
