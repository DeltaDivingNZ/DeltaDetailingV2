export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl">Delta Detailing</span>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#services" className="hover:text-[#0ea5e9]">Services</a>
          <a href="#packages" className="hover:text-[#0ea5e9]">Packages</a>
          <a href="#gallery" className="hover:text-[#0ea5e9]">Gallery</a>
          <a href="#contact" className="hover:text-[#0ea5e9]">Contact</a>
        </div>
      </div>
    </nav>
  );
}
