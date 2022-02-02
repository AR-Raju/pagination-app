import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { getPaginationData } from "../api/paginationApi";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Home component testing", () => {
  test("should render <Home /> component", () => {
    render(<Home />);
    const linkElement = screen.getByTestId("home");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render api data", async () => {
    return await getPaginationData(0).then((data) => {
      expect(data).toBeDefined();
    });
  });
});
