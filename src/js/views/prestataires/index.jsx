import React, { Component, Fragment } from 'react';

import { NavBar } from '../../common/components/navbar';
import { PrestatairesHeader } from '../../common/components/headers';
import { PrestatairesList } from '../../common/components/prestataires/prestatairesList'

require('style/custom.css');


class PrestatairesView extends Component {
  render() {
    return (
      <Fragment>
        <NavBar {...this.props} />
        <PrestatairesHeader />
        <PrestatairesList />
      </Fragment>
    );
  }
}

export default PrestatairesView;
