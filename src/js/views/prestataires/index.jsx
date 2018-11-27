import React, { Component, Fragment } from 'react';

import { NavBar } from '../../common/components/navbar';

import { PrestatairesHeader } from '../../common/components/headers';
import { PrestataireList } from '../../common/components/prestataires/prestatairesList'

require('../../../style/custom.css');


class PrestatairesView extends Component {
  render() {
    return (
      <Fragment>
        <NavBar {...this.props} />
        <PrestatairesHeader />
        <PrestataireList />
      </Fragment>
    );
  }
}

export default PrestatairesView;
