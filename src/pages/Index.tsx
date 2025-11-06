import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, BarChart3, Sparkles, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import DailyAffirmation from "@/components/DailyAffirmation";
import heroImage from "@/assets/hero-wellness.jpg";
import chatIcon from "@/assets/chat-icon.png";
import moodIcon from "@/assets/mood-icon.png";
import wellnessIcon from "@/assets/wellness-icon.png";

const Index = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "A Listening Companion",
      description: "Share what's on your mind with someone who truly listens, understands, and cares—without any judgment.",
      image: chatIcon,
      link: "/chat",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Track How You Feel",
      description: "Notice your emotions, honor them, and gently discover what patterns emerge in your inner world.",
      image: moodIcon,
      link: "/mood",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Gentle Guidance",
      description: "Find caring suggestions for finding peace, staying grounded, and nurturing your emotional well-being.",
      image: wellnessIcon,
      link: "/wellness",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-[slideUp_0.8s_ease-out]">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your Safe Space for Sharing
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-[slideUp_1.2s_ease-out]">
                Whatever you're feeling right now, it's okay. You don't have to go through it alone. 
                I'm here to listen, understand, and walk with you through every step of your journey.
              </p>
              <div className="flex flex-wrap gap-4 animate-[slideUp_1.4s_ease-out]">
                <Link to="/chat">
                  <Button variant="calm" size="lg" className="gap-2 hover:scale-105 transition-smooth shadow-card">
                    <Heart className="w-5 h-5" />
                    Talk to Me
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="glass hover:scale-105 transition-smooth">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-[scaleIn_1s_ease-out]">
              <div className="absolute inset-0 gradient-glow opacity-30 blur-3xl rounded-full animate-breathe"></div>
              <img
                src={heroImage}
                alt="Mental wellness illustration"
                className="relative rounded-3xl shadow-glow animate-float border-2 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Affirmation */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <DailyAffirmation />
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How I Can Help</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Small tools with a big heart, created to support you wherever you are in your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <div 
                  className="group glass-strong rounded-3xl p-8 shadow-soft hover:shadow-glow transition-smooth hover:scale-105 h-full"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/25 transition-smooth animate-breathe"></div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative w-20 h-20 mx-auto animate-float group-hover:scale-110 transition-smooth"
                    />
                  </div>
                  <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-smooth">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-smooth">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Help Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-strong border-2 border-destructive/30 rounded-3xl p-8 shadow-glow hover:scale-[1.02] transition-smooth">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-destructive">Feeling Overwhelmed Right Now?</h3>
                <p className="text-foreground/80 mb-4">
                  If you're in crisis or need urgent support, please know that trained professionals are ready to help you right away.
                </p>
                <div className="space-y-2 glass rounded-2xl p-4">
                  <p className="font-semibold">🇺🇸 National Suicide Prevention Lifeline: <a href="tel:988" className="text-primary hover:underline transition-smooth">988</a></p>
                  <p className="font-semibold">🇺🇸 Crisis Text Line: Text HOME to <a href="sms:741741" className="text-primary hover:underline transition-smooth">741741</a></p>
                  <p className="text-sm text-muted-foreground mt-4">
                    You deserve support. Reaching out takes courage, and you're worth it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
