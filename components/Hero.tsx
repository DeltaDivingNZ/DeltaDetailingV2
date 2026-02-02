export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-30" />
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">Premium Automotive Detailing</h1>
        <p className="mt-6 text-gray-300">High-end car detailing for people who care.</p>
        <a href="#contact" className="inline-block mt-10 bg-[#0ea5e9] px-10 py-4 rounded-xl font-semibold text-black">Book Now</a>
      </div>
    </section>
  );
}
