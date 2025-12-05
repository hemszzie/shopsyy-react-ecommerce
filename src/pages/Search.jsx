import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const PRODUCTS = [
  {
    id: 1,
    name: "Gaming",
    desc: "Ultimate gaming setup.",
    price: 999,
    image:
      "https://plus.unsplash.com/premium_photo-1687854992749-e15cba89631d?auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 2,
    name: "E-book",
    desc: "Digital learning e-book.",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1609895720459-394a6a8c99ed?auto=format&fit=crop&q=80&w=1074",
  },
  {
    id: 3,
    name: "Beanbag",
    desc: "Comfortable soft beanbag.",
    price: 1699,
    image:
      "https://plus.unsplash.com/premium_photo-1681980021035-5db5823c974b?auto=format&fit=crop&q=80&w=1974",
  },
  {
    id: 4,
    name: "Leather Jacket",
    desc: "Trendy leather jacket.",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 5,
    name: "Fashion Bags",
    desc: "FashionHolic Trendy bags.",
    price: 649,
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?auto=format&fit=crop&q=80&w=878",
  },
  {
    id: 6,
    name: "Hair Straighten",
    desc: "Time to make your hair look fab.",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1620331307581-1e7d27da7ab6?auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 7,
    name: "Dream catcher",
    desc: "Walls empty? Try decorating it now.",
    price: 399,
    image:
      "https://media.istockphoto.com/id/1316450754/photo/handmade-cotton-macrame-dream-catcher-on-white-wall-background-traditional-amulet-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZkMVeX8U6HPOPtaICJBplQYN9dzipEpzsi0x-HiXjRI=",
  },
  {
    id: 8,
    name: "Set of rings",
    desc: "Match the outfits with rings.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1640324227718-f997fe8e9478?auto=format&fit=crop&q=80&w=687",
  },
];

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Search({ onAddToCart }) {
  const query = useQuery().get("q")?.toLowerCase() || "";

  const filtered = query
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.desc.toLowerCase().includes(query)
      )
    : PRODUCTS;

  return (
    <main className="py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <MagnifyingGlassIcon className="w-6 h-6 text-primary" />
              <span>Search Results</span>
            </div>
          </h1>
          <p className="text-sm text-base-content/70">
            Showing results for{" "}
            <span className="font-semibold">
              "{query || "all products"}"
            </span>
          </p>
        </div>

        <div className="overflow-x-auto bg-base-100 shadow rounded-xl">
          <table className="table">
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((p, i) => (
                  <tr key={p.id}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-20 h-16 object-cover rounded"
                      />
                    </td>
                    <td>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-xs text-base-content/70">
                        {p.desc}
                      </div>
                    </td>
                    <td className="text-right font-semibold">
                      ₹{p.price}
                    </td>
                    <td className="text-right">
                      {onAddToCart && (
                        <button
                          className="btn btn-primary btn-xs"
                          onClick={() => onAddToCart(p)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-6">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
