import { Blog } from "./Blog";
import "./Editorial.scss";
import { Events } from "./Events";
import { Podcasts } from "./Podcasts";

export function Editorial() {
  return (
    <main className="Editorial">
      <Blog />
      <Events />
      <Podcasts />
    </main>
  );
}
