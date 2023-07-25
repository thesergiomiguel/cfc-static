import { EditorialPodcastPost } from "./EditorialPodcastPost";

const posts = [
  {
    content:
      "CURATING TOOLS WITH HESPERIA ILIADOU-SUPPIEJ: HISTORY AND CONTEMPORARY LANDSCAPES OF CURATING",
    timestamp: "July 4, 2023",
  },
  {
    content: "DISCUSSING DISABILITY ARTS WITH SEAN LEE",
    timestamp: "June 1, 2023",
  },
  {
    content:
      "CURATING TOOLS WITH SEAN LEE: WHY CURATORS SHOULD PRIORITISE ACCESSIBILITY",
    timestamp: "May 27, 2023",
  },
  {
    content:
      "CURATING TOOLS WITH JOE ROWLEY: HOW TO WRITE GOOD EXHIBITION TEXTS",
    timestamp: "May 20, 2023",
  },
];

export function Podcasts() {
  return (
    <section className="PageSection PodcastsSection">
      <header className="PageSection__header">
        <h2 className="PageSection__title">Podcasts</h2>
      </header>

      <main className="PageSection__content">
        {posts.map((post, i) => (
          <EditorialPodcastPost key={i} {...post} />
        ))}
      </main>

      <footer className="PageSection__footer">Load More ↓</footer>
    </section>
  );
}
