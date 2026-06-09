import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import Techstack from "../About/Techstack";
import Github from "../About/Github";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >

              <motion.div
                className="hero-card"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration:1,
                  type:"spring",
                  stiffness:100
                }}
              >

                <h4 className="hero-subtitle">
                  👋 Hello World
                </h4>

                <h1 className="hero-title">
                  NILESH KUMAR
                </h1>

                <h3 className="hero-role">
                  <Type />
                </h3>

                <p className="hero-description">
                  Electronics & Communication Engineering Student at JNU.
                  Passionate about Full Stack Development, AI, Computer Vision,
                  IoT and Open Source Contributions.
                </p>

                <div className="hero-buttons">

                  <a
                    href="/resume"
                    className="btn btn-success"
                  >
                    Resume
                  </a>

                  <a
                    href="https://github.com/nilesh646"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light"
                  >
                    GitHub
                  </a>

                </div>

              </motion.div>

            </Tilt>

          </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nilesh646"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nilesh-kumar-27091b31a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
