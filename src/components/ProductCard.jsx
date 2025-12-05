// src/components/ProductCard.jsx
export default function ProductCard({ product, onAddToCart }) {
  const handleClick = () => {
    onAddToCart?.(product);
  };

  return (
    <div className="relative card bg-base-100 shadow-md hover:shadow-xl transition-shadow transition-transform hover:scale-105 hover:shadow-x1 coursor-pointer">
      <figure className="px-4 pt-4">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl h-54 w-full object-cover object-center overflow-hidden"
        />
      </figure>

      {/* Floating cart button */}
      <button
        className="btn btn-circle btn-sm absolute top-3 right-3 bg-base-100/90"
        onClick={handleClick}
        title="Add to cart"
      >
        🛒
      </button>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-base md:text-lg">{product.name}</h2>
        <p className="text-lg font-semibold">₹{product.price}</p>
        <button className="btn btn-primary btn-block" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
