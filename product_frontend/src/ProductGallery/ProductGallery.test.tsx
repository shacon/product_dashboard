import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vi, afterEach } from "vitest";

import { useProductData } from "../hooks/useProductData";
import ProductGallery from "./ProductGallery";

vi.mock("../hooks/useProductData");

afterEach(() => {
  vi.clearAllMocks();
});

test("renders loading state", () => {
  vi.mocked(useProductData).mockReturnValue({
    products: [],
    loading: true,
    error: null,
  });

  render(<ProductGallery galleryType="best_rated" />);
  expect(screen.getByText("Loading products...")).toBeInTheDocument();
});

test("renders error state", () => {
  vi.mocked(useProductData).mockReturnValue({
    products: [],
    loading: false,
    error: "Failed to load",
  });

  render(<ProductGallery galleryType="best_rated" />);
  expect(
    screen.getByText("Failed to load products. Please try again later.")
  ).toBeInTheDocument();
});

test("renders no products state", () => {
  vi.mocked(useProductData).mockReturnValue({
    products: [],
    loading: false,
    error: null,
  });

  render(<ProductGallery galleryType="best_rated" />);
  expect(screen.getByText("No products found.")).toBeInTheDocument();
});

test("renders product cards for each product", () => {
  const mockProducts = [
    {
      id: 1,
      name: "Product 1",
      price: "29.99",
      total_reviews: 10,
      rating: "3",
      image_url: "",
    },
    {
      id: 2,
      name: "Product 2",
      price: "39.99",
      total_reviews: 10,
      rating: "3",
      image_url: "",
    },
    {
      id: 3,
      name: "Product 3",
      price: "49.99",
      total_reviews: 10,
      rating: "3",
      image_url: "",
    },
  ];

  vi.mocked(useProductData).mockReturnValue({
    products: mockProducts,
    loading: false,
    error: null,
  });

  render(<ProductGallery galleryType="best_rated" />);

  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Product 2")).toBeInTheDocument();
  expect(screen.getByText("Product 3")).toBeInTheDocument();
});

test("component paginates data", () => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 1200,
  });
  const mockProducts = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: "29.99",
    total_reviews: 10,
    rating: "3",
    image_url: "",
  }));

  vi.mocked(useProductData).mockReturnValue({
    products: mockProducts,
    loading: false,
    error: null,
  });

  render(<ProductGallery galleryType="most_reviewed" />);

  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Product 5")).toBeInTheDocument();
  expect(screen.queryByText("Product 6")).not.toBeInTheDocument();

  const leftButton = screen.getByRole("button", { name: "Previous page" });
  const rightButton = screen.getByRole("button", { name: "Next page" });

  expect(leftButton).toBeDisabled();
  expect(rightButton).not.toBeDisabled();

  fireEvent.click(rightButton);

  expect(screen.getByText("Product 6")).toBeInTheDocument();
  expect(screen.getByText("Product 10")).toBeInTheDocument();
  expect(screen.queryByText("Product 1")).not.toBeInTheDocument();
  expect(leftButton).not.toBeDisabled();
});
