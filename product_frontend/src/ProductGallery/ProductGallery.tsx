import { useState, useMemo, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

import { useProductData } from "../hooks/useProductData";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGallery.module.css";

interface ProductGalleryProps {
  galleryType: "most_reviewed" | "best_rated";
  label?: string;
}

function ProductGallery({ galleryType, label }: ProductGalleryProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const { products, loading, error } = useProductData(galleryType);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsPerPage = () => {
    if (windowWidth > 1115) return 5;
    if (windowWidth < 768) return 1;
    return 3;
  };

  const totalPages = Math.ceil(products.length / itemsPerPage());

  const startIndex = currentPage * itemsPerPage();
  const endIndex = startIndex + itemsPerPage();
  const currentProducts = useMemo(
    () => products.slice(startIndex, endIndex),
    [products, startIndex, endIndex]
  );

  const leftClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const rightClick = () => {
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

  if (loading) {
    return (
      <div className={styles.galleryWrapper}>
        <div className={styles.label}>{label}</div>
        <div className={styles.loading}>Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.galleryWrapper}>
        <div className={styles.label}>{label}</div>
        <div className={styles.error}>
          Failed to load products. Please try again later.
        </div>
      </div>
    );
  }

  if (!loading && products.length === 0) {
    return (
      <div className={styles.galleryWrapper}>
        <div className={styles.label}>{label}</div>
        <div className={styles.empty}>No products found.</div>
      </div>
    );
  }

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.label}>{label}</div>
      <div className={styles.gallery}>
        <button
          onClick={leftClick}
          disabled={disabled("left")}
          aria-label="Previous page"
        >
          <ChevronLeft size={50} />
        </button>
        <div className={styles.productWrapper}>
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button
          onClick={rightClick}
          disabled={disabled("right")}
          aria-label="Next page"
        >
          <ChevronRight size={50} />
        </button>
      </div>
    </div>
  );
}

export default ProductGallery;
