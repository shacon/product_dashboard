import { useState, useMemo } from "react";
import styles from "./ProductGallery.module.css";
import type { Product } from "../types";
import ProductCard from "../ProductCard/ProductCard";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface ProductGalleryProps {
  products: Product[];
}

function ProductGallery({ products }: ProductGalleryProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = currentPage * 5;
  const endIndex = startIndex + 5;
  const currentProducts = useMemo(
    () => products.slice(startIndex, endIndex),
    [products, startIndex, endIndex]
  );

  if (!products) {
    return <div>Loading product...</div>;
  }

  const leftClick = () => {
    console.log("left Clicked!");
    setCurrentPage(currentPage - 1);
  };

  const rightClick = () => {
    console.log("right Clicked!");
    console.log(currentPage >= totalPages);
    console.log("total pages", totalPages);
    console.log("current pages", currentPage);
    setCurrentPage(currentPage + 1);
  };

  const disabled = (direction: "left" | "right"): boolean => {
    if (direction === "left") {
      return currentPage <= 0;
    }
    if (direction === "right") {
      return currentPage >= totalPages - 1;
    }
    return false;
  };

  return (
    <div className={styles.gallery}>
      <button onClick={leftClick} disabled={disabled("left")}>
        <ChevronLeft size={50} />
      </button>
      <div className={styles.productWrapper}>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button onClick={rightClick} disabled={disabled("right")}>
        <ChevronRight size={50} />
      </button>
    </div>
  );
}

export default ProductGallery;
