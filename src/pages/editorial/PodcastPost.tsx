type Props = {
  timestamp: string;
  content: string;
};

export function PodcastPost(props: Props) {
  return (
    <article className="PodcastPost">
      <aside className="PodcastPost__aside">
        <a href="/link-to-podcast" className="PodcastPost__play">
          Play
        </a>
      </aside>

      <main className="PodcastPost__wrapper">
        <div className="PodcastPost__content">{props.content}</div>
        <time className="PodcastPost__timestamp">{props.timestamp}</time>
      </main>
    </article>
  );
}
