import "./styles/output.css";
import Header from "./components/header/Header";
import Footer from './components/Footer';
import ProductBoard from "./components/Product/ProductBoard";
import { ProductProvider, ActionProvider } from "./providers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file

export default function App() {
  return (
    <ActionProvider>
      <ProductProvider>
        <Header />
        <ProductBoard />
        <Footer />
        <ToastContainer /> 
      </ProductProvider>
    </ActionProvider>
  );
}
