type Props = {
  name: string;
  biography: string;
  thumbnail: string;
  location: string;
};

export function MembersPost(props: Props) {
  return (
    <article className="MembersPost">
      <div className="MembersPost__name">{props.name}</div>
      <div className="MembersPost__biography">{props.biography}</div>
      <div className="MembersPost__thumbnail">
        <img src={props.thumbnail} alt={props.name} />
      </div>
      <div className="MembersPost__location">{props.location}</div>

      <a href="/permalink-to-post">Permalink</a>
    </article>
  );
}
