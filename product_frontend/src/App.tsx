import { useState, useEffect } from "react";
// import ProductCard from "./ProductCard/ProductCard.tsx";
import ProductGallery from "./ProductGallery/ProductGallery.tsx";
import "./App.css";
import type { ProductApiResponse } from "./types.ts";

function App() {
  const [data, setData] = useState<ProductApiResponse | null>(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log("here is the data ", json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {data && data.products ? (
        <ProductGallery products={data.products} />
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}

export default App;
