import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { X, RefreshCcw } from "lucide-react";

function BotTester() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const BASE_URL = "https://portfolio-chatbot-2qzc.onrender.com";

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = { sender: "user", text: message };
    setChat((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/chat`, { message });
      const botMsg = {
        sender: "bot",
        text: res.data.reply || "Sorry, I didn’t catch that.",
      };
      setChat((prev) => [...prev, botMsg]);
    } catch {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
    setMessage("");
  };

  const handleReset = async () => {
    try {
      await axios.post(`${BASE_URL}/reset`);
      setChat([{ sender: "bot", text: "How can I assist you with Sagar’s portfolio?" }]);
    } catch {
      setChat((prev) => [...prev, { sender: "bot", text: "⚠️ Could not reset the session." }]);
    }
  };

  return (
    <>
      {/* Floating Bot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white p-1 rounded-full shadow-lg shadow-green-600/50 transition-transform hover:scale-110 z-50"
      >
        <img src="/raga.png" alt="Chat" className="w-10 h-10" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-20 right-6 w-80 sm:w-96 bg-white border border-green-400 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 transition-all duration-500 transform ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        style={{ height: "460px" }}
      >
        {/* Header */}
        <div className="bg-green-500 px-4 py-3 flex justify-between items-center rounded-t-2xl">
          <div className="flex items-center gap-2">
            <img src="/raga.png" alt="Bot" className="w-6 h-6" />
            <h2 className="font-semibold text-white text-lg">Raga</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              title="Reset"
              className="text-white hover:text-gray-200 transition"
            >
              <RefreshCcw size={18} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 bg-gray-50">
          {chat.length === 0 && (
            <div className="text-center text-gray-500 text-sm mt-10">
              👋 Hi! I'm <b>Raga</b>, Sagar’s AI assistant.
              <br />
              Ask me about his <b>skills, projects, or certifications.</b>
            </div>
          )}

          {chat.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
                msg.sender === "user"
                  ? "bg-green-500 text-white ml-auto rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="flex space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </span>
              <span>Raga is thinking...</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-green-400 bg-white flex items-center">
          <input
            type="text"
            placeholder="Ask about Sagar’s portfolio..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition text-white shadow-md"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default BotTester;
