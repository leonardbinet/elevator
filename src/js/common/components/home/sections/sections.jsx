import React, { PureComponent, Fragment } from 'react';

import palier from '../../../../../assets/images/portfolio/palier_ascenseur.jpg';
import technicien2 from '../../../../../assets/images/portfolio/technicien2.jpg';
import legislation4 from '../../../../../assets/images/portfolio/legislation4.jpg';

class Section extends PureComponent {
  render() {
    const { content, className, sectionId } = this.props;
    return (
      <section className={className} id={sectionId}>
        {this.content}
      </section>
    );
  }
}

class Sections extends PureComponent {
  renderAboutSection() {
    const { aboutRef } = this.props;
    return (
      <section className="bg-primary" ref={aboutRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="section-heading">
                Un site pour clarifier les enjeux de l'ascenseur en copropriété
              </h2>
              <hr className="light" />
              <p className="text-faded">
                L'ascenseur est devenu progressivement un outil indispensable de
                mobilité pour beaucoup de résidents de copropriété. Ce site a
                pour but de vous aider à maîtriser ce domaine parfois complexe,
                et souvent méconnu, afin de vous aider à prendre les bonnes
                décisions.
                {' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderServicesSection() {
    return (
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Vous y trouverez</h2>
              <hr className="primary" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 text-center">
              <div className="service-box">
                <a
                  className="fa fa-4x fa-newspaper-o wow bounceIn text-primary"
                  href="{% url 'accueil_articles' %}"
                />
                <h3>Des articles thèmatiques</h3>
                <p className="text-muted">
                  Fonctionnement, maintenance, travaux, réglementation etc. Vous
                  y trouverez toutes les informations utiles pour mieux
                  comprendre les enjeux liés à votre ascenseur.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <div className="service-box">
                <a
                  className="fa fa-4x fa-paper-plane wow bounceIn text-primary"
                  data-wow-delay=".1s"
                  href="{% url 'accueil_questions' %}"
                />
                <h3>Un espace pour poser vos questions </h3>
                <p className="text-muted">
                  Nos experts feront de leur mieux pour y répondre.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <div className="service-box">
                <a
                  className="fa fa-4x fa-magnet wow bounceIn text-primary"
                  data-wow-delay=".2s"
                  href="{% url 'accueil_prestataires' %}"
                />
                <h3>Un choix de prestataires</h3>
                <p className="text-muted">
                  Bureau de contrôle, d'étude, ou ascensoriste, obtenez
                  gratuitement et sans engagement plusieurs devis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderPortfolioSection() {
    return (
      <section className="no-padding" id="portfolio">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-lg-4 col-sm-4">
              <a href="#" className="portfolio-box">
                <img src={palier} className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      L'ascenseur
                    </div>
                    <div className="project-name">
                      Comment fonctionne un ascenseur, quels en sont les organes
                      majeurs, quelles spécificités?
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-4">
              <a href="#" className="portfolio-box">
                <img src={technicien2} className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Maintenance
                    </div>
                    <div className="project-name">
                      En quoi consiste la maintenance d'un ascenseur? Comment
                      choisir son contrat?
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-4">
              <a href="#" className="portfolio-box">
                <img src={legislation4} className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Réglementation
                    </div>
                    <div className="project-name">
                      SAE, accessibilité, contrôle technique quinquennal..
                      quelles sont vos obligations, et celles de votre
                      ascensoriste?
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderAsideSection() {
    return (
      <aside className="bg-primary">
        <div className="container text-center">
          <div className="call-to-action">
            <h2>
              Obtenir une prestation d'audit, conseil, ou des propositions
              commerciales des ascensoristes
            </h2>
            <a
              href="/#/prestataires"
              className="btn btn-default btn-xl"
            >
              Trouvez vos prestataires
            </a>
          </div>
        </div>
      </aside>
    );
  }

  renderContactSection() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="section-heading">Des questions ou remarques?</h2>
              <hr className="primary" />
              <p>
                N'hésitez pas à nous contacter, nous prendrons en compte vos
                demandes pour rendre ce site le plus utile possible
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <i
                className="fa fa-envelope-o fa-3x wow bounceIn"
                data-wow-delay=".1s"
              />
              <p>
                <a href="mailto:feedback@ascenseur-en-copropriete.com">
                  Feedback
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderAboutSection()}
        {this.renderServicesSection()}
        {this.renderPortfolioSection()}
        {this.renderAsideSection()}
        {this.renderContactSection()}
      </Fragment>
    );
  }
}

export default Sections;
