import "./Footer.scss";

export function Footer() {
  return (
    <footer className="Footer">
      <section className="Newsletter">
        <article className="Newsletter__wrapper">
          <header className="Newsletter__header">Newsletter</header>

          <main className="Newsletter__input">
            <input type="email" placeholder="Your email address" />
          </main>

          <footer className="Newsletter__footer">
            <button>→</button>
          </footer>
        </article>
      </section>

      <section className="Footer__navs">
        <nav className="Footer__navs--sitemap">
          <ul>
            <li>
              <article className="Footer__copyright">&copy; 2023</article>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/legal">Copyright & legal notices</a>
            </li>
            <li>
              <a href="/cookies">Cookies policy</a>
            </li>
          </ul>
        </nav>

        <nav className="Footer__navs--social">
          <ul>
            <li>
              <a href="https://www.facebook.com/callforcurators/">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com/call_for_curators">Instagram</a>
            </li>
            <li>
              <a href="">TikTok</a>
            </li>
            <li>
              <a href="http://twitter.com/CallforCurators">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/call-for-curators/">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
