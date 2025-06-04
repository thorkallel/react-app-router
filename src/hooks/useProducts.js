import React, { useState, useEffect } from "react";
import { getProducts } from "../services/apis/productService";

export const useProducts = () => {
  const [products, setProducts] = useState(null);

  async function fetchProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};
