import ShoppingCardSvg from '../svg/ShoppingCardSvg'

const ProductCard = ({ product, toggledItems, handleToggle }) => {
    return (
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
          <img
            src={product.image}
            alt={`Image of ${product.title}`}
            className="h-full w-full object-cover object-top lg:h-full lg:w-full bg-gray-100 transition-transform duration-300 ease-in-out transform group-hover:scale-105" // Add this line for zoom effect
          />
        </div>
        <div className="mt-4 px-3 pb-4">
          <div>
            <h3 className="text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        <div
          className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10 hover:ring-1 hover:ring-slate-700/20 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1"
          onClick={() => handleToggle(product.id, product.title)}
        >
          {toggledItems.includes(product.id) ? (
            <div className="flex px-3 py-2 justify-center">
             <ShoppingCardSvg />
              Remove From Cart
            </div>
          ) : (
            <div className="flex px-3 py-2 justify-center">
               <ShoppingCardSvg />
              Add To Cart
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  