import styles from "./ProductCard.module.css";

interface ProductCardProps {
  name: string;
}

function ProductCard({ name }: ProductCardProps) {
  return (
    <div className={styles.card}>
      This is the product card component called {name}
    </div>
  );
}

export default ProductCard;
