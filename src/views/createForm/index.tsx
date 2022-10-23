import React, { FormEvent, useRef, useState } from "react";
import { Button, Container, Dropdown, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import uploadData from "./create.function";

interface ICreateFormProps {
  //
}

const CreateForm: React.FunctionComponent<ICreateFormProps> = (props) => {
  const fileInput = useRef<HTMLInputElement>(document.createElement("input"));
  const FormRef = useRef<HTMLFormElement>(document.createElement("form"));

  const [name, setName] = useState<String>("");
  const [startDate, setStartDate] = useState<String>("");
  const [endDate, setEndDate] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const [image, setImage] = useState<FileList | null>(null);
  const [level, setLevel] = useState<String | null>("Easy");

  function addHackathon(e: FormEvent) {
    e.preventDefault();
    if(name === "" || startDate === "" || endDate === "" || description === "" || image === null || level === "") {
      toast("Enter all the details!");
    } else {
      uploadData({name, startDate, endDate, description, image, level});
    }
    FormRef.current.reset();
    setImage(null);
    setLevel("Easy");
  }

  return (
    <Container>
      <ToastContainer />
      <h4 className="fw-bold my-5">Challenge Details</h4>
      <Form onSubmit={addHackathon} ref={FormRef}>
        <Form.Group className="mb-4 w-50" controlId="name">
          <Form.Label className="fs-5 mb-4">Challenge Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4 w-50" controlId="startDate">
          <Form.Label className="fs-5 mb-4">Start Date</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4 w-50" controlId="endDate">
          <Form.Label className="fs-5 mb-4">End Date</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4 w-50" controlId="description">
          <Form.Label className="fs-5 mb-4">Description</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4 w-50" controlId="image">
          <Form.Label className="fs-5 mb-4 d-block">Image</Form.Label>
          <input
            ref={fileInput}
            type="file"
            className="d-none"
            name="thumbnail"
            onChange={(e) => setImage(e.target.files)}
          />
          <Button
            onClick={() => {
              if (null !== fileInput.current) {
                fileInput.current.click();
              }
            }}
            variant="outline-dark fs-5 px-5"
          >
            Upload
            <img src="./icons/upload.svg" alt="upload" className="mx-2" />
          </Button>
          <Form.Text className="d-block">{image && image[0].name}</Form.Text> 
        </Form.Group>

        <Form.Group className="mb-5 w-50" controlId="level">
          <Form.Label className="fs-5 mb-3">Level Type</Form.Label>

          <Dropdown onSelect={e => setLevel(e)}>
            <Dropdown.Toggle
              variant="outline-dark"
              id="levelType"
              className="px-5 fs-5"
            >
              {level}
            </Dropdown.Toggle>

            <Dropdown.Menu
              variant="outline-dark"
              id="dropdown-basic-button"
              title="Choose Level"
              className="btn-lg"
            >
              <Dropdown.Item eventKey="Easy" >Easy</Dropdown.Item>
              <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
              <Dropdown.Item eventKey="Hard">Hard</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Button variant="success" type="submit" className="fs-5 px-4 mb-5">
          Create Challenge
        </Button>
      </Form>
    </Container>
  );
};

export default CreateForm;
