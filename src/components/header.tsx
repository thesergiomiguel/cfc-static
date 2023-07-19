import { Link } from "react-router-dom";
import { ReactComponent as LogoFull } from "img/logos/logo-full.svg";
import { ReactComponent as LogoShell } from "img/logos/logo-shell.svg";
import "./Header.scss";
import { useEffect } from "react";
import { setupSubnavs } from "../dom-scripts/subnavs";

export function Header() {
  useEffect(() => {
    setupSubnavs();
    // TODO:
    // setupShellToggle()
  }, []);

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
            <Link to="/announce-call">Announce Call</Link>
          </li>
          <li className="Nav__item">
            <Link to="/search-call">Search Call</Link>
          </li>
          <li className="Nav__item">
            <Link to="/community">Browse Community</Link>
          </li>
          <li className="Nav__item Subnav" data-subnav-state="0">
            <div className="Subnav__title">Editorial</div>

            <nav className="Subnav__nav">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/events">CfC Events</Link>
              </li>
              <li>
                <Link to="/podcasts">Podcasts</Link>
              </li>
            </nav>
          </li>
          <li className="Nav__item Nav__item--purple">Login/Join</li>
        </menu>
      </nav>
    </header>
  );
}
