import ProductCard from "../components/ProductCard";

export default function Home({ onAddToCart }) {
  const latestProducts = [
    {
      name: "Gaming",
      price: 999,
      image:
        "https://plus.unsplash.com/premium_photo-1687854992749-e15cba89631d?auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "E-book",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1609895720459-394a6a8c99ed?auto=format&fit=crop&q=80&w=1074",
    },
    {
      name: "Beanbag",
      price: 1699,
      image:
        "https://plus.unsplash.com/premium_photo-1681980021035-5db5823c974b?auto=format&fit=crop&q=80&w=1974",
    },
    {
      name: "Leather Jacket",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=735",
    },
  ];

  return (
    <main className="py-5 bg-base-200 min-h-screen">
     <section className="max-w-full mx-auto px-4 mb-8">
  <div className="carousel w-full rounded-xl shadow overflow-hidden">

    {/* Slide 1 */}
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src="https://plus.unsplash.com/premium_photo-1756099779858-11ab55a8fb94?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-[420px] object-cover object-center rounded-xl"
        alt="Slide 1"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
        <a href="#slide3" className="btn btn-circle btn-sm">❮</a>
        <a href="#slide2" className="btn btn-circle btn-sm">❯</a>
      </div>
    </div>

    {/* Slide 2 */}
    <div id="slide2" className="carousel-item relative w-full">
      <img
        src="https://images.unsplash.com/photo-1636115305669-9096bffe87fd?auto=format&fit=crop&q=80&w=2072"
        className="w-full h-[420px] object-cover object-center rounded-xl"
        alt="Slide 2"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
        <a href="#slide1" className="btn btn-circle btn-sm">❮</a>
        <a href="#slide3" className="btn btn-circle btn-sm">❯</a>
      </div>
    </div>

    {/* Slide 3 */}
    <div id="slide3" className="carousel-item relative w-full">
      <img
        src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&q=80&w=1326"
        className="w-full h-[420px] object-cover object-center rounded-xl"
        alt="Slide 3"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
        <a href="#slide2" className="btn btn-circle btn-sm">❮</a>
        <a href="#slide1" className="btn btn-circle btn-sm">❯</a>
      </div>
    </div>
  </div>
</section>


      {/* Shop By Category */}
      <section className="max-w-8xl mx-auto px-4 mb-8">
        <h2 className="text-2xl font-bold mb-4">Shop By Category</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow transition-transform hover:scale-105 hover:shadow-x1 coursor-pointer">
            <figure>
              <img
                alt="Tops"
                src="https://images.unsplash.com/photo-1608739872077-21ddc15dc152?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body text-center text-xl">
              <h3 className="font-bold">Tops</h3>
              <p>Shop trendy and fashionable tops</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow transition-transform hover:scale-105 hover:shadow-x1 coursor-pointer">
            <figure>
              <img
                alt="Hair"
                src="https://images.unsplash.com/photo-1601070846144-6be3aad73f7b"
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body text-center text-xl">
              <h3 className="font-bold">Hair Products</h3>
              <p>Time to care for your hair</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow transition-transform hover:scale-105 hover:shadow-x1 coursor-pointer">
            <figure>
              <img
                alt="Skincare"
                src="https://images.unsplash.com/photo-1718490953028-021d352b14fd?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body text-center text-xl">
              <h3 className="font-bold">Skincare Products</h3>
              <p>Time to glow & glam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="max-w-8xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Latest Products</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {latestProducts.map((p) => (
            <ProductCard
              key={p.name}
              product={p}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
