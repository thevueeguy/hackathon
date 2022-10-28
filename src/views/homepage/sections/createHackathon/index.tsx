import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ICreateHackathonProps {
  //
}

const CreateHackathon: React.FunctionComponent<ICreateHackathonProps> = (
  props
) => {
  return (
    <>
      <div style={{ backgroundColor: "rgb(4, 64, 90)" }}>
        <Container className="p-5">
          <Row>
            <Col lg={7} className="pt-5">
              <h1
                style={{ borderLeft: "10px solid #ffbc00" }}
                className="text-white fs-1 fw-bold px-5 my-5"
              >
                <h1 className="text-white fs-1 fw-bold ">
                  Accelerate Innovation
                </h1>{" "}
                with Global AI Challenges
              </h1>
              <p className="text-light fs-4 mx-5 my-4">
                AI Challenges at DPhi simulate real-world problems. It is a
                great place to put your AI/Data Science skills to test on
                diverse datasets allowing you to faster learning through
                competitions.
              </p>
              <Link to="createForm">
                <Button
                  variant="light"
                  className="fw-bold fs-5 mx-5 my-4 rounded-3"
                >
                  Create Challenge
                </Button>
              </Link>
            </Col>
            <Col
              lg={5}
              className="d-flex justify-content-center align-items-center"
            >
              <img src="./icons/rocket.svg" alt="rocket" className="h-75" />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "rgb(4, 45, 63)" }}>
        <Container>
          <Row style={{ minHeight: "20vh" }}>
            <Col
              style={{ borderRight: "2px solid white" }}
              className="d-flex justify-content-center align-items-center m-5"
            >
              <Row>
                <Col lg={3}>
                  <img src="./icons/AI.svg" alt="" className="m-2" />
                </Col>
                <Col lg={9} className="text-light">
                  <p className="my-0 mx-3 fw-bold fs-4">100K+</p>
                  <p className="my-0 mx-3 fs-5">AI Model Submissions</p>
                </Col>
              </Row>
            </Col>
            <Col
              style={{ borderRight: "2px solid white" }}
              className="d-flex justify-content-center align-items-center m-5"
            >
              <Row>
                <Col lg={3}>
                  <img
                    src="./icons/data-scientist.svg"
                    alt=""
                    className="m-2"
                  />
                </Col>
                <Col lg={9} className="text-light">
                  <p className="my-0 mx-3 fw-bold fs-4">50K+</p>
                  <p className="my-0 mx-3 fs-5">Data Scientists</p>
                </Col>
              </Row>
            </Col>
            <Col className="d-flex justify-content-center align-items-center m-5">
              <Row>
                <Col lg={3} md={6}>
                  <img src="./icons/challenges.svg" alt="" className="m-2" />
                </Col>
                <Col lg={9} md={6} className="text-light">
                  <p className="my-0 mx-3 fw-bold fs-4">100+</p>
                  <p className="my-0 mx-3 fs-5">AI Challenges Hosted</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CreateHackathon;
