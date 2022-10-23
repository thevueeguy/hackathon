import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface IhackathonCardProps {
  name: string;
  StartDate: Date;
  EndDate: Date;
  description: String;
  image: Blob;
  level: string; 
  id: Number; 
}

const HackathonCard: React.FunctionComponent<IhackathonCardProps> = (
  props: IhackathonCardProps
) => {
  const image: any = props.image;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link
          to={`hackathonPage/${props.id}`}
          className="text-decoration-none"
        >
          <Button variant="success" type="submit" className="fs-5 px-4 mb-5">
            Participate Now
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HackathonCard;
