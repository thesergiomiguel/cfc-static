import { ReactComponent as LogoFull } from "img/logos/logo-full.svg";
import { ReactComponent as LogoShell } from "img/logos/logo-shell.svg";
import "./Header.scss";

export function Header() {
  return (
    <header className="Header">
      <div className="Header__logo">
        <div className="Logo Logo--small">
          <a href="/" className="Logo__text">
            Call for Curators
          </a>
          <div
            id="logo-toggle"
            data-open-sidebar="main-nav-menu"
            className="Logo__shell"
          >
            <LogoShell />
          </div>
        </div>

        <a href="/" className="Logo Logo--large">
          <LogoFull />
        </a>
      </div>

      <nav className="Header__nav" id="main-nav-menu">
        <menu className="Nav">
          <li className="Nav__item">
            <a href="/announce-call">Announce Call</a>
          </li>
          <li className="Nav__item">
            <a href="/search-call">Search Call</a>
          </li>
          <li className="Nav__item">
            <a href="/community">Browse Community</a>
          </li>
          <li className="Nav__item Subnav" data-subnav-state="0">
            <div className="Subnav__title">Editorial</div>

            <nav className="Subnav__nav">
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/events">CfC Events</a>
              </li>
              <li>
                <a href="/podcasts">Podcasts</a>
              </li>
            </nav>
          </li>
          <li className="Nav__item Nav__item--purple">Login/Join</li>
        </menu>
      </nav>
    </header>
  );
}
