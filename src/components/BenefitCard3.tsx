import svgPaths from "../imports/svg-ye7gj2j4tx";

export default function BenefitCard3() {
  return (
    <div className="bg-white border border-[#b3b3b3] border-solid overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] w-full h-[300px] md:h-[232px]">
      <div className="px-5 pt-[19px]">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[#1e1e1e] text-[20px] text-center mx-auto max-w-[192px]">Analytics Dashboard</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[15px] text-neutral-600 mt-[16px] text-center mx-auto max-w-[199px]">See calls, chats, and traffic in one place so you know what's working.</p>
      </div>
      
      {/* Background squares */}
      <div className="absolute flex items-center justify-center right-[32px] size-[34.987px] top-[205px] md:top-[166px]" style={{ "--transform-inner-width": "31.203125", "--transform-inner-height": "31.203125" } as React.CSSProperties}>
        <div className="flex-none rotate-[352.577deg]">
          <div className="bg-gradient-to-b border-[#b3b3b3] border-[0.757px] border-solid from-[#f4f4f4] rounded-[7.567px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-[31.216px] to-[#e5e5e5]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[32px] size-[27px] top-[185px] md:top-[146px]" style={{ "--transform-inner-width": "24.921875", "--transform-inner-height": "24.921875" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.993deg]">
          <div className="bg-gradient-to-b border-[#b3b3b3] border-[0.757px] border-solid from-[#f4f4f4] rounded-[7.567px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-[24.925px] to-[#e5e5e5]" />
        </div>
      </div>
      
      {/* Icons positioned independently and centered */}
      <div className="absolute flex items-center justify-center right-[32px] size-[34.987px] top-[205px] md:top-[166px]">
        <div className="flex items-center justify-center size-full">
          <div className="rotate-[352.577deg]">
            <svg className="block size-[17.973px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p2f3d8800} fill="#1E1E1E" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[32px] size-[27px] top-[185px] md:top-[146px]">
        <div className="flex items-center justify-center size-full">
          <div className="rotate-[4.993deg]">
            <svg className="block size-[15.578px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p6611900} fill="#1E1E1E" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
