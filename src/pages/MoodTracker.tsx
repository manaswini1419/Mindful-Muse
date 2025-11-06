import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { Calendar } from "lucide-react";
import moodIcon from "@/assets/mood-icon.png";

const moods = [
  { emoji: "😊", label: "Great", color: "bg-green-400" },
  { emoji: "🙂", label: "Good", color: "bg-blue-400" },
  { emoji: "😐", label: "Okay", color: "bg-yellow-400" },
  { emoji: "😔", label: "Down", color: "bg-orange-400" },
  { emoji: "😢", label: "Struggling", color: "bg-red-400" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (selectedMood === null) return;
    // Here you would save to database
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setSelectedMood(null);
      setNote("");
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <img src={moodIcon} alt="Mood Tracker" className="w-20 h-20 animate-float" />
            </div>
            <h1 className="text-4xl font-bold mb-4">How Are You Feeling Today?</h1>
            <p className="text-xl text-muted-foreground">
              Track your emotions to discover patterns and celebrate progress
            </p>
          </div>

          <div className="bg-card rounded-3xl shadow-card p-8 mb-8">
            {/* Mood Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Select Your Mood</h2>
              <div className="grid grid-cols-5 gap-4">
                {moods.map((mood, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMood(index)}
                    className={`group relative rounded-2xl p-6 transition-smooth hover:scale-110 ${
                      selectedMood === index
                        ? "ring-4 ring-primary shadow-glow scale-110"
                        : "hover:shadow-card"
                    } ${mood.color}`}
                  >
                    <div className="text-5xl mb-2">{mood.emoji}</div>
                    <div className="text-sm font-semibold text-white">{mood.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Note Section */}
            {selectedMood !== null && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-semibold mb-3">Want to add a note?</h3>
                <Textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="What's contributing to this feeling? (Optional)"
                  className="mb-4 rounded-2xl border-2 min-h-[120px]"
                />
                <Button
                  onClick={handleSave}
                  variant={saved ? "glow" : "calm"}
                  size="lg"
                  className="w-full"
                  disabled={saved}
                >
                  {saved ? "✓ Saved!" : "Save Today's Mood"}
                </Button>
              </div>
            )}
          </div>

          {/* Mood History Preview */}
          <div className="bg-card rounded-3xl shadow-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Your Mood Journey</h2>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              <p className="mb-4">Start tracking your mood to see patterns over time</p>
              <p className="text-sm">Your mood history will appear here once you log your first entry</p>
            </div>
          </div>

          {/* Encouragement */}
          <div className="mt-8 text-center bg-primary/10 rounded-2xl p-6">
            <p className="text-foreground/80 italic">
              "Tracking your emotions helps you understand yourself better. Every feeling is valid, and recognizing them is the first step to wellness."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
