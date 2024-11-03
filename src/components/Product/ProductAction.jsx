import ProductCart from "./ProductCart";
import ProductFilter from "./ProductFilter";
import ProductSearch from "./ProductSearch";
import ProductSort from "./ProductSort";

export default function ProductAction() {
  return (
    <>
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
          New Arrivals
        </h1>
        <p className="mt-4 text-xl text-gray-500 text-center">
          Thoughtfully designed objects for the workspace, home, and travel.
        </p>
      </div>
      <div className="mt-10">
        <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          {/* <!-- Sort & Filter --> */}
          <div className="w-full">
            <ProductSort />

            <ProductFilter />
          </div>

          {/* <!-- Search and Cart --> */}
          <div className="flex gap-2 items-center">
            <ProductSearch />
            <ProductCart />
          </div>
        </div>
      </div>
    </>
  );
}
