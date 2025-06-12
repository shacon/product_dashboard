import { useState, useMemo } from "react";
import styles from "./ProductGallery.module.css";
import type { Product } from "../types";
import ProductCard from "../ProductCard/ProductCard";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface ProductGalleryProps {
  products: Product[];
}

function ProductGallery({ products }: ProductGalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
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
  return (
    <div className={styles.gallery}>
      <button>
        <ChevronLeft size={50} />
      </button>

      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <button>
        <ChevronRight size={50} />
      </button>
    </div>
  );
}

export default ProductGallery;
