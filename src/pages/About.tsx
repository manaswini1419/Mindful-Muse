import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* About Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-6 text-center">About MindCompanion</h1>
            <div className="bg-card rounded-3xl shadow-card p-8 space-y-6">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 mx-auto text-primary animate-breathe mb-4" />
              </div>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                <strong>MindCompanion</strong> was created with a simple mission: to make mental wellness support 
                accessible, judgment-free, and available 24/7 for anyone who needs it.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                We understand that reaching out for help can be difficult. That's why we've built an AI-powered 
                companion that provides a safe, private space where you can express your thoughts and feelings 
                without fear of judgment.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                Our platform combines cutting-edge AI technology with evidence-based mental health practices to 
                offer you supportive conversations, mood tracking, personalized wellness tips, and self-care tools.
              </p>
              
              <div className="bg-primary/10 rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-foreground/90 italic">
                  "Remember: While MindCompanion provides valuable support, it is not a substitute for 
                  professional mental health care. If you're experiencing a crisis or need professional help, 
                  please reach out to a licensed therapist or counselor."
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Emergency Mental Health Resources</h2>
            <div className="space-y-4">
              <div className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-destructive">Crisis Hotlines</h3>
                    <ul className="space-y-2">
                      <li>
                        <strong>988 Suicide & Crisis Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-primary hover:underline">988</a> (24/7)
                      </li>
                      <li>
                        <strong>Crisis Text Line:</strong> Text HOME to{" "}
                        <a href="sms:741741" className="text-primary hover:underline">741741</a>
                      </li>
                      <li>
                        <strong>SAMHSA National Helpline:</strong>{" "}
                        <a href="tel:1-800-662-4357" className="text-primary hover:underline">1-800-662-HELP (4357)</a>
                      </li>
                      <li>
                        <strong>Trevor Project (LGBTQ+ Youth):</strong>{" "}
                        <a href="tel:1-866-488-7386" className="text-primary hover:underline">1-866-488-7386</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-soft p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Find a Therapist
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Psychology Today Therapist Directory</a></li>
                  <li>• <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BetterHelp Online Therapy</a></li>
                  <li>• <a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Talkspace</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-card rounded-3xl shadow-card p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
            <div className="space-y-4 text-center">
              <p className="text-muted-foreground">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="mailto:support@mindcompanion.ai" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="w-5 h-5" />
                  support@mindcompanion.ai
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center gradient-calm rounded-3xl p-8 shadow-card">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Wellness Journey?</h3>
            <p className="text-white/90 mb-6 text-lg">
              You don't have to face this alone. Let's take the first step together.
            </p>
            <Link to="/chat">
              <Button variant="glow" size="lg">
                Start Talking Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
