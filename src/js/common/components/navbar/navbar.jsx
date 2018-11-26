import React, { PureComponent } from 'react';

import './navbar.css';

class NavBar extends PureComponent {
  renderNavHeader() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed">
          <span className="sr-only">Toggle navigation</span>
          <i className="fa fa-bars" />
        </button>
        <a className="navbar-brand page-scroll" href="/#/">Ascenseur en copropriété</a>
      </div>
    );
  }

  renderItem(classes, url, text) {
    return (
      <li>
        <a className={classes} href={url}>
          {text}
        </a>
      </li>
    );
  }

  renderNavBody() {
    return (
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          {this.renderItem('page-scroll', '/#/articles', 'Dossiers thématiques')}
          {this.renderItem('page-scroll', '/#/questions', 'Posez vos questions')}
          {this.renderItem('page-scroll', '/#/prestataires', 'Trouvez un prestataire')}
          {this.renderItem('page-scroll', '/#/news', 'Actualité')}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top affix-top" id="mainNav">
        <div className="container-fluid">
          {this.renderNavHeader()}
          {this.renderNavBody()}
        </div>
      </nav>
    );
  }
}

export default NavBar;
