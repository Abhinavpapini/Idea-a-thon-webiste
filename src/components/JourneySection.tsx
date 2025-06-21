
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const JourneySection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: subtitleRef, isInView: subtitleInView } = useScrollAnimation(0.3);
  const { ref: card1Ref, isInView: card1InView } = useScrollAnimation(0.3);
  const { ref: card2Ref, isInView: card2InView } = useScrollAnimation(0.3);

  const rounds = [
    {
      title: "Round 1: Theme Reveal",
      description: "Participants will receive a problem statement. Submissions should include a brief explanation and a conceptual solution.",
      gradient: "from-gray-800/80 to-gray-900/80",
      ref: card1Ref,
      inView: card1InView
    },
    {
      title: "Round 2: Final Presentation", 
      description: "Shortlisted teams will pitch their refined ideas to the jury, showcasing impact, innovation, and feasibility.",
      gradient: "from-gray-800/80 to-gray-900/80",
      ref: card2Ref,
      inView: card2InView
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">       
         <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-5 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent px-2 tracking-wide py-2 transition-all duration-1000 ${
            titleInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}
        >
          The Idea Journey
        </h2>
        <p 
          ref={subtitleRef}
          className={`text-gray-300 text-center mb-16 text-lg transition-all duration-1000 ${
            subtitleInView ? 'animate-slide-up animate-delay-300' : 'opacity-0 translate-y-8'
          }`}
        >
          Your path to creative excellence
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {rounds.map((round, index) => (
            <Card 
              key={index}
              ref={round.ref}
              className={`bg-gradient-to-br ${round.gradient} border-green-400/40 backdrop-blur-sm hover:border-green-400/60 transition-all duration-700 group hover:scale-105 ${
                round.inView ? `animate-slide-in-left animate-delay-${(index + 5)}00` : 'opacity-0 translate-x-10'
              }`}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                  {round.title}
                </h3>
                <p className="text-gray-100 leading-relaxed text-base">
                  {round.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
