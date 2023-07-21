// TODO:
// - deadline ended color
// - no thumbnail / restricted access thumbnail

type Props = {
  title: string;
  location: string;
  callType: string;
  deadline: string;

  // A post may not have a thumbnail, or the thumbnail may be
  // restricted to an unauthorized user.
  thumbnail?: string;
};

export function Call(props: Props) {
  return (
    <article className="Call">
      <a href="/permalink-to-post">
        <header className="Call__header">
          <div className="Call__title">{props.title}</div>

          <div className="Call__location">{props.location}</div>
        </header>

        <main className="Call__thumbnail">
          {props.thumbnail && <img src={props.thumbnail} />}
        </main>

        <footer className="Call__footer">
          <div className="Call__type">{props.callType}</div>

          <div className="Call__timestamp">{props.deadline}</div>
        </footer>
      </a>
    </article>
  );
}
