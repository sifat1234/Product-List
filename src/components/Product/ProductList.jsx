import React, { useContext, useMemo, useCallback } from "react";
import { toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../toastStyles.css';

import { ProductContext } from "../../context";
import { ActionContext } from "../../context";
import ProductCard from "./ProductCard";
import { createLoadingSkeletons } from '../../utils/LoadingSkeleton';

// Functional component to display a list of products
const ProductList = () => {

  const { products, loading, error } = useContext(ProductContext);
  const { selectedOrder, toggledItems, setToggledItems } = useContext(ActionContext);

  // Memoize sorted products based on selected order (ascending or descending)
  const sortedProducts = useMemo(() => {
    return selectedOrder
      ? [...products].sort((a, b) =>
          selectedOrder === "ascending" ? a.price - b.price : b.price - a.price
        )
      : products;
  }, [products, selectedOrder]);



  // Handler function to toggle product in the cart and show toast notifications
  const handleToggle = useCallback((productId, productTitle) => {
    setToggledItems((prev) => {
      const isToggled = prev.includes(productId);

      if (isToggled) {
        toast.info(`${productTitle} Removed From Cart`, {
          progressClassName: "red-progress",
          autoClose: 1500,
          transition: Slide,
          position: "bottom-right"
        });

        return prev.filter(id => id !== productId);
      } else {
        toast.success(`${productTitle} Added To Cart`, {
          progressClassName: "green-progress",
          autoClose: 1500,
          transition: Slide,
          position: "bottom-left"
        });

        return [...prev, productId];
      }
    });
  }, [setToggledItems]);




  // Loading state: display skeletons while products are loading
  if (loading.state) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {createLoadingSkeletons(20)} {/* Adjust the count of loading skeletons here */}
          </div>
        </div>
      </div>
    );
  }



  // Error handling: display error message if there is an error
  if (error) {
    return (
      <div className="bg-white p-4 text-red-600 text-center font-bold text-lg ">
        <p>{error.message || "Something went wrong. Please try again later 😑"}</p>
      </div>
    );
  }


  


  // No products found: display a message if the product list is empty
  if (sortedProducts.length === 0) {
    return (
      <div className="bg-white p-4 text-gray-600 text-center font-bold text-lg">
        <p>We Couldn't Find Any Products Matching Your Search 😅 </p>
      </div>
    );
  }



  // Render the sorted product list
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id} // Unique key for each product
                product={product} // Passing product data to ProductCard
                toggledItems={toggledItems} // Passing toggledItems state
                handleToggle={handleToggle} // Passing toggle handler
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Memoize the component to optimize performance
export default React.memo(ProductList);
