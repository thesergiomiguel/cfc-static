import { MembersPost } from "./MembersPost";
import { members } from "../../mock-data/members";

export function Members() {
  return (
    <section className="PageSection Members">
      <header className="PageSection__header">
        <h1>Find talent</h1>

        <div className="Members__filter">
          <form>
            <input type="text" placeholder="Filter by keyword or location" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </header>

      <main className="PageSection__content Members__content">
        {members.map((member, i) => (
          <MembersPost key={i} {...member} />
        ))}
      </main>

      <footer className="PageSection__footer">
        <button>LOAD MORE</button>
      </footer>
    </section>
  );
}
