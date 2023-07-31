import { blogPosts } from "../../mock-data/blog-posts";
import { BlogPost } from "../../components/BlogPost";

export function Blog() {
  return (
    <section className="PageSection">
      <header className="PageSection__header">
        <h2 className="PageSection__title">Blog</h2>
      </header>

      <main className="PageSection__content">
        {blogPosts.map((post, i) => (
          <BlogPost key={i} {...post} />
        ))}
      </main>

      <footer className="PageSection__footer">
        <button>Load More ↓</button>
      </footer>
    </section>
  );
}
