import React, { PureComponent } from 'react';


class Header extends PureComponent {
  render() {
    const { img, content } = this.props
    const headerStyle = {
      backgroundImage: `url(${img})`,
      // minHeight: `70%`
    }
    return (
      <header style={headerStyle}>
        <div className="header-content">
          <div className="header-content-inner">
            {content}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
