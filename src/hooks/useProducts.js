import { useEffect, useState, useContext, useCallback } from "react";
import { ActionContext } from "../context"; // Importing context to access the selected category

// Custom hook to fetch products from the API based on selected category
const useProducts = () => {
  const [products, setProducts] = useState([]);
  
  const [loading, setLoading] = useState({ state: false, message: "" });
  
  const [error, setError] = useState(null);

  const { selectedCategory } = useContext(ActionContext);

  // Callback function to fetch products from the API
  const fetchProducts = useCallback(async () => {
    setLoading({ state: true, message: "Loading products..." });

    try {
      // Base URL for fetching products
      let url = "https://fakestoreapi.com/products";

      // If a category is selected, update the URL to fetch products from that category
      if (selectedCategory) {
        url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
      }

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Fetching product data failed: ${response.status}`);
      }

      // Parse the response data as JSON
      const data = await response.json();
      
      setProducts(data);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({ state: false, message: "" });
    }
  }, [selectedCategory]); // Dependency array ensures this function updates when selectedCategory changes

  // useEffect to call fetchProducts when the component mounts or selectedCategory changes
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); 

  return { products, loading, error };
};

export default useProducts; 
