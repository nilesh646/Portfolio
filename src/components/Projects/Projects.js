import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import attendx from "../../Assets/Projects/attendx.png";
import trading from "../../Assets/Projects/trading.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import opensource from "../../Assets/Projects/opensource.png";
import emotion from "../../Assets/Projects/emotion.png";
import iot from "../../Assets/Projects/iot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          A collection of projects showcasing my work in Full Stack
          Development, AI, Computer Vision, Open Source and IoT.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* AttendX */}

          <Col md={4} className="project-card">
            <ProjectCard
              delay={0.1}
              imgPath={attendx}
              isBlog={false}
              title="AttendX"
              description="A secure biometric attendance platform featuring face recognition, anti-spoofing, GPS geofencing, QR verification, TOTP authentication, device fingerprinting, WebSocket live tracking and role-based access control."
              ghLink="https://github.com/nilesh646"
            />
          </Col>

          {/* Virtual Trading */}

          <Col md={4} className="project-card">
            <ProjectCard
              delay={0.2}
              imgPath={trading}
              isBlog={false}
              title="Virtual Trading App"
              description="A stock market simulation platform where users can practice trading using virtual funds. Built with React, Node.js, Express, MongoDB and Axios with authentication and responsive dashboards."
              ghLink="https://github.com/nilesh646"
            />
          </Col>

          {/* Portfolio */}

          <Col md={4} className="project-card">
            <ProjectCard
              delay={0.3}
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="A modern personal portfolio built using React.js featuring responsive design, project showcase, resume viewer, GitHub integration and interactive UI animations."
              ghLink="https://github.com/nilesh646"
            />
          </Col>

          {/* Open Source */}

          <Col md={4} className="project-card">
            <ProjectCard
              delay={0.4}
              imgPath={opensource}
              isBlog={false}
              title="Open Source Contributions"
              description="Contributed to open source projects involving GNU Octave, Julia, ROS and beginner-friendly repositories. Created pull requests, fixed issues and collaborated with maintainers."
              ghLink="https://github.com/nilesh646"
            />
          </Col>

          {/* Face Recognition */}

          <Col md={4} className="project-card">
            <ProjectCard
              delay={0.5}
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition & Emotion Detection"
              description="Computer vision project using OpenCV and Deep Learning to detect faces and classify emotions in real time using trained CNN models."
              ghLink="https://github.com/nilesh646"
            />
          </Col>

          {/* IoT */}

          <Col md={4} className="project-card">
            <ProjectCard
              delay={0.6}
              imgPath={iot}
              isBlog={false}
              title="Smart IoT Wearable System"
              description="An upcoming large-scale IoT and wearable computing project focused on real-time monitoring, embedded systems and cloud-connected intelligent devices."
              ghLink="https://github.com/nilesh646"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
