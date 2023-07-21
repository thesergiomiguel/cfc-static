import { SectionHeaderWithScroll } from "../../../components/SectionHeaderWithScroll";
import { BlogPost } from "./BlogPost";
import "./Editorial.scss";

// Mock data.
// 10 posts should be shown on the homepage.
const posts = [
  {
    title:
      "What makes a great curator of exhibitions? | Open Call Q&A with Nottingham Contemporary",
    thumbnail: "https://picsum.photos/200/300",
    author: "Nona Markarian",
    tags: ["#curator of exhibitions", "#q&a"],
  },
  {
    title:
      "The Guggenheim Museum Appoints Noam Segal as LG Electronics Associate Curator",
    thumbnail: "https://picsum.photos/400/300",
    author: "Nona Markarian",
    tags: ["#residency"],
  },
  {
    title: "What are the selection criteria for Onassis AiR 2023/24 programme?",
    thumbnail: "https://picsum.photos/182/600",
    author: "Nona Markarian",
    tags: ["#architecture", "#Appointed curator"],
  },
  {
    title:
      "Cukrarna Gallery in Ljubljana is pleased to announce the appointment of Erzen Shkololli as Curator-at-large",
    thumbnail: "https://picsum.photos/345/123",
    author: "Nona Markarian",
    tags: ["#Appointment"],
  },
  {
    title:
      "What is important when applying to La Nueva Fábrica’s 2023/24 Residency Open Call?",
    thumbnail: "https://picsum.photos/765/1000",
    author: "Maria Cynkier",
    tags: ["#callforcurators", "#Open Call"],
  },
  {
    title: "What’s important when curating a fashion biennale?",
    thumbnail: "https://picsum.photos/204/100",
    author: "Nona Markarian",
    tags: ["#q&a"],
  },
  {
    title:
      "Ceci Moss appointed as new Director and Chief Curator of the Mandeville Art Gallery",
    thumbnail: "https://picsum.photos/100/700",
    author: "Nona Markarian",
    tags: ["#q&a"],
  },
  {
    title: "Dr. Asma Naeem appointed as director at Baltimore Museum of Art",
    thumbnail: "https://picsum.photos/200/300",
    author: "Nona Markarian",
    tags: ["#research", "#cfc", "#baltimore"],
  },
  {
    title: "How to find the right curatorial residency for you",
    thumbnail: "https://picsum.photos/200/300",
    author: "Maria Cynkier",
    tags: ["#Guatemala", "#Museums"],
  },
  {
    title: "a-n Appoints new Board and Artists Council",
    thumbnail: "https://picsum.photos/200/300",
    author: "Nona Markarian",
    tags: ["#Whatever", "#Another One", "#Meh"],
  },
];

export function Editorial() {
  return (
    <section className="Editorial">
      <SectionHeaderWithScroll title="Editorial" targetId="#editorial-block" />

      <main className="Editorial__content">
        <div id="editorial-block" className="Editorial__window">
          {posts.map((post, i) => (
            <BlogPost key={i} {...post} />
          ))}
        </div>
      </main>

      <footer className="SectionFooter">
        <a href="/blog">
          <h2>All Editorials →</h2>
        </a>
      </footer>
    </section>
  );
}
