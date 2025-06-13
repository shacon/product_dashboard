import styles from "./ProductCard.module.css";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  if (!product) {
    return <div>Loading product...</div>;
  }
  return (
    <div className={styles.card}>
      <div className={`${styles.cardSection} ${styles.imageSection}`}>
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className={styles.productImage}
          />
        ) : (
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/059/565/116/small/psyllium-supplement-bottle-on-a-simple-pedestal-display-photo.jpeg"
            alt="No image available"
            className={styles.productImage}
          />
        )}
      </div>
      <div className={`${styles.cardSection} ${styles.middleSection}`}>
        <p>{product.name}</p>
        <p>Price: {product.price}</p>
      </div>
      <div className={styles.cardSection}>
        <p>Total Reviews: {product.total_reviews}</p>

        {product.rating && <p>Rating: {product.rating}</p>}
      </div>
    </div>
  );
}

export default ProductCard;
