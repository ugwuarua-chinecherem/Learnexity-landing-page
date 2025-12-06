import { useState } from 'react';

export default function TestimonialsSection({ setCurrentPage }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    { src: "/videos/testimonial-1.mp4", poster: "/images/thumb1.jpg" },
    { src: "/videos/testimonial-2.mp4", poster: "/images/thumb2.jpg" },
    { src: "/videos/testimonial-3.mp4", poster: "/images/thumb3.jpg" },
  ];

  return (
    <section className="bg-gradient-to-br from-purple-900 to-black py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-12">Hear From Our Students</h2>
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video">
            <video
              key={currentVideoIndex}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              poster={videos[currentVideoIndex].poster || "https://via.placeholder.com/800x450?text=Testimonial"}
            >
              <source src={videos[currentVideoIndex].src} type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-6">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentVideoIndex(i)}
              className={`w-4 h-4 rounded-full transition ${i === currentVideoIndex ? 'bg-cyan-400' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}