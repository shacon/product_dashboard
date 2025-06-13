import { useState, useEffect } from "react";

export const useProductData = (type: "most_reviewed" | "best_rated") => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams({
      [type]: "",
      limit: "15",
    });

    fetch(`http://localhost:8000/api/products/?${params}`)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, [type]);

  return { products, loading, error };
};
