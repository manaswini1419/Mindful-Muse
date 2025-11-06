import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { Send, Loader2 } from "lucide-react";
import chatIcon from "@/assets/chat-icon.png";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatCompanion = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to listen and support you. How are you feeling today? Remember, you're not alone in this journey. 💙",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/zen-chat`;
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!resp.ok || !resp.body) throw new Error("Failed to start stream");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;
      let assistantContent = "";

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages((prev) => {
                const lastMsg = prev[prev.length - 1];
                if (lastMsg?.role === "assistant") {
                  return prev.map((m, i) =>
                    i === prev.length - 1 ? { ...m, content: assistantContent } : m
                  );
                }
                return [...prev, { role: "assistant", content: assistantContent }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8 animate-[slideUp_0.6s_ease-out]">
            <div className="inline-block mb-4 relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-breathe"></div>
              <img src={chatIcon} alt="AI Companion" className="relative w-20 h-20 animate-float" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Your AI Wellness Companion</h1>
            <p className="text-xl text-muted-foreground">
              A safe, judgment-free space to express your thoughts and feelings
            </p>
          </div>

          {/* Chat Container */}
          <div className="glass-strong rounded-3xl shadow-glow overflow-hidden animate-[scaleIn_0.6s_ease-out]">
            {/* Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-[slideUp_0.4s_ease-out]`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-6 py-4 shadow-soft transition-smooth hover:shadow-card hover:scale-[1.02] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "glass border-primary/20"
                    }`}
                  >
                    <p className="leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start animate-[slideUp_0.4s_ease-out]">
                  <div className="glass border-primary/20 rounded-2xl px-6 py-4 shadow-soft">
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border/50 p-4 glass">
              <div className="flex gap-3">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Share what's on your mind... (Press Enter to send)"
                  className="resize-none rounded-2xl border-2 bg-background/50 backdrop-blur-sm focus:border-primary focus:bg-background transition-smooth"
                  rows={3}
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  variant="calm"
                  size="icon"
                  className="h-auto px-6 shrink-0 hover:scale-105 transition-smooth"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Note: This is a supportive AI companion, not a replacement for professional therapy.
              </p>
            </div>
          </div>

          {/* Supportive Message */}
          <div className="mt-8 text-center glass rounded-2xl p-6 shadow-soft animate-[slideUp_0.8s_ease-out]">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
              <div className="w-8 h-8 text-primary animate-pulse">💙</div>
            </div>
            <p className="text-foreground/80 italic">
              "Your mental health journey is unique. Take your time, be kind to yourself, and remember that seeking help is a sign of courage."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCompanion;
