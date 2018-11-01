import React, { PureComponent } from "react";

import Header from "../header";

import img from "../../../../../assets/images/header.jpg";

class HomeHeader extends PureComponent {
  render() {
    const content = (
      <div>
        <h1>Tout savoir sur l'ascenseur en copropriété</h1>

        <p>
          Des informations et conseils pour mieux comprendre les enjeux de
          l'ascenseur en copropriété
        </p>
        <a href="#about" className="btn btn-primary btn-xl page-scroll">
          En savoir plus
        </a>
      </div>
    );
    return <Header img={img} content={content} />;
  }
}

export default HomeHeader;
