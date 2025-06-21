import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import DomainsSection from "@/components/DomainsSection";
import GallerySection from "@/components/GallerySection";
import JurySection from "@/components/JurySection";
import WinnersSection from "@/components/WinnersSection";
import PosterSection from "@/components/PosterSection";
import IdeathonLoader from "@/components/IdeathonLoader";
import { useState, useEffect } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for a minimum of 4 seconds (slightly longer than the loader animation)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <IdeathonLoader />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
          {/* Fixed background elements */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-emerald-900/20" />
            
            {/* Background particles - added for whole page */}
            <div className="absolute inset-0">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="space-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 6}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Enhanced cosmic bubbles with more quantity and variety */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-10 right-32 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-40 left-1/4 w-64 h-64 bg-green-400/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-60 right-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute top-80 left-1/3 w-56 h-56 bg-green-600/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
            <div className="absolute top-[120px] right-20 w-88 h-88 bg-cyan-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-[160px] left-10 w-72 h-72 bg-green-500/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.5s' }} />
            <div className="absolute top-[200px] right-1/4 w-60 h-60 bg-blue-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3.5s' }} />
            
            {/* Additional bubbles for more dynamic effect */}
            <div className="absolute top-[300px] left-1/2 w-48 h-48 bg-green-300/6 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-[350px] right-1/5 w-32 h-32 bg-cyan-400/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '4.5s' }} />
            <div className="absolute top-[400px] left-1/5 w-24 h-24 bg-green-500/10 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.2s' }} />
            <div className="absolute top-[450px] right-2/3 w-36 h-36 bg-blue-300/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2.8s' }} />
            <div className="absolute top-[500px] left-2/3 w-28 h-28 bg-cyan-300/10 rounded-full blur-md animate-pulse" style={{ animationDelay: '3.2s' }} />
            <div className="absolute top-[550px] right-1/2 w-40 h-40 bg-green-400/6 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4.8s' }} />
            
            {/* Floating bots and spheres distributed throughout */}
            <div className="absolute top-32 right-32 w-12 h-12 bg-green-400/20 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
            <div className="absolute top-64 left-64 w-8 h-8 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute top-[200px] left-32 w-16 h-16 bg-green-600/15 rounded-lg rotate-12 animate-bounce" style={{ animationDelay: '2.5s' }} />
            <div className="absolute top-[240px] right-64 w-10 h-10 bg-blue-500/25 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
            <div className="absolute top-[280px] left-16 w-6 h-6 bg-green-300/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-[320px] right-16 w-14 h-14 bg-cyan-400/15 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '3.5s' }} />
            <div className="absolute top-[360px] right-1/4 w-10 h-10 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[400px] left-1/4 w-12 h-12 bg-green-500/15 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '3.2s' }} />
            <div className="absolute top-[440px] right-1/2 w-8 h-8 bg-cyan-300/20 rounded-full animate-bounce" style={{ animationDelay: '1.8s' }} />
            <div className="absolute top-[480px] left-1/2 w-14 h-14 bg-blue-500/15 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '4.5s' }} />
            <div className="absolute top-[520px] right-40 w-9 h-9 bg-green-400/25 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }} />
            <div className="absolute top-[560px] left-40 w-11 h-11 bg-cyan-300/20 rounded-lg rotate-30 animate-pulse" style={{ animationDelay: '2.8s' }} />
          </div>
          
          {/* Content with relative positioning */}
          <div className="relative z-10">
            <HeroSection />
            <JourneySection />
            <DomainsSection />
            <GallerySection />
            {/* <JurySection /> */}
            {/* <WinnersSection /> */}
            <PosterSection />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
