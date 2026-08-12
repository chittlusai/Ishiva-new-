"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, User, UserCheck } from "lucide-react";
import { useUser } from "@/lib/userContext";
// Removed buggy useChat hook import

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  
  const { userProfile } = useUser(); // Using global context to be smart!

  // Initial greeting based on context
  const initialGreeting = userProfile?.name
    ? `Hi ${userProfile.name.split(" ")[0]}! I see you're building a ${userProfile.websiteType} for ${userProfile.businessName}. How can I help you scale today?`
    : "Hi there! I'm Ishiva, your AI assistant. Have questions about our services or pricing? Just ask!";

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Keep the greeting updated if the user logs in while the page is open
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ id: 'greeting', role: 'assistant', content: initialGreeting }]);
    }
  }, [userProfile, initialGreeting, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const streamResponse = async (newMessages) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      
      const assistantId = Date.now().toString();
      setMessages(prev => [...prev, { id: assistantId, role: 'assistant', content: "" }]);

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          
          // The AI SDK sends chunks like: 0:"text"
          // We need to parse this format if it's using AI SDK stream format
          const parts = chunk.split('\n').filter(Boolean);
          let textToAdd = "";
          
          for (const part of parts) {
            if (part.startsWith('0:')) {
              try {
                textToAdd += JSON.parse(part.slice(2));
              } catch (e) {
                // Ignore parse errors for partial chunks
              }
            }
          }

          if (textToAdd) {
            setMessages(prev => prev.map(m => 
              m.id === assistantId ? { ...m, content: m.content + textToAdd } : m
            ));
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: "Sorry, I am having trouble connecting to my servers right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (textToSubmit) => {
    const text = textToSubmit || input;
    if (!text.trim()) return;
    
    const userMsg = { id: Date.now().toString(), role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    
    setMessages(newMessages);
    setInput("");
    
    streamResponse(newMessages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  const handleSuggestionClick = (text) => {
    handleSend(text);
  };

  const suggestions = ["How much does a website cost?", "Who handles SEO?", "What tech do you use?"];

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="glass"
            style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000, width: 60, height: 60, borderRadius: "50%", border: "1px solid var(--color-neon-purple)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-neon-purple)", boxShadow: "0 0 30px rgba(10,17,40,0.3)" }}
            whileHover={{ scale: 1.1 }}
          >
            <MessageSquare size={26} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            className="glass-card"
            style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000, width: "calc(100vw - 48px)", maxWidth: 380, height: 500, borderRadius: 20, display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid rgba(10,17,40,0.3)", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}
          >
            {/* Header */}
            <div style={{ padding: "16px 20px", background: "linear-gradient(90deg, rgba(10,17,40,0.2), rgba(212,175,55,0.1))", borderBottom: "1px solid var(--color-border-glass)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-neon-green)", boxShadow: "0 0 10px var(--color-neon-green)" }} />
                <span style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-heading)", fontWeight: 600 }}>Ishiva AI <span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", fontWeight: 400 }}>Support</span></span>
                {userProfile && <UserCheck size={14} color="var(--color-neon-cyan)" style={{marginLeft: 4}} title={`Recognized: ${userProfile.name}`} />}
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "var(--color-text-primary)", cursor: "pointer", display: "flex" }}>
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div style={{ flexGrow: 1, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {messages.map((m) => (
                <div key={m.id} style={{ display: "flex", flexDirection: "column", alignItems: m.role === "user" ? "flex-end" : "flex-start", gap: 4 }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginLeft: 4, marginRight: 4 }}>
                    {m.role === "user" ? (userProfile?.name || "You") : "Ishiva AI"}
                  </span>
                  <div style={{ maxWidth: "85%", padding: "12px 16px", borderRadius: 16, fontSize: "0.9rem", lineHeight: 1.5, background: m.role === "user" ? "rgba(10,17,40,0.2)" : "rgba(10,17,40,0.04)", color: "var(--color-text-primary)", border: m.role === "user" ? "1px solid rgba(10,17,40,0.3)" : "1px solid var(--color-border-glass)", borderBottomRightRadius: m.role === "user" ? 4 : 16, borderBottomLeftRadius: m.role === "assistant" ? 4 : 16 }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginLeft: 4 }}>Ishiva AI</span>
                  <div style={{ padding: "12px 16px", borderRadius: 16, borderBottomLeftRadius: 4, background: "rgba(10,17,40,0.04)", border: "1px solid var(--color-border-glass)", display: "flex", gap: 6 }}>
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2 }} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-neon-purple)" }} />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-neon-purple)" }} />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-neon-purple)" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div style={{ padding: "0 20px 12px", display: "flex", gap: 8, overflowX: "auto" }}>
                {suggestions.map((s, i) => (
                  <button key={i} onClick={() => handleSuggestionClick(s)} style={{ padding: "6px 12px", borderRadius: 20, border: "1px solid var(--color-border-glass)", background: "rgba(255,255,255,0.03)", color: "var(--color-neon-cyan)", fontSize: "0.75rem", cursor: "pointer", whiteSpace: "nowrap" }}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div style={{ padding: "16px", borderTop: "1px solid var(--color-border-glass)", background: "rgba(250,249,246,0.9)" }}>
              <form id="chatbot-form" onSubmit={handleSubmit} style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  placeholder="Ask about our services..."
                  value={input || ""}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  style={{ width: "100%", padding: "12px 48px 12px 16px", borderRadius: 24, background: "rgba(10,17,40,0.02)", border: "1px solid var(--color-border-glass)", color: "var(--color-text-primary)", outline: "none", fontSize: "0.9rem" }}
                  onFocus={e => e.target.style.borderColor = "var(--color-neon-purple)"}
                  onBlur={e => e.target.style.borderColor = "var(--color-border-glass)"}
                />
                <button type="submit" style={{ position: "absolute", right: 12, background: "none", border: "none", color: (input || "").trim() ? "var(--color-neon-purple)" : "var(--color-text-muted)", cursor: (input || "").trim() ? "pointer" : "default", display: "flex", transition: "color 0.2s" }} disabled={!(input || "").trim() || isLoading}>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
