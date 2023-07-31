type Props = {
  content: string;
  thumbnail: string;
  timestamp: string;
};

export function EventsPost(props: Props) {
  return (
    <article className="EventsPost">
      <div className="EventsPost__content">{props.content}</div>
      <div className="EventsPost__thumbnail">{props.thumbnail}</div>
      <div className="EventsPost__timestamp">{props.timestamp}</div>

      <a href="/permalink-to-post">Permalink</a>
    </article>
  );
}
