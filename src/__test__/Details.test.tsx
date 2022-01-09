import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { InitPost } from "../components/Home";
import { Router } from "react-router-dom";
import Details from "../components/Details";

test("renders home test", () => {
  const history = createMemoryHistory();
  const post: InitPost = {
    title: "",
    url: "",
    created_at: new Date(),
    author: "",
  };
  history.push("/details", post);
  render(
    <Router history={history}>
      <Details />
    </Router>
  );
  const linkElement = screen.getByTestId("details");
  expect(linkElement).toBeInTheDocument();
});
