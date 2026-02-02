const images = ['/car1.jpg','/car2.jpg','/car3.jpg'];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {images.map((img,i)=>(
          <div key={i} className="rounded-2xl overflow-hidden">
            <img src={img} alt="Car detailing" className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </section>
  );
}
