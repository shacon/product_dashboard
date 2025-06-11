import { useState, useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard.tsx";
import "./App.css";

interface Product {
  id: number;
  name: string;
  price: string;
  total_reviews: number;
  rating: string | null;
  image_url: string | null;
}

interface ProductApiResponse {
  products: Product[];
}

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
        <ul>
          {data.products.map((product) => (
            <div key={product.id}>
              <ProductCard name={product.name}></ProductCard>
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}

export default App;
