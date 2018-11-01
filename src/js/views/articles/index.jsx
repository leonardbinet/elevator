import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { actions as exampleActions } from "../../redux/modules/articles";
import { NavBar } from "../../common/components/navbar";
import { Footer } from "../../common/components/footer";
import { ArticlesHeader } from "../../common/components/headers";
import { exampleSelector } from "../../redux/selectors/exampleSelector";

require("../../../style/custom.css");

const mapStateToProps = state => ({
  example: exampleSelector(state)
});

const mapDispatchToProps = {
  ...exampleActions
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class ArticlesView extends Component {
  static propTypes = {
    example: PropTypes.object.isRequired
  };

  render() {
    return (
      <Fragment>
        <NavBar {...this.props} />
        <ArticlesHeader />
      </Fragment>
    );
  }
}

export default ArticlesView;
