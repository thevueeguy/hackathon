import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import format from "../../../../../utilities/formatDate";
import { initializeClock } from "../../../../../utilities/timer";
import "./timer.css";

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

  initializeClock(
    `hackathonPage/${props.id}`,
    format(props.StartDate),
    format(props.EndDate)
  );

  return (
    <Card
      style={{
        maxWidth: "24rem",
        margin: "2rem",
        padding: 0,
        borderRadius: "1rem",
        textAlign: "center",
      }}
      className="shadow-lg bg-white "
    >
      <Card.Img
        variant="top"
        src={image}
        className="rounded-top-left-1 rounded-top-right-1 img-fluid image-height"
      />
      <Card.Body className="d-flex flex-column justify-content-around body-height">

        <p className="w-50 mx-auto py-1 rounded fw-bold" id={`hackathonPage/${props.id}badge-timer`}></p>

        <Card.Title className="title-height">{props.name}</Card.Title>

        <div className="container-timer">
          <h5
            id={`hackathonPage/${props.id}headline-timer`}
            className="headline-timer"
          >
            {" "}
          </h5>
          <div
            id={`hackathonPage/${props.id}countdown-timer`}
            className="countdown-timer"
          >
            <ul>
              <li className="li-timer">
                <span
                  id={`hackathonPage/${props.id}days`}
                  className="span-timer"
                ></span>
                days
              </li>

              <li className="li-timer">
                <span
                  id={`hackathonPage/${props.id}hours`}
                  className="span-timer"
                ></span>
                Hours
              </li>
              <li className="li-timer">
                <span
                  id={`hackathonPage/${props.id}minutes`}
                  className="span-timer"
                ></span>
                Minutes
              </li>
              <li className="li-timer">
                <span
                  id={`hackathonPage/${props.id}seconds`}
                  className="span-timer"
                ></span>
                Seconds
              </li>
            </ul>
          </div>
        </div>

        <Link to={`hackathonPage/${props.id}`} className="text-decoration-none">
          <Button variant="success" type="submit" className="">
            Participate Now
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HackathonCard;
