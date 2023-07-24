import { ReactComponent as Close } from "img/icons/close.svg";
import "./NewsletterWidget.scss";

export function NewsletterWidget() {
  return (
    <div className="NewsletterBar" id="newsletter-widget">
      <header className="NewsletterBar__title">
        <h2>Newsletter</h2>
      </header>

      <main className="NewsletterBar__content">
        <input
          type="email"
          placeholder="Your email address"
          className="NewsletterBar__input"
        />
        <button className="Button Button--rounded">→</button>
      </main>

      <footer className="NewsletterBar__footer">
        <button className="Button" id="newsletter-bar-dismiss">
          <Close />
        </button>
      </footer>
    </div>
  );
}
