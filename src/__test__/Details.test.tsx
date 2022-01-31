import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Details from "../components/Details";

describe("Details component testing", () => {
  test("should render <Details /> component", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Details />
      </Router>
    );
    const linkElement = screen.getByTestId("details");
    expect(linkElement).toBeInTheDocument();
  });

  test("should find text", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Details />
      </Router>
    );
    const text = screen.getByTestId("text");
    expect(text).toBeInTheDocument();
  });
});
