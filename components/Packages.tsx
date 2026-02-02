export default function Packages() {
  return (
    <section id="packages" className="py-32 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Detailing Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/10 rounded-2xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Standard</h3>
            <p className="text-gray-400">Interior & exterior clean.</p>
          </div>
          <div className="p-8 border border-white/10 rounded-2xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-gray-400">Includes paint correction.</p>
          </div>
          <div className="p-8 border border-white/10 rounded-2xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Elite</h3>
            <p className="text-gray-400">Full detail + ceramic coating.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
