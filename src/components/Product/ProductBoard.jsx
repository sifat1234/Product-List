import ProductAction from "./ProductAction";
import ProductList from "./ProductList";

export default function ProductBoard() {
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <ProductAction />
        <ProductList />
      </div>
    </div>
  );
}
