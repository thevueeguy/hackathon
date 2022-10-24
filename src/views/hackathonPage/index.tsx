import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./style.css";

interface IHackathonPageProps {}

const HackathonPage: React.FunctionComponent<IHackathonPageProps> = (props) => {
  const [name, setName] = useState<String | null>();
  const [startDate, setStartDate] = useState<String | null>();
  const [description, setDescription] = useState<String | null>();
  const [level, setLevel] = useState<String | null>();

  const navActiveHandler = function(event: string | null) {

   if(event !== null) {
    const ele = document.getElementById(event);
    if(ele && !(ele.getAttribute("class")?.includes("active")))
      ele.setAttribute("class", "active");
   }
  }

  const params = useParams();

  const handleDelete = function() {
    axios.delete(`http://localhost:8000/hackathons/${params.id}`).then((res) => {
      toast.success("Deleted Successfully");
    });
  }

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
      <ToastContainer />
      <div style={{ backgroundColor: "rgb(4, 64, 90)", minHeight: "19rem" , padding:"4rem 0"}}>
          <Container> 
            <p className="bg-warning d-inline-block px-3 py-2 rounded fw-bold"><img src="" alt="" />{startDate}</p>
            <p className="fs-1 text-light fw-bold my-3">{name? name: "404 NOT FOUND"}</p>
            <p className="d-inline-block fw-bold bg-light px-3 py-1 fs-5 rounded my-3"><img src="/icons/network.svg" alt="level" className="mx-2"/>{level}</p>
          </Container>
      </div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto " onSelect={(e) => navActiveHandler(e)}>
            <Nav.Link href="#" className="fw-bold fs-4 text-dark" id="overview" eventKey="overview">Overview</Nav.Link>
            <div className="button-p ">
              <Link to={`editFormPage`}>
                <Button variant="success" className="button-edit fw-bold "> Edit </Button>
              </Link>
              <Button variant="outline-danger" className="button-delete fw-bold" onClick={handleDelete}> Delete </Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Container >
        <p className="fs-5 font-weight-normal w-50">{description}</p>
      </Container>
    </div>
  );
};

export default HackathonPage;
