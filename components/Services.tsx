const services = [
  "Full Interior & Exterior Detail",
  "Paint Correction",
  "Ceramic Coatings",
  "Maintenance Details"
];

export default function Services() {
  return (
    <section id="services" className="py-32 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(s => (
          <div key={s} className="p-8 border border-white/10 rounded-2xl hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{s}</h3>
            <p className="text-gray-400">High-quality detailing to keep your car pristine.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
