import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Wind, Heart, Sun, Coffee } from "lucide-react";
import wellnessIcon from "@/assets/wellness-icon.png";

const tips = [
  {
    icon: <Wind className="w-6 h-6" />,
    category: "Breathing Exercise",
    title: "4-7-8 Breathing Technique",
    description: "Inhale for 4 counts, hold for 7, exhale for 8. This calming technique helps reduce anxiety and promotes relaxation.",
    color: "bg-blue-400/20 text-blue-600",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    category: "Mindfulness",
    title: "5-Minute Meditation",
    description: "Find a quiet space, close your eyes, and focus on your breath. Let thoughts pass without judgment. Even 5 minutes makes a difference.",
    color: "bg-purple-400/20 text-purple-600",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    category: "Physical Wellness",
    title: "Morning Sunlight Exposure",
    description: "Get 10-15 minutes of natural sunlight in the morning to regulate your circadian rhythm and boost mood.",
    color: "bg-yellow-400/20 text-yellow-600",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    category: "Self-Care",
    title: "Gratitude Journaling",
    description: "Write down 3 things you're grateful for each day. This simple practice rewires your brain for positivity.",
    color: "bg-pink-400/20 text-pink-600",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    category: "Lifestyle",
    title: "Limit Caffeine After 2 PM",
    description: "Caffeine can disrupt sleep quality. Try herbal tea or water in the afternoon for better rest at night.",
    color: "bg-amber-400/20 text-amber-600",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    category: "Mental Health",
    title: "Set Healthy Boundaries",
    description: "It's okay to say no. Protecting your energy and time is essential for mental wellness.",
    color: "bg-teal-400/20 text-teal-600",
  },
];

const WellnessTips = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <img src={wellnessIcon} alt="Wellness Tips" className="w-20 h-20 animate-breathe" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Wellness Tips & Guidance</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Small, actionable steps to improve your mental and emotional well-being
            </p>
          </div>

          {/* Tips Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-smooth group"
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${tip.color}`}>
                  {tip.icon}
                  <span className="text-sm font-semibold">{tip.category}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>

          {/* AI Personalized Tips CTA */}
          <div className="gradient-calm rounded-3xl p-8 shadow-card text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-white animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4">Want Personalized Tips?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our AI can provide customized wellness advice based on your mood patterns and specific challenges.
            </p>
            <Button variant="glow" size="lg">
              Get AI-Powered Guidance
            </Button>
          </div>

          {/* Daily Practice Reminder */}
          <div className="mt-8 bg-accent/30 rounded-2xl p-6 text-center">
            <p className="text-foreground/80 italic">
              "Consistency is key. Small daily practices create lasting change. Start with just one tip today."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessTips;
