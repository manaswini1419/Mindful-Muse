import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const affirmations = [
  "You are stronger than you think.",
  "Your feelings are valid and important.",
  "You're not alone in this journey.",
  "Taking care of yourself is not selfish.",
  "Progress, not perfection.",
  "You deserve peace and happiness.",
  "Small steps forward are still progress.",
  "Your mental health matters.",
  "You are worthy of love and care.",
  "Today is a new beginning.",
];

const DailyAffirmation = () => {
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    const today = new Date().getDate();
    setAffirmation(affirmations[today % affirmations.length]);
  }, []);

  return (
    <div className="gradient-calm rounded-3xl p-8 shadow-card">
      <div className="flex items-start gap-3">
        <Sparkles className="w-6 h-6 text-white mt-1 animate-pulse" />
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">Daily Affirmation</h3>
          <p className="text-white/90 text-xl font-light italic">{affirmation}</p>
        </div>
      </div>
    </div>
  );
};

export default DailyAffirmation;
