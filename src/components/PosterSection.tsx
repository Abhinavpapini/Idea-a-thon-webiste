
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PosterSection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: posterRef, isInView: posterInView } = useScrollAnimation(0.3);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">        
        <h2 
          ref={titleRef}
          className={`text-4xl font-bold mb-12 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent px-2 tracking-wide transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          Event Poster Preview
        </h2>
        
        <div 
          ref={posterRef}
          className={`bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-2 border-green-400/30 rounded-lg p-8 backdrop-blur-sm hover:border-green-400/50 transition-all duration-700 ${
            posterInView ? 'animate-zoom-in animate-delay-300' : 'opacity-0 scale-75'
          }`}
        >
          <div className="aspect-[3/4] max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-green-400/20">
            <div className="text-center text-green-400">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-xl font-semibold">Idea-A-Thon Event Poster</p>
              <p className="text-sm text-gray-400 mt-2">Poster placeholder - Coming Soon!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosterSection;
