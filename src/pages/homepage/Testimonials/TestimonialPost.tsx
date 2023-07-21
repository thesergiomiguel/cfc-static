type Props = {
  title: string;
  content: string;
};

export function TestimonialPost(props: Props) {
  return (
    <article className="TestimonialPost">
      <div className="TestimonialPost__content">
        {props.content}

        <article className="TestimonialPost__author">{props.title}</article>
      </div>
    </article>
  );
}
