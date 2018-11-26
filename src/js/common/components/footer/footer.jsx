import React, { PureComponent } from 'react';

import './footer.css';

class Footer extends PureComponent {
  renderTwitter() {
    return (
      <li>
        <a href="#">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x" />
            <i className="fa fa-twitter fa-stack-1x fa-inverse" />
          </span>
        </a>
      </li>
    );
  }

  renderFacebook() {
    return (
      <li>
        <a href="#">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x" />
            <i className="fa fa-facebook fa-stack-1x fa-inverse" />
          </span>
        </a>
      </li>
    );
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <ul className="list-inline text-center" />
              {this.renderTwitter()}
              {this.renderFacebook()}
              <p className="copyright text-muted">
                Copyright &copy; www.ascenseur-copropriete.fr 2016
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
