import svgPaths from "./svg-68ubozehcz";

function Group() {
  return (
    <div className="absolute contents left-[19px] top-[422px]">
      <div className="absolute border border-[#b3b3b3] border-solid h-[40px] left-[20px] rounded-[10px] top-[423px] w-[431px]" />
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[40px] text-[#a8a8a8] text-[15px] text-nowrap top-[432px] whitespace-pre">Ask Anything</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white border border-[#b3b3b3] border-solid overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-full">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-1/2 text-[#1e1e1e] text-[20px] text-center text-nowrap top-[19px] translate-x-[-50%] whitespace-pre">Chat with the website assistant</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[36px] leading-[normal] left-[calc(50%-0.5px)] text-[15px] text-center text-neutral-600 top-[65px] translate-x-[-50%] w-[325px]">See how the AI greets visitors, handles FAQs, and captures leads while you’re off doing real work.</p>
      <div className="absolute bg-[#e6e6e6] h-[50px] left-[19px] rounded-bl-[2px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] top-[149px] w-[371px]" />
      <div className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[36px] leading-[normal] left-[calc(50%-197px)] text-[13px] text-neutral-600 top-[156px] w-[331px]">
        <p className="mb-0">{`Hi! I'm here to help answer questions about Summit Designs. How can I assist you today?`}</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute bg-[#1e1e1e] h-[30px] left-[240px] rounded-bl-[10px] rounded-br-[2px] rounded-tl-[10px] rounded-tr-[10px] top-[219px] w-[210px]" />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+24px)] text-[13px] text-nowrap text-white top-[226px] whitespace-pre">What services do you offer?</p>
      <Group />
      <div className="absolute inset-[calc(90.44%-1px)_calc(8.66%-1px)_calc(5.94%-1px)_calc(86.96%-1px)]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 18">
          <path d={svgPaths.p1e389400} fill="var(--fill-0, #525252)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}