import React, { PureComponent } from 'react';

import './Loading.css'

class Loading extends PureComponent {
  getMessage() {
    const {
      isLoading,
      timedOut,
      pastDelay,
      error,
    } = this.props;

    const errorMessage = `We can\'t pull up information at this point, please try again. ${error}`

    if (isLoading) {
      if (timedOut) {
        return <div>{errorMessage}</div>;
      } 
      return null;
    } if (error) {
      return <div>{errorMessage}</div>;
    }

    return null;
  }

  render() {
    return this.getMessage()
  }
}

export default Loading;
