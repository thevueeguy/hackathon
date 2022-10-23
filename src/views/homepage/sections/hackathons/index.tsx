import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./search";
import { Container } from "react-bootstrap";
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
    <div>
      <Search />
      <Container>
        {cards &&
          cards.map((item: any, index) => {
            return <HackathonCard key={index} name={item.name} StartDate={item.StartDate} EndDate={item.EndDate} description={item.name} image={item.image} level={item.level}/>; 
          })}
      </Container>
    </div>
  );
};

export default Hackathons;
