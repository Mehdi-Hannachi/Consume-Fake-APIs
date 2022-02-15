import React from "react";
import { useParams } from "react-router-dom";

const MyMap = () => {
  const { lat, lng } = useParams();
  return (
    <div>
      <h1>{lat}</h1>
      <h1>{lng}</h1>
    </div>
  );
};

export default MyMap;
