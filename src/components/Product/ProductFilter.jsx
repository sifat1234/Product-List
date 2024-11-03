import { useState, useContext } from "react";
import { ActionContext } from "../../context";

// Functional component for filtering products by category
export default function ProductFilter() {
  
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];
  const { selectedCategory, setSelectedCategory } = useContext(ActionContext);

  // Handle the selection of a category
  const handleSelect = (category) => {
    // Toggle category selection, if already selected, set to null
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  // Close the dropdown when the mouse leaves
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="filter-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on button click
        >
          Filter
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          id="filter-dropdown"
          onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves
        >
          <div className="py-1" role="none">
            {categories.map((category, index) => (
              <label
                key={index} // Unique key for each category label
                className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4"
                  id={`filter-option-${index}`} // Unique id for each checkbox
                  checked={selectedCategory === category} // Check if the category is selected
                  onChange={() => handleSelect(category)} // Handle category selection on checkbox change
                />
                <span className="ml-2">{category}</span> {/* Display category name */}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
