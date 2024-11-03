import { useEffect, useRef, useCallback } from 'react';

function useDebounce(callback, delay) {
    const timeoutRef = useRef(null);

    // Cleanup timeout when component unmounts or delay changes
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [delay]);

    // Debounced function
    const debouncedCallback = useCallback((...args) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set a new timeout with the specified delay
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]); // Add callback and delay to dependencies

    return debouncedCallback;
}

export default useDebounce;
