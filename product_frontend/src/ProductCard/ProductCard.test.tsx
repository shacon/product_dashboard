import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import ProductCard from "./ProductCard";

test("renders product name", () => {
  const mockProduct = {
    id: 1,
    name: "Test Product",
    price: "19.99",
    rating: "4.5",
    total_reviews: 10,
  };

  render(<ProductCard name={mockProduct.name} />);

  screen.debug();
  // expect(screen.getByText("Test Product")).toBeInTheDocument();
});
