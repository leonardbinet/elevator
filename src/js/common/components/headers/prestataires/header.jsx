import React, { PureComponent } from 'react';

import Header from '../header';

import img from '../../../../../assets/images/header_prestataire.jpg';

class PrestatairesHeader extends PureComponent {
  render() {
    const content = (
      <div>
        <h1>TROUVEZ UN PRESTATAIRE</h1>
        <br />
        <p>
          Des informations et conseils pour mieux comprendre les enjeux de l'ascenseur en copropriété
        </p>
      </div>
    );
    return <Header img={img} content={content} />;
  }
}

export default PrestatairesHeader;
