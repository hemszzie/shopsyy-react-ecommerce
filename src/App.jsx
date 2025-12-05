import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Search from "./pages/Search";

function App() {
  // cart state (synced with localStorage)
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", String(cartCount));
  }, [cartItems, cartCount]);

  const [toast, setToast] = useState("");
  const navigate = useNavigate();

  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.name === product.name);
      if (existing) {
        return prev.map((p) =>
          p.name === product.name ? { ...p, quantity: p.quantity + qty } : p
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    setToast(`🛒 Added ${product.name} to cart!`);
    setTimeout(() => setToast(""), 1500);
  };

  const updateQuantity = (name, newQty) => {
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.name === name ? { ...p, quantity: Math.max(1, newQty) } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((p) => p.name !== name));
  };

  const handleSearch = (q) => {
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const handleOrderPlaced = (orderData) => {
    // Save order & clear cart
    localStorage.setItem("orderData", JSON.stringify(orderData));
    setCartItems([]);
    navigate("/order-confirmation");
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar cartCount={cartCount} onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route
          path="/products"
          element={<Products onAddToCart={addToCart} />}
        />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              cartCount={cartCount}
              onUpdateQty={updateQuantity}
              onRemove={removeFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} onOrderPlaced={handleOrderPlaced} />}
        />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/search" element={<Search onAddToCart={addToCart} />} />
      </Routes>

      <Footer />
      <ScrollToTop />

      {toast && (
        <div className="toast toast-end toast-bottom z-50">
          <div className="alert alert-success">
            <span>{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

