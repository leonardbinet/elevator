import React, { PureComponent } from "react";

import Header from "../header";

import img from "../../../../../assets/images/header_article.jpg";

class ArticlesHeader extends PureComponent {
  render() {
    const content = (
      <div>
        <h1>Les dossiers thématiques</h1>
        <br />
        <p>
          Des informations et conseils pour mieux comprendre les enjeux de
          l'ascenseur en copropriété
        </p>
      </div>
    );
    return <Header img={img} content={content} />;
  }
}

export default ArticlesHeader;
