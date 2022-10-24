import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown, Form, InputGroup, Container } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";

interface ISearchProps {
  setCards: Function;
}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    axios.get(`http://localhost:8000/hackathons?q=${search}`).then((res) => {
      props.setCards(res.data);
    });
  }, [search]);

  return (
    <div style={{ minHeight: "20rem", backgroundColor: "rgb(4, 45, 63)" }}>
      <p className="text-light text-center fw-bold fs-2 py-5">
        Explore Challenges
      </p>

      <Container className="h-25 mb-5 pb-5">
        <InputGroup className="d-flex flex-row justify-content-center">
          <Form.Group className="w-75 px-5">
            <DebounceInput
              minLength={2}
              debounceTimeout={300}
              placeholder="🔍 Search"
              aria-label="Text input"
              className="rounded-5 w-100 py-1 mb-2 fs-5 px-4"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="rounded-5 px-3 py-2"
              >
                Filter{" "}
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
