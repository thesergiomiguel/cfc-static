type Props = {
  title: string;
  distance?: number;
  targetId: string;
};

export function SectionHeaderWithScroll(props: Props) {
  return (
    <header className="SectionHeader">
      <h1 className="SectionHeader__heading">{props.title}</h1>

      <div
        className="SectionHeader__carousel"
        data-carousel
        data-distance={props.distance ?? 1000}
        data-target={props.targetId}
      >
        <button data-left>←</button>
        <button data-right>→</button>
      </div>
    </header>
  );
}
