
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DomainsSection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation(0.2);

  const domains = [
    { name: "Education", color: "bg-blue-500", icon: "🎓" },
    { name: "Health Care", color: "bg-red-500", icon: "🏥" },
    { name: "Smart Agriculture", color: "bg-green-500", icon: "🌱" },
    { name: "Sustainability", color: "bg-emerald-500", icon: "♻️" },
    { name: "Campus Automation", color: "bg-purple-500", icon: "🏫" },
    { name: "Technology", color: "bg-orange-500", icon: "💻" }
  ];

  return (
    <section id="domains-section" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">        
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent px-2 tracking-wide transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          Domains for Ideas
        </h2>
        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {domains.map((domain, index) => (
            <Card 
              key={index}
              className={`bg-gray-900/50 border-green-400/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-700 group hover:scale-105 cursor-pointer ${
                gridInView ? `animate-scale-in animate-delay-${index * 100 + 200}` : 'opacity-0 scale-75'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${domain.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg group-hover:shadow-xl transition-shadow`}>
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                  {domain.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
