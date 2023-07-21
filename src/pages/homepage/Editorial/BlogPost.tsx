type Props = {
  title: string;
  thumbnail: string;
  author: string;
  tags: string[];
};

export function BlogPost(props: Props) {
  return (
    <article className="BlogPost">
      <a href="/post-permalink">
        <div
          className="BlogPost__title"
          style={
            {
              "--post-img-src": `url(${props.thumbnail})`,
            } as React.CSSProperties
          }
        >
          {props.title}
        </div>
      </a>

      <div className="BlogPost__author">
        {props.author}

        <span className="BlogPost__tags">
          {props.tags.map((tag, i) => (
            <a key={i} href="/link-to-tag">
              {tag}
            </a>
          ))}
        </span>
      </div>
    </article>
  );
}
