import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./search";
import { Container, Row } from "react-bootstrap";
import HackathonCard from "./hackathonCard";

interface IHackathonsProps {
  //
}

const Hackathons: React.FunctionComponent<IHackathonsProps> = (props) => {
  const [cards, setCards] = useState<Array<Object> | null>();

  useEffect(() => {
    axios.get("http://localhost:8000/hackathons").then((res) => {
      setCards(res.data);
    });
  }, []);

  return (
    <div style={{backgroundColor:"#003145"}}>
      <Search setCards={setCards} />
      <Container fluid className="p-5">
        <Row
          className="justify-content-center col-12"
          style={{ padding: "0 10rem" }}
        >
          {cards && cards.length > 0 ? (
            cards.map((item: any, index) => {
              return (
                <HackathonCard
                  key={index}
                  id={item.id}
                  name={item.name}
                  StartDate={item.startDate}
                  EndDate={item.endDate}
                  description={item.description}
                  image={item.image}
                  level={item.level}
                />
              );
            })
          ) : (
            <h1 className="text-center">NO CHALLENGES LISTED CURRENTLY</h1>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Hackathons;
