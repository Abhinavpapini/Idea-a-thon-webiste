
import { Button } from "@/components/ui/button";
import { Computer, Lightbulb, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.2);
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: subtitleRef, isInView: subtitleInView } = useScrollAnimation(0.3);
  const { ref: descRef, isInView: descInView } = useScrollAnimation(0.3);
  const { ref: buttonsRef, isInView: buttonsInView } = useScrollAnimation(0.3);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-6"
    >
      {/* Hero content */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto w-full">        
        <div 
          ref={titleRef}
          className={`flex items-center justify-center mb-8 transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          <Computer className="w-16 h-16 text-green-400 mr-6 animate-pulse" />  
                
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent px-3 tracking-wide whitespace-nowrap">
            Idea-A-Thon
          </h1>
          <Lightbulb className="w-16 h-16 text-green-400 animate-pulse" />  
        </div>

        <p 
          ref={subtitleRef}
          className={`text-2xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent px-5 tracking-wide transition-all duration-1000 ${
            subtitleInView ? 'animate-fade-in animate-delay-300' : 'opacity-0 translate-y-8'
          }`}
        >
          "Where ideas take flight and innovation begins."
        </p>

        <p 
          ref={descRef}
          className={`text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto leading-relaxed px-4 tracking-normal transition-all duration-1000 ${
            descInView ? 'animate-slide-up animate-delay-500' : 'opacity-0 translate-y-8'
          }`}
        >
          Unleash your imagination in the ultimate ideation challenge. Turn thoughts into powerful solutions that make an impact.
        </p>

        <div 
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row gap-10 justify-center items-center transition-all duration-1000 ${
            buttonsInView ? 'animate-zoom-in animate-delay-700' : 'opacity-0 scale-75'
          }`}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-7 text-xl font-semibold rounded-full transition-all duration-300 green-glow hover:green-glow-intense group shadow-md"
            onClick={() => scrollToSection('domains-section')}
          >
            <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
            Start Ideating
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-green-400 text-green-400 hover:bg-green-400/20 hover:text-green-300 hover:border-green-300 px-12 py-7 text-xl font-semibold rounded-full transition-all duration-300 shadow-md"
            onClick={() => scrollToSection('gallery-section')}
          >
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
