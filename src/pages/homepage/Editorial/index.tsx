import { BlogPost } from "../../../components/BlogPost";
import { SectionHeaderWithScroll } from "../../../components/SectionHeaderWithScroll";
import { blogPosts } from "../../../mock-data/blog-posts";
// import { BlogPost } from "../../components/BlogPost";
import "./Editorial.scss";

export function Editorial() {
  return (
    <section className="Editorial">
      <SectionHeaderWithScroll title="Editorial" targetId="#editorial-block" />

      <main className="Editorial__content">
        <div id="editorial-block" className="Editorial__window">
          {blogPosts.map((post, i) => (
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
