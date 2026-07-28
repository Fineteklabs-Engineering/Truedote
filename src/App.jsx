import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import './index.css';

const App = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HelmetProvider>
  );
};

export default App;