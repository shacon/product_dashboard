import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import ProductCard from "./ProductCard";

test("renders product data", () => {
  const mockProduct = {
    id: 1,
    name: "Test Product",
    price: "19.99",
    rating: "4.5",
    total_reviews: 10,
    image_url: "",
  };

  render(<ProductCard product={mockProduct} />);

  expect(screen.getByText(/Test Product/)).toBeInTheDocument();
  expect(screen.getByText(/19.99/)).toBeInTheDocument();
  expect(screen.getByText(/4.5/)).toBeInTheDocument();
});
