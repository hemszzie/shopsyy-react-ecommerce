import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const showToast = (msg) => {
    const box = document.getElementById("contactToast");
    box.innerHTML = `
      <div class="alert alert-info shadow-lg">
        <span>${msg}</span>
      </div>
    `;
    setTimeout(() => (box.innerHTML = ""), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.msg) {
      showToast("Please fill all fields before submitting.");
      return;
    }

    showToast(`Thank you for contacting us, ${form.name}. We will get back to you soon.`);
    setForm({ name: "", email: "", msg: "" });
  };

  return (
    <main className="py-6">
      {/* Toast */}
      <div className="toast toast-end" id="contactToast"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>

        {/* Contact Info Blocks */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="border border-success rounded shadow text-center p-5">
            <PhoneIcon className="w-10 h-10 text-success mx-auto mb-2" />
            <h3 className="font-semibold">Let's Talk</h3>
            <p className="mt-1">
              <strong>Phone:</strong> +91 9876543210
            </p>
          </div>

          <div className="border border-success rounded shadow text-center p-5">
            <EnvelopeIcon className="w-10 h-10 text-success mx-auto mb-2" />
            <h3 className="font-semibold">Drop a Line</h3>
            <p className="mt-1">
              <strong>Email:</strong> shopsyyshop@gmail.com
            </p>
          </div>

          <div className="border border-success rounded shadow text-center p-5">
            <LifebuoyIcon className="w-10 h-10 text-success mx-auto mb-2" />
            <h3 className="font-semibold">24×7 Support</h3>
            <p className="mt-1">
              <strong>Customer:</strong> 1800 101 303
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-base-100 border shadow rounded-xl p-6">
          <h3 className="text-center mb-4 text-xl font-semibold">Get in Touch</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                id="name"
                className="input input-bordered w-full"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label">Email</label>
              <input
                id="email"
                type="email"
                className="input input-bordered w-full"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label">Message</label>
              <textarea
                id="msg"
                rows="4"
                className="textarea textarea-bordered w-full"
                value={form.msg}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-success w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
