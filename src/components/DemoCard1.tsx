import svgPaths from "../imports/svg-f9k1py2xa6";
import { useState, useEffect, useRef } from "react";

// Retell configuration
const RETELL_AGENT_ID = "agent_b9e56aa27f819e2d086b96f297";
const RETELL_SECRET_KEY = "key_4242dfb26bb847a2ea1f9735b524";

// Waveform component
function WaveformDisplay({ isActive }) {
  const waveformRef = useRef(null);
  
  useEffect(() => {
    if (!isActive || !waveformRef.current) return;
    
    const lines = waveformRef.current.querySelectorAll('line, path');
    let animationFrameId;
    
    const animate = () => {
      lines.forEach(line => {
        // Random height variation
        const height = Math.random() * 20 + 10;
        if (line.tagName === 'LINE') {
          const y1 = parseFloat(line.getAttribute('y1'));
          const y2 = parseFloat(line.getAttribute('y2'));
          const midpoint = (y1 + y2) / 2;
          const newY1 = midpoint - height;
          const newY2 = midpoint + height;
          line.setAttribute('y1', newY1);
          line.setAttribute('y2', newY2);
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);
  
  return (
    <div className="flex justify-center my-8">
      <div className="w-[253px] h-[150px] max-w-[80%]">
        <svg 
          ref={waveformRef}
          className="block size-full" 
          fill="none" 
          preserveAspectRatio="none" 
          viewBox="0 0 259 150"
        >
          <g id="Group 470">
            <line id="Line 56" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" x1="130.5" x2="130.5" y1="1.5" y2="148.5" />
            <line id="Line 57" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" x1="145.5" x2="145.5" y1="8.5" y2="140.5" />
            <line id="Line 58" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" x1="159.5" x2="159.5" y1="16.5" y2="133.5" />
            <line id="Line 59" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" x1="173.5" x2="173.5" y1="23.5" y2="125.5" />
            <line id="Line 60" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" x1="187.5" x2="187.5" y1="31.5" y2="118.5" />
            <line id="Line 61" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" x1="201.5" x2="201.5" y1="38.5" y2="110.5" />
            <line id="Line 62" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" x1="215.5" x2="215.5" y1="46.5" y2="103.5" />
            <line id="Line 63" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" x1="229.5" x2="229.5" y1="53.5" y2="95.5" />
            <path d="M242 61.5L242 88.5" id="Line 64" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" />
            <line id="Line 65" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" x1="257.5" x2="257.5" y1="68.5" y2="80.5" />
            <line id="Line 66" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" transform="matrix(-4.37114e-08 1 1 4.37114e-08 115 7)" x1="1.5" x2="133.5" y1="-1.5" y2="-1.5" />
            <line id="Line 67" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" transform="matrix(-4.37114e-08 1 1 4.37114e-08 101 15)" x1="1.5" x2="118.5" y1="-1.5" y2="-1.5" />
            <line id="Line 68" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" transform="matrix(-4.37114e-08 1 1 4.37114e-08 87 22)" x1="1.5" x2="103.5" y1="-1.5" y2="-1.5" />
            <line id="Line 69" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" transform="matrix(-4.37114e-08 1 1 4.37114e-08 73 30)" x1="1.5" x2="88.5" y1="-1.5" y2="-1.5" />
            <line id="Line 70" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" transform="matrix(-4.37114e-08 1 1 4.37114e-08 59 37)" x1="1.5" x2="73.5" y1="-1.5" y2="-1.5" />
            <line id="Line 71" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" transform="matrix(-4.37114e-08 1 1 4.37114e-08 45 45)" x1="1.5" x2="58.5" y1="-1.5" y2="-1.5" />
            <line id="Line 72" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" transform="matrix(-4.37114e-08 1 1 4.37114e-08 31 52)" x1="1.5" x2="43.5" y1="-1.5" y2="-1.5" />
            <path d="M17 61.5L17 88.5" id="Line 73" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" />
            <line id="Line 74" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="3" transform="matrix(-4.37114e-08 1 1 4.37114e-08 3 67)" x1="1.5" x2="13.5" y1="-1.5" y2="-1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MicrophoneIcon() {
  return (
    <div className="flex justify-center mb-6 mt-8">
      <div className="w-[60px] h-[42px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 50">
          <g filter="url(#filter0_d_1_314)" id="Group 471">
            <path d={svgPaths.p15cee80} fill="#1E1E1E" id="Vector" />
            <path d={svgPaths.p22ef9500} fill="#1E1E1E" id="Vector_2" />
            <path d={svgPaths.p2eb65700} fill="#1E1E1E" id="Vector_3" />
            <path d={svgPaths.p16051900} fill="#1E1E1E" id="Vector_4" />
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

function RetellEmbed({ isActive, onClose }) {
  const handleOpenRetellInNewTab = () => {
    // Open Retell in a new tab with the agent ID
    window.open(`https://dashboard.retellai.com/agents/${RETELL_AGENT_ID}`, '_blank');
    // Close the modal
    onClose();
  };
  
  if (!isActive) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white rounded-[15px] w-full max-w-[500px] max-h-[90vh] relative overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d]">Summit AI Voice Assistant</h3>
          <button 
            onClick={onClose}
            className="bg-white rounded-full p-1"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="p-6 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Voice Agent Ready</h4>
            <p className="text-gray-600 mb-6">
              Our AI voice agent is ready to speak with you. Click the button below to start the conversation.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={handleOpenRetellInNewTab}
                className="w-full bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] py-3 text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold hover:opacity-90 transition-opacity"
              >
                Open Voice Agent
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-200 rounded-[10px] py-3 text-[#1e1e1e] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 mt-4">
            <p>Note: You will be redirected to our voice agent platform.</p>
            <p>Please allow microphone access when prompted.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DemoCard1() {
  const [isRetellActive, setIsRetellActive] = useState(false);
  const [isWaveformActive, setIsWaveformActive] = useState(false);

  const handleStartVoiceDemo = () => {
    setIsRetellActive(true);
    setIsWaveformActive(true);
  };

  const handleCloseRetell = () => {
    setIsRetellActive(false);
    setIsWaveformActive(false);
  };

  return (
    <div className="bg-white border border-[#b3b3b3] border-solid overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] w-full min-h-[500px] flex flex-col pb-8">
      <div className="px-5 pt-[19px] pb-4">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[#1e1e1e] text-[20px] text-center">Talk to the voice agent</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[15px] text-center text-neutral-600 mt-[26px] mx-auto max-w-[351px]">Speak to the AI like a real lead. Ask questions, change times, or throw it objections and hear how it responds.</p>
      </div>
      <div className="flex-1 flex flex-col justify-center -mt-4">
        <MicrophoneIcon />
        <WaveformDisplay isActive={isWaveformActive} />
        <div className="flex justify-center mt-6">
          <button 
            onClick={handleStartVoiceDemo}
            className="bg-gradient-to-b from-[#363636] h-[40px] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] to-[#1d1d1d] px-8 relative hover:opacity-90 transition-opacity"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)] rounded-[10px]" />
            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[15px] text-white">Start voice demo</p>
          </button>
        </div>
      </div>
      
      {/* Retell Voice Agent */}
      <RetellEmbed isActive={isRetellActive} onClose={handleCloseRetell} />
    </div>
  );
}