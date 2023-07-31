import { EventsPost } from "../../components/EventsPost";
import { events } from "../../mock-data/events";

export function Events() {
  return (
    <section className="PageSection Events">
      <header className="PageSection__header">
        <h2 className="PageSection__title">Events</h2>
      </header>

      <main className="PageSection__content">
        {events.map((event, i) => (
          <EventsPost key={i} {...event} />
        ))}
      </main>

      <footer className="PageSection__footer">
        <button>Load More ↓</button>
      </footer>
    </section>
  );
}
