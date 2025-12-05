import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Leather Jacket",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=735",
  },
  {
    name: "E-book Reader",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1609895720459-394a6a8c99ed?auto=format&fit=crop&q=80&w=1074",
  },
  {
    name: "Gaming Headset",
    price: 999,
    image:
      "https://plus.unsplash.com/premium_photo-1687854992749-e15cba89631d?auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Skincare Product",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&q=80&w=1935",
  },
  {
    name: "Fashion Bags",
    price: 649,
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?auto=format&fit=crop&q=80&w=878",
  },
  {
    name: "Hair Straighten",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1620331307581-1e7d27da7ab6?auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Dream catcher",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1558634470-5d0d472657e6?auto=format&fit=crop&q=80&w=2071",
  },
  {
    name: "Set of Rings",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1640324227718-f997fe8e9478?auto=format&fit=crop&q=80&w=687",
  },
];

export default function Products({ onAddToCart }) {
  return (
    <main className="py-4 bg-base-200">
      <div className="max-w-8xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Our Products</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard
              key={p.name}
              product={p}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
