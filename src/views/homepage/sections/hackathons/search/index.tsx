import * as React from "react";
import {
  Dropdown,
  Form,
  InputGroup,
  Container,
} from "react-bootstrap";

interface ISearchProps {
    //
}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  return (
    <div
      style={{ minHeight: "20rem", backgroundColor: "rgb(4, 45, 63)" }}
    >
      <p className="text-light text-center fw-bold fs-2 py-5">
        Explore Challenges
      </p>

      <Container className="h-25 mb-5 pb-5">
        <InputGroup className="d-flex flex-row justify-content-center">
            <Form.Group className="w-75 px-5">
              <Form.Control as="input" placeholder="🔍 Search" aria-label="Text input" className="rounded- fs-5 px-4" />
            </Form.Group>

          <Form.Group >
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="rounded-3 fs-5 px-3">
               Filter{' '}
              </Dropdown.Toggle>  
            
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </InputGroup>
      </Container>
    </div>
  );
};

export default Search;
