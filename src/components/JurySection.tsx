
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const JurySection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation(0.2);

  const juryMembers = [
    {
      name: "Apurva Gunnalle",
      title: "Technical Expert",
      icon: "👨‍💻",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      name: "Rushika Arvapalli", 
      title: "Innovation Lead",
      icon: "💡",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      name: "Palla Navya Sree",
      title: "Design Specialist", 
      icon: "🎨",
      gradient: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          Jury Members
        </h2>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {juryMembers.map((member, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-green-400/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-700 group hover:scale-105 ${
                gridInView ? `animate-zoom-in animate-delay-${index * 200 + 300}` : 'opacity-0 scale-75'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg group-hover:shadow-xl transition-shadow ring-4 ring-green-400/20 group-hover:ring-green-400/40`}>
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {member.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JurySection;
