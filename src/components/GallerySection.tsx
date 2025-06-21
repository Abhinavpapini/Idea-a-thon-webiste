
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GallerySection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: subtitleRef, isInView: subtitleInView } = useScrollAnimation(0.3);
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation(0.2);

  const images = [
    { id: 1, alt: "Participant presentation 1" },
    { id: 2, alt: "Participant presentation 2" },
    { id: 3, alt: "Participant presentation 3" },
    { id: 4, alt: "Participant presentation 4" }
  ];

  return (
    <section id="gallery-section" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">        
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent px-2 tracking-wide transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          A Glimpse of Last Year's Talents
        </h2>
        <p 
          ref={subtitleRef}
          className={`text-gray-400 text-center mb-16 text-lg transition-all duration-1000 ${
            subtitleInView ? 'animate-fade-in animate-delay-300' : 'opacity-0 translate-y-8'
          }`}
        >
          Witness the creativity and energy from our amazing participants of last year!
        </p>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {images.map((image, index) => (
            <Card 
              key={image.id}
              className={`bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-400/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-700 group hover:scale-105 cursor-pointer overflow-hidden ${
                gridInView ? `animate-flip-in animate-delay-${index * 150 + 200}` : 'opacity-0 rotateY-90'
              }`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-green-400 group-hover:text-green-300 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    <p className="text-sm">Presentation {image.id}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
