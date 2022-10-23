import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import format from "../../../../../utilities/formatDate";
import { initializeClock } from "../../../../../utilities/timer";

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
  const endDate: String = props.EndDate;

  useEffect(() => {
    console.log(format(props.StartDate));
    initializeClock("clockdiv", format(props.StartDate));
  })

  return (
    <Card
      style={{
        width: "24rem",
        margin: "2rem",
        padding: 0,
        borderRadius: "1rem",
        textAlign: "center",
      }}

      className="shadow-lg bg-white"
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {endDate}
        </Card.Text>
        <div id="clockdiv"></div>
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
