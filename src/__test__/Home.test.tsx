import React from "react";
import { act, render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { getPaginationData } from "../api/paginationApi";

describe("Home component testing", () => {
  test("should render <Home /> component", () => {
    render(<Home />);
    const linkElement = screen.getByTestId("home");
    expect(linkElement).toBeInTheDocument();
  });

  test("should load api data", async () => {
    return await act(() =>
      getPaginationData(1).then((data) => {
        expect(data).toBeDefined();
      })
    );
  });
});
