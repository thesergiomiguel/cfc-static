import { podcastPosts } from "../../mock-data/podcast-posts";
import { PodcastPost } from "./PodcastPost";

export function Podcasts() {
  return (
    <section className="PageSection PodcastsSection">
      <header className="PageSection__header">
        <h2 className="PageSection__title">Podcasts</h2>
      </header>

      <main className="PageSection__content">
        {podcastPosts.map((post, i) => (
          <PodcastPost key={i} {...post} />
        ))}
      </main>

      <footer className="PageSection__footer">
        <button>Load More ↓</button>
      </footer>
    </section>
  );
}
