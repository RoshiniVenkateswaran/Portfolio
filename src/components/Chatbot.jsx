import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, X, Minimize2 } from 'lucide-react';
import { chatWithAI } from '../utils/api';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi there! I'm here to help you learn about Roshini. Feel free to ask me about her projects, experience, skills, or anything else you'd like to know. Try asking 'Tell me about Pawfect' or 'What are her skills?'",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatWithAI(userMessage);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "I'm having trouble processing that. Please try again!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
          className="fixed bottom-6 right-6 w-16 h-16 text-white rounded-full flex items-center justify-center shadow-xl z-50 hover:shadow-2xl transition-all group"
          style={{
            background: 'linear-gradient(135deg, #111827, #374151)',
            boxShadow: '0 20px 25px -5px rgba(17, 24, 39, 0.5), 0 10px 10px -5px rgba(17, 24, 39, 0.2)',
          }}
        >
          <Bot className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-6 right-6 w-96 bg-white backdrop-blur-md border-2 rounded-lg shadow-xl z-50 flex flex-col ${
              isMinimized ? 'h-16' : 'h-[500px]'
            } transition-all duration-300`}
            style={{ borderColor: 'rgba(31, 41, 55, 0.2)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'rgba(31, 41, 55, 0.1)' }}>
              <div className="flex items-center gap-2">
                <svg className="absolute w-0 h-0">
                  <defs>
                          <linearGradient id="chatbotHeaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#111827" />
                            <stop offset="100%" stopColor="#374151" />
                          </linearGradient>
                  </defs>
                </svg>
                <Bot className="w-5 h-5" style={{ stroke: 'url(#chatbotHeaderGradient)', fill: 'none' }} />
                <h3 className="font-bold gradient-text">Roshini_0x</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-gray-600 hover:gradient-text transition-all"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:gradient-text transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          msg.role === 'user'
                            ? 'text-white'
                            : 'bg-gray-50 text-gray-700 border'
                        }`}
                              style={msg.role === 'user' 
                                ? { background: 'linear-gradient(135deg, #111827, #374151)' }
                                : { borderColor: 'rgba(229, 231, 235, 0.5)' }
                              }
                      >
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-50 border rounded-lg p-3" style={{ borderColor: 'rgba(31, 41, 55, 0.2)' }}>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#6B7280' }} />
                          <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#9CA3AF', animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#6B7280', animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything..."
                      className="flex-1 bg-white border rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 text-sm"
                      style={{ 
                        borderColor: 'rgba(229, 231, 235, 0.5)',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#374151';
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(55, 65, 81, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(229, 231, 235, 0.5)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="px-4 py-2 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                              background: 'linear-gradient(135deg, #111827, #374151)',
                            }}
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
