import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

interface IHackathonPageProps {}

const HackathonPage: React.FunctionComponent<IHackathonPageProps> = (props) => {
  const [name, setName] = useState<String | null>();
  const [startDate, setStartDate] = useState<String | null>();
  const [description, setDescription] = useState<String | null>();
  const [level, setLevel] = useState<String | null>();


  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/hackathons/${params.id}`).then((res) => {
      setName(res.data.name);
      setStartDate((new Date(res.data.startDate)).toString());
      setDescription(res.data.description);
      setLevel(res.data.level);
    });
  }, []);

  return (
    <div >
      <div style={{ backgroundColor: "rgb(4, 64, 90)", minHeight: "20rem" , padding:"5rem 0"}}>
          <Container> 
            <p className="bg-warning d-inline-block px-3 py-2 rounded fw-bold"><img src="" alt="" />{startDate}</p>
            <p className="fs-1 text-light fw-bold">{name}</p>
            <p className="d-inline-block fw-bold bg-light px-3 py-1 fs-5 rounded"><img src="/icons/network.svg" alt="level" className="mx-2"/>{level}</p>
          </Container>
      </div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default HackathonPage;
