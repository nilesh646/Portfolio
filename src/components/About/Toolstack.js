import React from "react";
import { Col, Row } from "react-bootstrap";
// import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
// import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import windows from "../../Assets/TechIcons/windows.svg";
import linux from "../../Assets/TechIcons/linux.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
  <img src={windows} alt="Windows" className="tech-icon-images" />
  <div className="tech-icons-text">Windows</div>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <img src={linux} alt="Linux" className="tech-icon-images" />
  <div className="tech-icons-text">Linux</div>
</Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
