import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';

const IdeathonLoader = () => {
  const [stage, setStage] = useState('off');
  const [showText, setShowText] = useState(false);
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('on'), 1000);
    const timer2 = setTimeout(() => {
      setStage('sparks');
      // Generate sparks that emanate outward from the bulb center
      const sparkArray = Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30) * Math.PI / 180; // 30 degrees apart
        const distance = 80 + Math.random() * 40; // Random distance from center
        return {
          id: i,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          delay: i * 100, // Sequential delay
          size: Math.random() * 2 + 1
        };
      });
      setSparks(sparkArray);
    }, 2000);
    const timer3 = setTimeout(() => setShowText(true), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
      {/* Background particles - matching your green theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-500 rounded opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-green-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-green-600 rounded opacity-30 animate-pulse"></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-green-500 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-40 right-20 w-8 h-8 bg-green-500 rounded opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-40 w-5 h-5 bg-green-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-green-600 rounded opacity-50 animate-bounce"></div>
        <div className="absolute top-16 right-1/4 w-2 h-2 bg-green-300 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute bottom-20 left-1/2 w-4 h-4 bg-green-500 rounded opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-12 w-3 h-3 bg-green-400 rounded-full opacity-45 animate-bounce"></div>
        <div className="absolute top-3/4 right-16 w-2 h-2 bg-green-600 rounded opacity-50 animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-green-500 rounded opacity-25 animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center z-10">
        {/* Lightbulb container */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Green glow effect when bulb is on */}
          {stage !== 'off' && (
            <div className="absolute w-48 h-48 bg-green-400 rounded-full opacity-15 blur-3xl animate-pulse"></div>
          )}
          
          {/* Sparks emanating outward from the bulb */}
          {stage === 'sparks' && sparks.map((spark) => (
            <div
              key={spark.id}
              className="absolute animate-ping"
              style={{
                transform: `translate(${spark.x}px, ${spark.y}px)`,
                animationDelay: `${spark.delay}ms`,
                animationDuration: '1200ms'
              }}
            >
              <div 
                className="bg-green-300 rounded-full opacity-80"
                style={{
                  width: `${spark.size * 2}px`,
                  height: `${spark.size * 2}px`
                }}
              />
            </div>
          ))}
          
          {/* Lightbulb icon */}
          <div className={`transform transition-all duration-1000 ${
            stage === 'off' ? 'scale-100' : 'scale-110'
          }`}>
            <Lightbulb 
              size={120} 
              className={`transition-colors duration-1000 ${
                stage === 'off' 
                  ? 'text-gray-500' 
                  : 'text-green-400 filter drop-shadow-lg'
              }`}
            />
          </div>
        </div>

        {/* Text content */}
        {showText && (
          <div className={`text-center transition-all duration-1000 ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl font-bold text-green-400 mb-4 animate-pulse">
              Ideathon 2K25
            </h1>
            <p className="text-green-300 text-xl font-medium animate-pulse">
              Where ideas take flight and innovation begins
            </p>
          </div>
        )}
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

export default IdeathonLoader;
