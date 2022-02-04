import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("../components/Home.tsx", () => {
  const MockName = () => <div>HomePageMock</div>;
  return MockName;
});

describe("should test react router", () => {
  test("should render Home page component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
  });

  test("should render Details page component", () => {
    const history = createMemoryHistory({ initialEntries: ["/details"] });
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(history.location.pathname).toBe("/details");
  });

  test("landing on a bad page", () => {
    const history = createMemoryHistory({
      initialEntries: ["/some/bad/routes"],
    });
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(history.location.pathname).toBe("/some/bad/routes");
  });
});
