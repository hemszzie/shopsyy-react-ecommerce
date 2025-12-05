import { Link } from "react-router-dom";

export default function Cart({ cartItems, cartCount, onUpdateQty, onRemove }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="py-10">
        <div className="max-w-xl mx-auto bg-base-100 shadow rounded-xl p-8 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty cart"
            className="w-28 mx-auto opacity-80 mb-4"
          />
          <h2 className="text-xl font-semibold text-base-content/80">
            Your cart is empty!
          </h2>
          <Link to="/products" className="btn btn-primary mt-4">
            Shop Now
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-4">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {/* Items */}
        <section className="md:col-span-2 bg-base-100 shadow rounded-xl p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-4">
            Cart <span className="text-sm font-normal">({cartCount} items)</span>
          </h1>
          <div className="space-y-4">
            {cartItems.map((item) => {
              const subTotal = item.price * item.quantity;
              return (
                <div
                  key={item.name}
                  className="flex flex-col md:flex-row gap-4 border-b pb-4 last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-40 h-32 object-cover rounded"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-base-content/60">
                          {item.category || "General"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className="btn btn-xs"
                          onClick={() =>
                            onUpdateQty(item.name, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span className="w-10 text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="btn btn-xs"
                          onClick={() =>
                            onUpdateQty(item.name, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <button
                        className="btn btn-ghost btn-xs text-error"
                        onClick={() => onRemove(item.name)}
                      >
                        🗑 Remove
                      </button>
                      <strong>₹{subTotal}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Summary */}
        <aside className="bg-base-100 shadow rounded-xl p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-2 text-sm">
            {cartItems.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-center border-b pb-2 last:border-b-0"
              >
                <span>
                  {item.name} <span className="text-xs">x{item.quantity}</span>
                </span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary btn-block mt-4">
            Go to Checkout
          </Link>
        </aside>
      </div>
    </main>
  );
}
