import { ReactComponent as RightArrow } from "img/icons/right.svg";
import { ReactComponent as LeftArrow } from "img/icons/left.svg";

type Props = {
  title: string;
  distance?: number | "block";
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
        <button data-left>
          <LeftArrow />
        </button>
        <button data-right>
          <RightArrow />
        </button>
      </div>
    </header>
  );
}
