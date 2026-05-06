const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto mt-4 px-6">

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-4 flex justify-between items-center shadow-2xl">

          <h1 className="text-lg font-bold tracking-wider">
            Udit Dadhich
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#profiles" className="hover:text-white transition">
              Profiles
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;