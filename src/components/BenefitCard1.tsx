import svgPaths from "../imports/svg-eqeocwh788";

export default function BenefitCard1() {
  return (
    <div className="bg-white border border-[#b3b3b3] border-solid overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] w-full h-[280px] md:h-[232px]">
      <div className="px-5 pt-[19px]">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[#1e1e1e] text-[20px] text-center">Smart Chatbots</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[15px] text-neutral-600 mt-[16px] text-center mx-auto max-w-[192px]">Chats with visitors 24/7 and captures leads.</p>
      </div>
      
      {/* Background squares */}
      <div className="absolute flex items-center justify-center left-[42px] size-[40px] top-[170px] md:top-[130px]" style={{ "--transform-inner-width": "31.984375", "--transform-inner-height": "31.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[17.154deg]">
          <div className="bg-gradient-to-b border-[#b3b3b3] border-[0.757px] border-solid from-[#f4f4f4] rounded-[7.567px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-[31.988px] to-[#e5e5e5]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center right-[42px] size-[32.721px] top-[165px] md:top-[125px]" style={{ "--transform-inner-width": "29", "--transform-inner-height": "29" } as React.CSSProperties}>
        <div className="flex-none rotate-[352.075deg]">
          <div className="bg-gradient-to-b border-[#b3b3b3] border-[0.757px] border-solid from-[#f4f4f4] rounded-[7.567px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-[29px] to-[#e5e5e5]" />
        </div>
      </div>
      
      {/* Icons positioned independently */}
      <div className="absolute flex items-center justify-center left-[42px] size-[40px] top-[170px] md:top-[130px]">
        <div className="flex items-center justify-center size-full">
          <div className="rotate-[17.154deg]">
            <svg className="block w-[18.615px] h-[19.193px]" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
              <path d={svgPaths.pa9e9500} fill="#1E1E1E" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center right-[42px] size-[32.721px] top-[165px] md:top-[125px]">
        <div className="flex items-center justify-center size-full">
          <div className="rotate-[352.075deg]">
            <svg className="block size-[15px]" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.pe91f000} fill="#1E1E1E" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
