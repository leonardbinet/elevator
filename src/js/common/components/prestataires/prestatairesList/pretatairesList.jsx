
import { func } from 'prop-types';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { prestatairesListSelector } from '../../../../redux/selectors/prestatairesSelectors'
import { receivePrestataires } from '../../../../redux/modules/prestataires'
import { prestatairesList } from '../../../../mock/prestatairesMock'

const mapStateToProps = (state) => ({
  prestataires: prestatairesListSelector(state),
})

const mapDispatchToProps = {
  receivePrestataires,
}

class PrestatairesList extends PureComponent {
  static propTypes = {
    receivePrestataires: func.isRequired,
  };

  componentWillMount() {
    const { prestataires } = this.props;
    if (!prestataires || !prestataires.length) {
      // mock call
      this.props.receivePrestataires(prestatairesList);
    }
  }

  renderPrestataire(prestataire) {
    return (
      <div className="col-md-4" key={prestataire.id}>
        <h2>{prestataire.name}</h2>
        <p>{prestataire.description}</p>
        <br />
      </div>
    );
  }

  render() {
    const { prestataires } = this.props;
    if (!prestataires){return null}
    return (
      <section id="questions">
        <div className="container">
          <div className="row">
            {prestataires.map((prestataire) => this.renderPrestataire(prestataire))}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrestatairesList);
