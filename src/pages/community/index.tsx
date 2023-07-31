import "./Community.scss";
import { Events } from "../editorial/Events";
import { Members } from "./Members";

export function Community() {
  return (
    <main className="CommunityPage">
      <Members />
      <Events />
    </main>
  );
}
