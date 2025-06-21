
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WinnersSection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);  
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation(0.2);

  const winners = [
    {
      position: "Winner",
      icon: "🏆",
      gradient: "from-yellow-400 to-orange-500",
      glow: "shadow-yellow-400/50"
    },
    {
      position: "1st Runner-up", 
      icon: "🥈",
      gradient: "from-gray-300 to-gray-500",
      glow: "shadow-gray-400/50"
    },
    {
      position: "2nd Runner-up",
      icon: "🥉", 
      gradient: "from-orange-400 to-red-500",
      glow: "shadow-orange-400/50"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`flex items-center justify-center mb-16 transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          <Trophy className="w-12 h-12 text-green-400 mr-4" />
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Winners
          </h2>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {winners.map((winner, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-green-400/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-700 group hover:scale-105 ${winner.glow} hover:shadow-2xl ${
                gridInView ? `animate-rotate-in animate-delay-${index * 200 + 400}` : 'opacity-0 rotate-12 scale-75'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${winner.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg group-hover:shadow-xl transition-shadow ring-4 ring-green-400/20 group-hover:ring-green-400/40`}>
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {winner.icon} {winner.position}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
