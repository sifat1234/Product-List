import { ProductContext } from '../context';
import { useProducts } from "../hooks";
import { useState, useMemo, useCallback } from 'react';
import { useDebounce } from "../hooks"; // Ensure this path is correct

const ProductProvider = ({ children }) => {
    const { products, loading, error } = useProducts();
    const [searchTerm, setSearchTerm] = useState(""); 
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); 

    
    const updateDebouncedSearchTerm = useDebounce((value) => {
        setDebouncedSearchTerm(value); // Update the debounced search term
    }, 1000);



    // This will be called on input change
    const handleSearchInputChange = useCallback((value) => {
        setSearchTerm(value); 
        updateDebouncedSearchTerm(value); 
    }, [updateDebouncedSearchTerm]);



    // Filter products based on the debounced search term
    const filteredProducts = useMemo(() => {
        if (!debouncedSearchTerm) return products;

        return products.filter((product) =>
            product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
    }, [products, debouncedSearchTerm]);


    

    return (
        <ProductContext.Provider value={{ 
            products: filteredProducts, 
            loading, 
            error, 
            
            searchTerm, 
            handleSearchInputChange 
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
