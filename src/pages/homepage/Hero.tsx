import "./Homepage.scss";

export function Hero() {
  return (
    <section className="Hero">
      <header className="Hero__header">
        <h1>Discover art opportunities worldwide.</h1>
      </header>

      <main className="Hero__main">
        <aside className="Hero__animation">
          <div className="Hero__animation__window">
            <p className="Hero__animation-item">
              Find curatorial residencies,
              <br />
              grants, jobs and more.
            </p>
            <p className="Hero__animation-item">
              Share exciting calls and
              <br />
              engage a wide audience.
            </p>
          </div>
        </aside>

        <div className="Hero__getstarted">
          <a href="/" className="Button Button--l">
            Get Started
          </a>
        </div>

        <aside className="Hero__details">
          30-day free trial
          <br />
          €2.95/month
        </aside>
      </main>
    </section>
  );
}
