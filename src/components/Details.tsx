import React from "react";
import { useLocation } from "react-router-dom";
import { InitPost } from "../interfaceModel/Model";

const Details = () => {
  const { state } = useLocation();
  const post = state as InitPost;
  return (
    <div style={{ textAlign: "center" }} data-testid="details">
      <h3 data-testid="text">Details JSON</h3>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
};

export default Details;
