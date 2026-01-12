import svgPaths from "../imports/svg-f9k1py2xa6";
import { useState, useEffect, useRef } from "react";
import { RetellWebClient } from "retell-client-js-sdk";

// Retell configuration
const RETELL_AGENT_ID = "agent_b9e56aa27f819e2d086b96f297";
const RETELL_API_KEY = "key_4242dfb26bb847a2ea1f9735b524";

// Call states
type CallState = "idle" | "connecting" | "active" | "ended" | "error";

// Waveform component with dynamic animation based on agent speaking
function WaveformDisplay({ isActive, isAgentSpeaking }: { isActive: boolean; isAgentSpeaking: boolean }) {
  const NUM_BARS = 19;

  // Create symmetric pattern: small on edges, tall in middle
  const getBaseHeights = () => Array(NUM_BARS).fill(0).map((_, i) => {
    const distFromCenter = Math.abs(i - (NUM_BARS - 1) / 2);
    const maxDist = (NUM_BARS - 1) / 2;
    // Heights range from 20px (edges) to 80px (center)
    return 20 + (1 - distFromCenter / maxDist) * 60;
  });

  const [heights, setHeights] = useState<number[]>(getBaseHeights);

  useEffect(() => {
    if (!isActive) {
      // Reset to static wave shape when not active
      setHeights(getBaseHeights());
      return;
    }

    const interval = setInterval(() => {
      setHeights(getBaseHeights().map((baseHeight, i) => {
        // Add randomness based on speaking state
        if (isAgentSpeaking) {
          // More dramatic animation when speaking
          const variation = (Math.random() - 0.5) * 50;
          return Math.max(15, Math.min(90, baseHeight + variation));
        } else {
          // Subtle breathing animation when listening
          const variation = (Math.random() - 0.5) * 20;
          return Math.max(15, baseHeight + variation);
        }
      }));
    }, 100);

    return () => clearInterval(interval);
  }, [isActive, isAgentSpeaking]);

  return (
    <div className="flex justify-center items-end w-full h-[100px]">
      {heights.map((height, index) => (
        <div
          key={index}
          className="rounded-full transition-all duration-100 ease-out"
          style={{
            width: '3px',
            height: `${height}px`,
            backgroundColor: '#1E1E1E',
            marginLeft: '3px',
            marginRight: '3px',
          }}
        />
      ))}
    </div>
  );
}

function MicrophoneIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex justify-center">
      <div className={`w-[60px] h-[42px] ${isActive ? 'scale-110' : ''}`}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 50">
          <g filter="url(#filter0_d_1_314)" id="Group 471">
            <path d={svgPaths.p15cee80} fill={isActive ? "#2563eb" : "#1E1E1E"} id="Vector" />
            <path d={svgPaths.p22ef9500} fill={isActive ? "#2563eb" : "#1E1E1E"} id="Vector_2" />
            <path d={svgPaths.p2eb65700} fill={isActive ? "#2563eb" : "#1E1E1E"} id="Vector_3" />
            <path d={svgPaths.p16051900} fill={isActive ? "#2563eb" : "#1E1E1E"} id="Vector_4" />
            <path d={svgPaths.p13acb980} fill="#454545" id="Vector_5" />
            <path d={svgPaths.p188c6a00} fill="#FDFDFC" id="Vector_6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50" id="filter0_d_1_314" width="69" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_314" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_314" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Create a singleton Retell client
const retellClient = new RetellWebClient();

export default function DemoCard1() {
  const [callState, setCallState] = useState<CallState>("idle");
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [transcript, setTranscript] = useState<string>("");

  useEffect(() => {
    // Set up event listeners
    retellClient.on("call_started", () => {
      console.log("Call started");
      setCallState("active");
    });

    retellClient.on("call_ended", () => {
      console.log("Call ended");
      setCallState("ended");
      setIsAgentSpeaking(false);
    });

    retellClient.on("agent_start_talking", () => {
      setIsAgentSpeaking(true);
    });

    retellClient.on("agent_stop_talking", () => {
      setIsAgentSpeaking(false);
    });

    retellClient.on("update", (update) => {
      // Update transcript if available
      if (update.transcript) {
        const transcriptText = update.transcript
          .map((t: { role: string; content: string }) => `${t.role}: ${t.content}`)
          .join('\n');
        setTranscript(transcriptText);
      }
    });

    retellClient.on("error", (error) => {
      console.error("Retell error:", error);
      setErrorMessage("An error occurred during the call. Please try again.");
      setCallState("error");
      retellClient.stopCall();
    });

    // Cleanup on unmount
    return () => {
      retellClient.stopCall();
    };
  }, []);

  const startCall = async () => {
    try {
      setCallState("connecting");
      setErrorMessage("");
      setTranscript("");

      // Create web call to get access token
      const response = await fetch("https://api.retellai.com/v2/create-web-call", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RETELL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: RETELL_AGENT_ID,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to create call: ${response.status}`);
      }

      const data = await response.json();

      // Start the call with the access token
      await retellClient.startCall({
        accessToken: data.access_token,
        sampleRate: 24000,
      });

    } catch (error) {
      console.error("Failed to start call:", error);
      setErrorMessage(error instanceof Error ? error.message : "Failed to start voice demo. Please try again.");
      setCallState("error");
    }
  };

  const endCall = () => {
    retellClient.stopCall();
    setCallState("idle");
    setIsAgentSpeaking(false);
  };

  const resetDemo = () => {
    setCallState("idle");
    setErrorMessage("");
    setTranscript("");
    setIsAgentSpeaking(false);
  };

  const getStatusText = () => {
    switch (callState) {
      case "connecting":
        return "Connecting...";
      case "active":
        return isAgentSpeaking ? "Agent is speaking..." : "Listening...";
      case "ended":
        return "Call ended";
      case "error":
        return "Connection error";
      default:
        return "";
    }
  };

  const isCallActive = callState === "active" || callState === "connecting";

  return (
    <div className="bg-white border border-[#b3b3b3] border-solid overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] w-full min-h-[500px] flex flex-col pb-8">
      <div className="px-5 pt-[19px] pb-4">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[#1e1e1e] text-[20px] text-center">Talk to the voice agent</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[15px] text-center text-neutral-600 mt-[26px] mx-auto max-w-[351px]">Speak to the AI like a real lead. Ask questions, change times, or throw it objections and hear how it responds.</p>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Fixed height container for mic icon */}
        <div className="flex items-center justify-center" style={{ height: '80px' }}>
          <MicrophoneIcon isActive={isCallActive} />
        </div>

        {/* Fixed height container for waveform */}
        <div className="flex items-center justify-center" style={{ height: '120px' }}>
          <WaveformDisplay isActive={isCallActive} isAgentSpeaking={isAgentSpeaking} />
        </div>

        {/* Fixed height container for status */}
        <div className="flex items-center justify-center" style={{ height: '50px' }}>
          {callState !== "idle" && (
            <div className="text-center">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px]" style={{ color: callState === "error" ? "#ef4444" : "#525252" }}>
                {getStatusText()}
              </p>
              {callState === "connecting" && (
                <div className="flex justify-center mt-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-gray-600"></div>
                </div>
              )}
            </div>
          )}
          {/* Error message */}
          {errorMessage && (
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[13px] px-5" style={{ color: "#ef4444" }}>
              {errorMessage}
            </p>
          )}
        </div>

        {/* Fixed height container for buttons */}
        <div className="flex items-center justify-center" style={{ height: '60px' }}>
          {callState === "idle" && (
            <button
              onClick={startCall}
              className="rounded-[10px] px-8 relative hover:opacity-90 transition-opacity"
              style={{ height: '40px', background: "linear-gradient(to bottom, #363636, #1d1d1d)", boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.25)" }}
            >
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[15px] text-white">Start voice demo</p>
            </button>
          )}

          {callState === "connecting" && (
            <button
              className="rounded-[10px] px-8 relative"
              style={{ height: '40px', backgroundColor: "#9ca3af", boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.25)" }}
              disabled
            >
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[15px] text-white">Connecting...</p>
            </button>
          )}

          {callState === "active" && (
            <button
              onClick={endCall}
              className="rounded-[10px] px-8 relative hover:opacity-90 transition-opacity"
              style={{ height: '40px', background: "linear-gradient(to bottom, #dc2626, #b91c1c)", boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.25)" }}
            >
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[15px] text-white">End call</p>
            </button>
          )}

          {(callState === "ended" || callState === "error") && (
            <button
              onClick={resetDemo}
              className="rounded-[10px] px-8 relative hover:opacity-90 transition-opacity"
              style={{ height: '40px', background: "linear-gradient(to bottom, #363636, #1d1d1d)", boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.25)" }}
            >
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[15px] text-white">Try again</p>
            </button>
          )}
        </div>

        {/* Fixed height container for hint */}
        <div className="flex items-center justify-center" style={{ height: '30px' }}>
          {callState === "idle" && (
            <p className="text-center text-[12px]" style={{ color: "#a3a3a3" }}>
              Microphone access required
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
