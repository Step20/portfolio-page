import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../style/main.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

export default function About() {
  return (
    <div className="other " id="slider">
      <Container className="about-content">
        <Row>
          <Col>
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col className="mb-5" sm="9">
            <h4>
              My interest in web development began while I was an ESL instructor
              in Vietnam. As the pandemic progressed and remote learning became
              mandatory, the teaching software that was in place was often hard
              to use for both instructors and students.
            </h4>
            <h4>
              My interest in web development began while I was an ESL instructor
              in Vietnam. As the pandemic progressed and remote learning became
              mandatory, the teaching software that was in place was often hard
              to use for both instructors and students.
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Skills</h1>
          </Col>
        </Row>
        <Row className="about-icons">
          <ul>
            <li>
              <AiFillHtml5 />
            </li>
            <li>
              <DiCss3 />
            </li>
            <li>
              <DiSass />
            </li>
            <li>
              <IoLogoJavascript />
            </li>
            <li>
              <DiReact />
            </li>
            <li>
              <FaBootstrap />
            </li>
            <li>
              <DiMongodb />
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  );
}
