import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface IOpportunityProps {}

const Opportunity: React.FunctionComponent<IOpportunityProps> = (props) => {
  return (
    <>
      <Container className="">
        <Row className="text-center m-5 p-3">
          <p className="text-dark fs-1 fw-bold">
            Why participate in{" "}
            <p className="text-success d-inline-block fs-1 fw-bold">
              AI Challenges?
            </p>
          </p>{" "}
        </Row>
        <Row className="my-5">
          <Col className="m-5 py-3">
            <div className="h-50">
              <img src="./icons/notebook.svg" alt="" className="m-2 p-1" />
            </div>
            <h1 className="fw-bold fs-3">Prove your skills</h1>
            <p className="fs-5 ">
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </p>
          </Col>
          <Col className="m-5 py-3">
            <div className="h-50">
              <img src="./icons/people.svg" alt="" className="m-2 p-1" />
            </div>
            <h1 className="fw-bold fs-3">Learn from community</h1>
            <p className="fs-5 ">
              One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="m-5">
            <div className="h-50">
              <img src="./icons/robot.svg" alt="" className="m-2 p-1" />
            </div>
            <h1 className="fw-bold fs-3">Challenge yourself</h1>
            <p className="fs-5 ">
              There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.
            </p>
          </Col>
          <Col className="m-5">
            <div className="h-50">
              <img src="./icons/card.svg" alt="" className="m-2 p-1" />
            </div>
            <h1 className="fw-bold fs-3">Earn recognition</h1>
            <p className="fs-5 ">
              You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Opportunity;
