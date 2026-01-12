import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-68ubozehcz";

interface Message {
  text: string;
  isUser: boolean;
  isTyping?: boolean; // For character-by-character typing effect
}

// Your n8n RAG chatbot webhook
const N8N_WEBHOOK_URL = "https://n8n.srv865926.hstgr.cloud/webhook-test/b88ed227-ab68-4af6-a284-0b1e196b0c80";

// Enhanced local responses for the chatbot
const getFallbackResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes("service") || message.includes("offer") || message.includes("do") || message.includes("what")) {
    return "Summit Designs specializes in creating high-converting websites with AI-powered scheduling and automation. We build booking engines that turn visitors into appointments automatically!";
  }
  
  if (message.includes("price") || message.includes("cost") || message.includes("pricing") || message.includes("fee") || message.includes("charge")) {
    return "Our pricing is customized based on your specific needs. I'd love to connect you with our team for a personalized quote. Would you like to schedule a consultation?";
  }
  
  if (message.includes("how") || message.includes("work") || message.includes("process")) {
    return "We follow a 3-step process: 1) Plan your funnel and site structure, 2) Design and build your website with AI integration, 3) Launch, test, and optimize for maximum bookings!";
  }
  
  if (message.includes("ai") || message.includes("bot") || message.includes("chat") || message.includes("assistant")) {
    return "Our AI agents can call, text, and follow up with leads 24/7. They answer questions, handle objections, and book appointments straight into your calendar - while you focus on your business!";
  }
  
  if (message.includes("appointment") || message.includes("book") || message.includes("schedule") || message.includes("calendar")) {
    return "Yes! Our websites are designed to be booking engines. The AI handles the entire scheduling process, integrates with your calendar, and even sends reminders to boost show-up rates.";
  }
  
  if (message.includes("contact") || message.includes("reach") || message.includes("email") || message.includes("phone")) {
    return "You can reach us through the contact form on our website. We typically respond within 24 hours and would love to discuss how we can transform your website!";
  }
  
  if (message.includes("hi") || message.includes("hello") || message.includes("hey") || message.includes("start") || message.includes("help")) {
    return "Hello! 👋 Great to meet you! I'm here to answer any questions about Summit Designs. What would you like to know about our website and AI services?";
  }
  
  if (message.includes("thank") || message.includes("thanks") || message.includes("great") || message.includes("good")) {
    return "You're very welcome! Is there anything else you'd like to know about Summit Designs and how we can help grow your business?";
  }
  
  if (message.includes("example") || message.includes("portfolio") || message.includes("client") || message.includes("work")) {
    return "We've created successful websites for healthcare providers, service businesses, and professional consultants. Our portfolio includes Face & Body RX and Your Integrative Health - both seeing significant increases in bookings after implementing our AI solutions.";
  }
  
  if (message.includes("time") || message.includes("long") || message.includes("take")) {
    return "Most of our website projects are completed within 3-4 weeks, depending on complexity. We work efficiently to get your booking engine up and running as quickly as possible while ensuring quality.";
  }
  
  if (message.includes("difference") || message.includes("unique") || message.includes("special") || message.includes("why")) {
    return "What makes us different is our focus on conversion. We don't just build beautiful websites - we create AI-powered booking engines that actively convert visitors into appointments, even when you're not available.";
  }
  
  // Default response
  return "That's a great question! I'd love to give you more detailed information. Would you like to schedule a call with our team, or is there something specific about our services I can help clarify?";
};

// Function to get AI response with typing effect
const getAIResponse = async (userMessage: string): Promise<string> => {
  try {
    // Simulate a short delay to make it feel more natural
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    // Use enhanced local responses
    return getFallbackResponse(userMessage);
    
    /* 
    // This code will work once you enable CORS on your n8n webhook
    // To enable CORS in n8n:
    // 1. Go to your n8n instance settings
    // 2. Add your website domain to the CORS allowed origins
    // 3. Or use a CORS proxy service
    
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response");
    }

    const data = await response.json();
    return data.response || data.message || data.output || data.text || getFallbackResponse(userMessage);
    */
    
  } catch (error) {
    console.error("Error getting response:", error);
    return getFallbackResponse(userMessage);
  }
};

// Animated message component with slide-in effect
function AnimatedMessage({ message, index, isNew }: { message: Message; index: number; isNew: boolean }) {
  const [visible, setVisible] = useState(!isNew);
  const [displayedText, setDisplayedText] = useState(message.isTyping ? "" : message.text);

  useEffect(() => {
    if (isNew) {
      // Trigger animation after a small delay
      const timer = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isNew]);

  // Character-by-character typing effect for AI messages
  useEffect(() => {
    if (message.isTyping && !message.isUser) {
      let currentIndex = 0;
      const text = message.text;
      setDisplayedText("");

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 20); // Speed of typing

      return () => clearInterval(typeInterval);
    } else {
      setDisplayedText(message.text);
    }
  }, [message.text, message.isTyping, message.isUser]);

  return (
    <div
      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0) scale(1)'
          : `translateY(10px) scale(0.95) translateX(${message.isUser ? '10px' : '-10px'})`,
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <div
        className={`${
          message.isUser
            ? 'bg-[#1e1e1e] rounded-bl-[10px] rounded-br-[2px] rounded-tl-[10px] rounded-tr-[10px] px-4 py-2 max-w-[70%] md:max-w-[210px]'
            : 'bg-[#e6e6e6] rounded-bl-[2px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] p-3 max-w-[90%] md:max-w-[371px]'
        }`}
        style={{
          boxShadow: visible ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <p className={`font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[13px] ${
          message.isUser ? 'text-white' : 'text-neutral-600'
        }`}>
          {displayedText}
          {message.isTyping && !message.isUser && displayedText.length < message.text.length && (
            <span
              className="inline-block w-[2px] ml-[1px]"
              style={{
                height: '14px',
                backgroundColor: '#525252',
                animation: 'blink 0.8s infinite',
              }}
            />
          )}
        </p>
      </div>
    </div>
  );
}

// Add CSS keyframes
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(30, 30, 30, 0); }
    50% { box-shadow: 0 0 0 4px rgba(30, 30, 30, 0.1); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  @keyframes fadeSlideIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;
if (!document.getElementById('democard2-animations')) {
  styleSheet.id = 'democard2-animations';
  document.head.appendChild(styleSheet);
}

export default function DemoCard2() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm here to help answer questions about Summit Designs. How can I assist you today?",
      isUser: false,
      isTyping: false
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [messageCount, setMessageCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add some example questions as suggestions
  const exampleQuestions = [
    "What services do you offer?",
    "How does your process work?",
    "What makes you different?",
    "Can I see some examples of your work?"
  ];
  
  // Function to display the AI response with a typing effect
  const displayResponseWithTypingEffect = async (response: string) => {
    setIsTyping(true);

    // Wait a bit before starting to type
    await new Promise(resolve => setTimeout(resolve, 500));

    // Add the AI response with typing animation enabled
    setMessages(prev => [...prev, { text: response, isUser: false, isTyping: true }]);
    setMessageCount(prev => prev + 1);
    setIsTyping(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inputValue.trim() || isSending) return;

    // Add user message with animation
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true, isTyping: false }]);
    setMessageCount(prev => prev + 1);
    setInputValue("");
    setIsSending(true);
    setIsTyping(true);

    try {
      // Get AI response
      const aiResponse = await getAIResponse(userMessage);
      
      // Display the response with typing effect
      await displayResponseWithTypingEffect(aiResponse);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: "Sorry, I'm having trouble responding right now. Please try again!",
        isUser: false,
        isTyping: true
      }]);
      setMessageCount(prev => prev + 1);
      setIsTyping(false);
    } finally {
      setIsSending(false);
    }
  };
  
  // Function to handle clicking an example question
  const handleExampleClick = (question: string) => {
    if (isSending) return;
    setInputValue(question);
  };

  return (
    <div className="bg-white border border-[#b3b3b3] border-solid overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] w-full min-h-[500px] flex flex-col">
      <div className="px-5 pt-[19px] pb-4">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[#1e1e1e] text-[20px] text-center">Chat with the website assistant</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[15px] text-center text-neutral-600 mt-[27px] mx-auto max-w-[325px]">See how the AI greets visitors, handles FAQs, and captures leads while you&apos;re off doing real work.</p>
      </div>
      
      <div className="flex-1 flex flex-col justify-between px-5 pb-6">
        <div className="flex-1 overflow-y-auto space-y-4 mt-8 max-h-[300px] overscroll-contain">
          {messages.map((message, index) => (
            <AnimatedMessage
              key={`${index}-${message.text.substring(0, 20)}`}
              message={message}
              index={index}
              isNew={index >= messageCount - 1 && index > 0}
            />
          ))}
          
          {isTyping && (
            <div
              className="flex justify-start"
              style={{
                animation: 'fadeSlideIn 0.3s ease-out',
              }}
            >
              <div
                className="bg-[#e6e6e6] rounded-bl-[2px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] p-3"
                style={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-neutral-600">Thinking</span>
                  <span className="flex gap-1">
                    <span
                      className="rounded-full"
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#6b7280',
                        animation: 'float 0.6s ease-in-out infinite',
                        animationDelay: '0ms',
                      }}
                    />
                    <span
                      className="rounded-full"
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#6b7280',
                        animation: 'float 0.6s ease-in-out infinite',
                        animationDelay: '150ms',
                      }}
                    />
                    <span
                      className="rounded-full"
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#6b7280',
                        animation: 'float 0.6s ease-in-out infinite',
                        animationDelay: '300ms',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Example questions with staggered animation */}
        {messages.length <= 2 && !isTyping && (
          <div className="mt-4 mb-4">
            <p
              className="text-sm text-gray-500 mb-2"
              style={{
                animation: 'fadeSlideIn 0.3s ease-out',
              }}
            >
              Try asking:
            </p>
            <div className="flex flex-wrap gap-2">
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(question)}
                  disabled={isSending}
                  className="text-xs text-gray-700 px-3 py-1.5 rounded-full transition-all hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: '#f3f4f6',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    animation: `scaleIn 0.4s ease-out ${index * 0.1}s both`,
                    cursor: isSending ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSending) {
                      e.currentTarget.style.backgroundColor = '#e5e7eb';
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                  }}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="mt-6">
          <div
            className="relative rounded-[10px] w-full max-w-[431px] mx-auto"
            style={{
              height: '40px',
              border: inputFocused ? '1.5px solid #1e1e1e' : '1px solid #b3b3b3',
              boxShadow: inputFocused ? '0 0 0 3px rgba(30, 30, 30, 0.1)' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              placeholder="Ask Anything"
              className="w-full h-full px-5 pr-12 bg-transparent font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[15px] text-[#1e1e1e] placeholder:text-[#a8a8a8] focus:outline-none rounded-[10px]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isSending}
              className="absolute disabled:opacity-40"
              style={{
                right: '16px',
                top: '50%',
                width: '21px',
                height: '18px',
                transform: `translateY(-50%) ${inputValue.trim() && !isSending ? 'scale(1.1)' : 'scale(1)'}`,
                transition: 'transform 0.2s ease, opacity 0.2s ease',
              }}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 21 18"
                style={{
                  transition: 'fill 0.2s ease',
                }}
              >
                <path d={svgPaths.p1e389400} fill={!inputValue.trim() || isSending ? "#a8a8a8" : "#1e1e1e"} id="Vector" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}