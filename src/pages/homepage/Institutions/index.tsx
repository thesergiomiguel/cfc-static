import apexart from "../../../assets/images/institutions/apexart.png";
import harvard from "../../../assets/images/institutions/harvard.png";
import node from "../../../assets/images/institutions/node.png";
import tate from "../../../assets/images/institutions/tate.png";
import barbican from "../../../assets/images/institutions/barbican.png";
import CCOA from "../../../assets/images/institutions/CCOA.png";
import hammer from "../../../assets/images/institutions/hammer.png";
import "./Institutions.scss";

export function Institutions() {
  return (
    <section className="Institutions">
      <header className="SectionHeader">
        <h1 className="SectionHeader__heading">Institutions we help</h1>
      </header>

      <main className="Institutions__content">
        <div className="Institutions__container">
          <img src={apexart} alt="apexart" />
          <img src={harvard} alt="Harvard" />
          <img src={node} alt="NODE" />
          <img src={tate} alt="Tate" />
          <img src={barbican} alt="Barbican" />
          <img src={CCOA} alt="CCOA" />
          <img src={hammer} alt="Hammer" />
        </div>
      </main>
    </section>
  );
}
