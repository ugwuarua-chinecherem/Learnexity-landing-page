export default function CTASection({ setCurrentPage }) {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-900 py-20 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Transform Your Career?</h2>
        <button 
          onClick={() => setCurrentPage('signup')}
          className="bg-cyan-400 text-black font-bold text-2xl px-16 py-6 rounded-full hover:scale-110 transition shadow-2xl"
        >
          APPLY NOW
        </button>
      </div>
    </section>
  );
}