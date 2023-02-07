import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "../style/main.scss";

export default function Projects() {
  return (
    <div className="other " id="projects">
      <Container className="project-content">
        <Row>
          <Col className="mb-3">
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col md="3" className="mb-3 prod-card">
            <Card color="dark">
              <img alt="Sample" src="https://picsum.photos/300/150" />
              <CardBody>
                <CardTitle className="mb-3 prod-card-title" tag="h5">
                  NovuFresh - Restaurant
                </CardTitle>
                <CardSubtitle className="prod-card-sub">
                  Bootstrap - SCSS - JS
                </CardSubtitle>
                <CardText tag="h9" className="prod-card-text">
                  GitHub Live Site
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" className="mb-3 prod-card">
            <Card color="dark">
              <img alt="Sample" src="https://picsum.photos/300/150" />
              <CardBody>
                <CardTitle className="mb-2" tag="h5">
                  Card title
                </CardTitle>
                <CardText tag="h9" className="prod-card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" className="mb-3 prod-card">
            <Card color="dark">
              <img alt="Sample" src="https://picsum.photos/300/150" />
              <CardBody>
                <CardTitle className="mb-2" tag="h5">
                  Card title
                </CardTitle>
                <CardText tag="h9" className="prod-card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" className="mb-3 prod-card">
            <Card color="dark">
              <img alt="Sample" src="https://picsum.photos/300/150" />
              <CardBody>
                <CardTitle className="mb-2" tag="h5">
                  Card title
                </CardTitle>
                <CardText tag="h9" className="prod-card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
