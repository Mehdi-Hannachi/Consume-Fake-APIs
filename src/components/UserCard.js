import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MyMap from "./MyMap";
const UserCard = ({
  user: {
    id,
    name,
    email,
    address: { street, city, zipcode, geo },
  },
}) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "Helvetica",
        width: "30rem",
        margin: 10,
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <Link to={`/map/${geo.lat}/${geo.lng}`}>
        <h1> Map </h1>
      </Link>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          email : {email}
          <div>
            street : {street}
            <br />
            city : {city}
            <br /> Zipcode: {zipcode}
          </div>
        </Card.Text>
        <Link
          to={`userPosts/${id}`}
          style={{ textDecoration: "none", color: "rgb(204, 133, 0)" }}
        >
          Check my posts
        </Link>
      </Card.Body>
      <Card.Img
        src={logo}
        style={{ width: 100, height: "100px", alignSelf: "center" }}
      />
    </Card>
  );
};

export default UserCard;
