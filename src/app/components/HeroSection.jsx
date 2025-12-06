export default function HeroSection({ setCurrentPage }) {
  return (
    <section className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.png')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-24">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-cyan-400 mb-6 leading-tight">
          UNLOCK YOUR FUTURE<br />
          WITH MENTORSHIP,<br />
          INTERNSHIP & CAREER<br />
          GROWTH SUPPORT
        </h1>
        <p className="text-white text-lg lg:text-2xl font-bold mb-12 max-w-4xl">
          Empowering young professionals with guidance, experience, and opportunities to succeed!
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button onClick={() => setCurrentPage('signup')} className="bg-white text-purple-600 font-bold text-lg px-10 py-5 rounded-full hover:scale-105 transition shadow-xl">
            Join Now
          </button>
          <button onClick={() => setCurrentPage('book-session')} className="bg-cyan-400 text-black font-bold text-lg px-10 py-5 rounded-full hover:scale-105 transition shadow-xl">
            Book Free Session
          </button>
          <button onClick={() => setCurrentPage('internships')} className="bg-purple-600 text-white font-bold text-lg px-10 py-5 rounded-full hover:scale-105 transition shadow-xl">
            Explore Internships
          </button>
        </div>
      </div>
    </section>
  );
}