import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Navbar({ cartCount, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
  };

 const linkClass =
  "btn btn-ghost btn-sm normal-case hover:bg-base-200 rounded text-lg";


  return (
    <div className="navbar bg-base-100 shadow sticky top-0 z-20">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost normal-case text-2xl">
          ShopSyy
        </NavLink>
      </div>

      <div className="hidden md:flex gap-2 mr-4 text-xl">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/products" className={linkClass}>
          Products
        </NavLink>
        <NavLink to="/categories" className={linkClass}>
          Category
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>

      {/* Search + Cart */}
      <div className="flex items-center gap-2">
        <form
          onSubmit={handleSubmit}
          className="hidden sm:flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered input-sm w-40 md:w-56"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
         <button type="submit" className="btn btn-success btn-sm">
  <MagnifyingGlassIcon className="w-5 h-5" />
</button>

        </form>

        <NavLink to="/cart" className="btn btn-ghost btn-circle">
          <div className="indicator">
            {cartCount > 0 && (
              <span className="indicator-item badge badge-secondary text-xs">
                {cartCount}
              </span>
            )}
            <ShoppingCartIcon className="w-6 h-6" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
