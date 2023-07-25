import { ReactComponent as Play } from "img/icons/play-arrow.svg";
import "./EditorialPodcastPost.scss";

type Props = {
  timestamp: string;
  content: string;
};

export function EditorialPodcastPost(props: Props) {
  return (
    <article className="PodcastPost">
      <aside className="PodcastPost__aside">
        <a href="/link-to-podcast" className="PodcastPost__play">
          <Play />
        </a>
      </aside>

      <main className="PodcastPost__wrapper">
        <div className="PodcastPost__content">{props.content}</div>
        <time className="PodcastPost__timestamp">{props.timestamp}</time>
      </main>
    </article>
  );
}
