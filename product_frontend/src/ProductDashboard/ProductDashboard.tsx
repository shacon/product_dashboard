import ProductGallery from "../ProductGallery/ProductGallery";
import styles from "./ProductDashboard.module.css";

function ProductDashabord() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.galleryArea}>
        <ProductGallery galleryType="most_reviewed" label="Most Reviewed" />
        <ProductGallery galleryType="best_rated" label="Best Rated" />
      </div>
    </div>
  );
}

export default ProductDashabord;
