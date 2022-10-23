import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export interface IhackathonCardProps {
  name: string;
  StartDate: Date;
  EndDate: Date;
  description: String;
  image: Blob;
  level: string;
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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default HackathonCard;
