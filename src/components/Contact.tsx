import "./Contact.scss";

export function ContactSidebar() {
  return (
    <article className="Contact" id="contact-sidebar">
      <header className="Contact__heading">
        <h1>Contact</h1>
      </header>

      <main className="Contact__content">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea></textarea>

          <input type="submit" value="Send" />
        </form>
      </main>
    </article>
  );
}
