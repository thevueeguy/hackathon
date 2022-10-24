import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import format from "../../../../../utilities/formatDate";
import { initializeClock } from "../../../../../utilities/timer";
import "./timer.css"

export interface IhackathonCardProps {
  name: String;
  StartDate: String;
  EndDate: String;
  description: String;
  image: Blob;
  level: string;
  id: Number;
}

const HackathonCard: React.FunctionComponent<IhackathonCardProps> = (
  props: IhackathonCardProps
) => {
  const image: any = props.image;
  const startDate: String = props.StartDate;

  initializeClock(`hackathonPage/${props.id}`, format(props.StartDate));

  return (
    <Card
      style={{
        width: "24rem",
        margin: "2rem",
        padding: 0,
        borderRadius: "1rem",
        textAlign: "center",
      }}
      className="shadow-lg bg-white "
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{startDate}</Card.Text>

        <div className="container-timer">
          <h1 id="headline-timer">{' '}</h1>
          <div id="countdown-timer">
            <ul>
              <li className="li-timer">
                <span id={`hackathonPage/${props.id}days`} className="span-timer" ></span>days
              </li>
              
              <li className="li-timer">
                <span id={`hackathonPage/${props.id}hours`} className="span-timer" ></span>Hours
              </li>
              <li className="li-timer">
                <span id={`hackathonPage/${props.id}minutes`} className="span-timer" ></span>Minutes
              </li>
              <li className="li-timer">
                <span id={`hackathonPage/${props.id}seconds`} className="span-timer" ></span>Seconds
              </li>
            </ul>
          </div>
        </div>

        <Link to={`hackathonPage/${props.id}`} className="text-decoration-none">
          <Button variant="success" type="submit" className="fs-5 px-4 mb-5">
            Participate Now
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HackathonCard;
