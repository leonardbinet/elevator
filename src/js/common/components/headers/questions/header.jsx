import React, { PureComponent } from "react";

import Header from "../header";

import img from "../../../../../assets/images/header_question.jpg";

class QuestionsHeader extends PureComponent {
  render() {
    const content = (
      <div className="header-content">
        <div className="header-content-inner">
          <h1>Foire aux questions</h1>
          <br />
          <p>
            Trouvez les réponses à vos questions ou posez nous votre question,
            nous y répondrons rapidement!
          </p>
        </div>
      </div>
    );
    return <Header img={img} content={content} />;
  }
}

export default QuestionsHeader;
