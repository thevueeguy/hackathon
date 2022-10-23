import * as React from "react";
import { Container, Navbar } from "react-bootstrap";

interface IHeaderProps {
  //
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
      <Navbar expand="lg" variant="light" bg="light">
          <Container fluid>
            <Navbar.Brand href="/" className="px-5">
              <img
                src="/DPhi-logo.png"
                width="100"
                height="50"
                className="d-inline-block align-top mx-5"
                alt="DPhi-logo"
              />
            </Navbar.Brand>
          </Container>
      </Navbar>
  );
};

export default Header;
