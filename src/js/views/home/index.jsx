import React, { Component, Fragment } from "react";

import { NavBar } from "../../common/components/navbar";
import { Sections } from "../../common/components/home/sections";
import { HomeHeader } from "../../common/components/headers";

require("../../../style/custom.css");

class HomeView extends Component {

  render() {
    return (
      <Fragment>
        <NavBar {...this.props} />
        <HomeHeader />
        <Sections />
        
      </Fragment>
    );
  }
} 

export default HomeView;
