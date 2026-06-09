import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.25}
      scale={1.05}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      perspective={1500}
      transitionSpeed={2000}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: props.delay || 0,
        }}
        viewport={{ once: true }}
      >
        <Card className="project-card-view">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.title}
            className="project-image"
          />

          <Card.Body>
            <Card.Title>{props.title}</Card.Title>

            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>

            <div className="project-buttons">
              <Button
                variant="primary"
                href={props.ghLink}
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>

              {!props.isBlog && props.demoLink && (
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "10px" }}
                >
                  <CgWebsite /> &nbsp;Demo
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Tilt>
  );
}

export default ProjectCards;
