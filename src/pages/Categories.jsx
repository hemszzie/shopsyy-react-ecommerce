const categories = [
  {
    title: "Women’s Fashion",
    desc: "Trendy tops, skirts, and accessories that define your unique style.",
    image:
      "https://plus.unsplash.com/premium_photo-1671198905435-20f8d166efb2?auto=format&fit=crop&q=80&w=1170",
  },
  {
    title: "Skincare Essentials",
    desc: "Glow naturally with organic skincare products designed for you.",
    image:
      "https://images.unsplash.com/photo-1760860992841-fb5b7b2ec05d?auto=format&fit=crop&q=80&w=880",
    badge: "new",
  },
  {
    title: "Haircare",
    desc: "Premium shampoos, conditioners, and hair serums to nourish your hair.",
    image:
      "https://images.unsplash.com/photo-1713181215534-3b46c62e2018?auto=format&fit=crop&q=80&w=1942",
    badge: "new",
  },
  {
    title: "Home Decor",
    desc: "Modern and artistic pieces to make your living space more elegant.",
    image:
      "https://images.unsplash.com/photo-1644682973669-c81e90336245?auto=format&fit=crop&q=80&w=1074",
    badge: "new",
  },
  {
    title: "Electronics",
    desc: "Find the latest gadgets, headphones, and tech accessories.",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1170",
    badge: "new",
  },
  {
    title: "Accessories",
    desc: "Jewelry, bags, and other accessories to complete your outfit.",
    image:
      "https://plus.unsplash.com/premium_photo-1670984076180-22a6c8f27f2b?auto=format&fit=crop&q=80&w=880",
  },
];

export default function Categories() {
  return (
    <main className="py-4 bg-base-200">
      <div className="max-w-8xl mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="text-sm md:text-base text-base-content/70">
            Explore our curated selection of product categories below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="card bg-base-100 shadow">
              <figure className="relative">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-64 object-cover"
                />
                {c.badge && (
                  <div className="badge badge-error badge-sm absolute top-1 right-1">
                    {c.badge}
                  </div>
                )}
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title justify-center">{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
