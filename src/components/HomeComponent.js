import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Button } from "reactstrap";
import "../style/main.scss";
import { AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { IoIosArrowForward } from "react-icons/io";
import { About } from "./AboutComponent";

export default function Home() {
  return (
    <div className="main page-1" id="home">
      <Container className="home-content ">
        <Row>
          <Col sm="10">
            <h1>
              Hello there,
              <span>
                <br></br>
              </span>
              I'm Armand Robinson
            </h1>
          </Col>
          <Col className="home-arrow  text-center ">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={20}
              horizontal={true}
              duration={500}
            >
              <IoIosArrowForward />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <h3>Front-end developer and Web Designer</h3>
          </Col>
        </Row>
        <Row>
          <Col className="home-icons">
            <ul>
              <li>
                <GrMail />
              </li>
              <li>
                <AiFillGithub />
              </li>
              <li>
                <AiFillLinkedin />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
