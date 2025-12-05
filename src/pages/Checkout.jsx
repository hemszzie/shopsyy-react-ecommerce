import { useState } from "react";

export default function Checkout({ cartItems, onOrderPlaced }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cartItems.length) return;

    const orderData = {
      ...form,
      totalAmount: total,
      orderId: Math.floor(Math.random() * 1_000_000_000),
      status: "Confirmed",
    };

    onOrderPlaced(orderData);
  };

  return (
    <main className="py-8">
      <div className="max-w-8xl mx-auto px-4 grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 card bg-base-100 shadow">
          <div className="card-body">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">First Name</label>
                  <input
                    id="firstName"
                    className="input input-bordered w-full"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="label">Last Name</label>
                  <input
                    id="lastName"
                    className="input input-bordered w-full"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="label">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  className="input input-bordered w-full"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="label">Email</label>
                <input
                  id="email"
                  type="email"
                  className="input input-bordered w-full"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="label">Address</label>
                <textarea
                  id="address"
                  rows="3"
                  className="textarea textarea-bordered w-full"
                  required
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block mt-4">
                Confirm Order
              </button>
            </form>
          </div>
        </section>

        <aside className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <ul className="space-y-2 mt-2">
              {cartItems.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between border-b pb-1"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold mt-4 border-t pt-3">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
