import {
  CreditCardIcon,
  GlobeAltIcon,
  TruckIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

const features = [
  { icon: CreditCardIcon, label: "Credit Card Support" },
  { icon: GlobeAltIcon, label: "Online Order" },
  { icon: TruckIcon, label: "Fast Delivery" },
  { icon: GiftIcon, label: "Product with Gift" },
];

export default function About() {
  return (
    <main>
      <div className="max-w-8xl mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1644984875410-e11486d2b94f?auto=format&fit=crop&q=80&w=1142"
            alt="About ShopSyy"
            className="rounded-xl shadow-lg w-full"
          />
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="mb-3">
              We at <strong>ShopSyy</strong> aim to deliver quality products at
              affordable prices while providing an excellent online shopping
              experience. Our goal is to build trust and satisfaction for every
              customer through transparency and innovation.
            </p>
            <p className="mb-3">
              We ensure every product listed is verified and quality-checked
              before it reaches your doorstep. Our fast delivery, secure
              payment, and easy returns make us a reliable choice for your
              shopping needs.
            </p>
            <p>Thank you for being part of our journey.</p>
          </div>
        </div>

        {/* Simple testimonial strip */}
        <section className="mt-10 bg-info text-white rounded-xl py-8 px-4 text-center space-y-6">
          <div>
            <p className="max-w-2xl mx-auto">
              “ShopSyy made my online shopping experience smooth and satisfying.
              The delivery was quick and the products were exactly as
              described!”
            </p>
            <h4 className="font-semibold mt-2">Anna Deynah</h4>
            <p className="text-sm">Founder at ET Company</p>
          </div>
        </section>

        {/* Feature strip */}
         <div className="grid md:grid-cols-4 gap-4 mt-8">
            {features.map((item) => (
              <div
                 key={item.label}
                 className="flex flex-col items-center p-4 bg-base-100 shadow rounded-lg"
                  >
                  <item.icon className="w-10 h-10 text-primary mb-2" />
                    <p className="text-sm font-medium">{item.label}</p>
               </div>
                ))}
            </div>
         </div>
    </main>
  );
}
