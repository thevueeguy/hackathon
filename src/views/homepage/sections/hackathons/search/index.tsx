import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Dropdown, Form, InputGroup } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";

interface ISearchProps {
  setCards: Function;
}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const [search, setSearch] = useState<string>("");
  const [easyCheck, setEasyCheck] = useState<boolean | null>();
  const [mediumCheck, setMediumCheck] = useState<boolean | null>();
  const [hardCheck, setHardCheck] = useState<boolean | null>();

  useEffect(() => {
    if (!(easyCheck || mediumCheck || hardCheck)) {
      let url = "http://localhost:8000/hackathons?";
      if(search !== "") {
        if(url.slice(-1)!=='?')
        url+='&';
        url += `q=${search}`;
      }
      axios.get(url).then((res) => {
        props.setCards(res.data);
      });
    } else {
      let url = "http://localhost:8000/hackathons?";
      if (!easyCheck) {
        url += "level_ne=Easy";
      }
      if (!mediumCheck) {
        if(url.slice(-1)!=='?')
        url+='&';
        url += "level_ne=Medium";
      }
      if (!hardCheck) {
        if(url.slice(-1)!=='?')
        url+='&';
        url += "level_ne=Hard";
      }
      if(search !== "") {
        if(url.slice(-1)!=='?')
        url+='&';
        url += `q=${search}`;
      }
      axios.get(url).then((res) => {
        props.setCards(res.data);
      });
    }
  }, [easyCheck, hardCheck, mediumCheck, search]);

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
                <Form.Label className=" mx-4 my-2 text-muted">
                  Status
                </Form.Label>
                <Form.Check
                  label="Active"
                  name="group1"
                  type="checkbox"
                  className="mx-4 my-2"
                />
                <Form.Check
                  label="Incoming"
                  name="group1"
                  type="checkbox"
                  className="mx-4 my-2"
                />
                <Form.Check
                  label="Past"
                  name="group1"
                  type="checkbox"
                  className="mx-4 my-2 pb-2"
                />
                <Dropdown.Divider />
                <Form.Label className=" mx-4 my-2 text-muted">Level</Form.Label>
                <Form.Check
                  label="Easy"
                  name="group1"
                  type="checkbox"
                  className="mx-4 my-2"
                  onChange={(e) => setEasyCheck(e.target.checked)}
                />
                <Form.Check
                  label="Medium"
                  name="group1"
                  type="checkbox"
                  className="mx-4 my-2"
                  onChange={(e) => setMediumCheck(e.target.checked)}
                />
                <Form.Check
                  label="Hard"
                  name="group1"
                  type="checkbox"
                  className="mx-4 my-2 pb-2"
                  onChange={(e) => setHardCheck(e.target.checked)}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </InputGroup>
      </Container>
    </div>
  );
};

export default Search;
