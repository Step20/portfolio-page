import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import "../style/main.scss";
import { Link } from "react-scroll";

export const PageNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container fluid>
        <Navbar
          color="dark"
          dark
          expand="md"
          fixed="bottom"
          className="pg-nav "
        >
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto " navbar>
              <NavItem>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  ignoreCancelEvents={true}
                >
                  <NavLink className="mx-5" active>
                    Home
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink className="mx-5">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="mx-5">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="mx-5">Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
