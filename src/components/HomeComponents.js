import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderCard({ item }) {
  console.log("Items display" + item);
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  console.log("props" + props.campsite);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <RenderCard item={props.campsite} />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.partner} />
        </div>
      </div>
    </div>
  );
}

export default Home;
