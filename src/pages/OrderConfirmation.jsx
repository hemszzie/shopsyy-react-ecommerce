import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function OrderConfirmation() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("orderData");
    if (saved) {
      setOrder(JSON.parse(saved));
    }
  }, []);

  if (!order) {
    return (
      <main className="py-10">
        <div className="max-w-xl mx-auto bg-base-100 shadow rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold mb-3">Order not found!</h2>
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-10">
      <div className="max-w-xl mx-auto bg-base-100 shadow rounded-xl p-8 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="Success"
          className="w-24 mx-auto mb-4"
        />

        <h1 className="text-2xl font-bold mb-2">
          Thank you, {order.firstName}!
        </h1>

        <p className="text-sm mb-2">
          A confirmation email has been sent to <b>{order.email}</b>
        </p>

        <p className="text-sm mb-1">
          <span className="font-semibold">Order No:</span> {order.orderId}
        </p>

        <p className="text-sm mb-4">
          <span className="font-semibold">Status:</span>{" "}
          <span className="badge badge-success">{order.status}</span>
        </p>

        <Link to="/" className="btn btn-primary btn-lg flex items-center gap-2">
        <ArrowLeftIcon className="w-5 h-5" />
         Return to Home
        </Link>

      </div>
    </main>
  );
}
