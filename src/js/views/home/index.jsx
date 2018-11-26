import React, { Component, Fragment } from 'react';

import { NavBar } from '../../common/components/navbar';
import { Sections } from '../../common/components/home/sections';
import { HomeHeader } from '../../common/components/headers';

require('../../../style/custom.css');

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
  }

  handleScrollToElement(event) {
    window.scrollTo({
      top: this.aboutRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <HomeHeader handleScrollToElement={() => this.handleScrollToElement()} />
        <Sections aboutRef={this.aboutRef} />

      </Fragment>
    );
  }
}

export default HomeView;
