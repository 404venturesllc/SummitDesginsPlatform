import svgPaths from "../imports/svg-y3twjurle0";

export default function BenefitCard2() {
  return (
    <div className="bg-white border border-[#b3b3b3] border-solid overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] w-full h-[340px] md:h-[232px]">
      <div className="px-5 pt-[19px]">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[#1e1e1e] text-[20px] text-center">{`AI Desk receptionist `}</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[15px] text-neutral-600 mt-[16px] text-center mx-auto max-w-[90%]">Automatically calls new leads in minutes, answers common questions, and books them straight into your calendar. No more chasing, no more forgotten follow ups.</p>
      </div>
      
      {/* Background squares */}
      <div className="absolute flex items-center justify-center left-[20%] size-[42px] top-[230px] md:top-[145px]" style={{ "--transform-inner-width": "34.6875", "--transform-inner-height": "34.6875" } as React.CSSProperties}>
        <div className="flex-none rotate-[346.129deg]">
          <div className="bg-gradient-to-b border-[#b3b3b3] border-[0.757px] border-solid from-[#f4f4f4] rounded-[7.567px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-[34.694px] to-[#e5e5e5]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[50%] translate-x-[-50%] size-[42.132px] top-[250px] md:top-[166px]" style={{ "--transform-inner-width": "40", "--transform-inner-height": "40" } as React.CSSProperties}>
        <div className="flex-none rotate-[3.141deg]">
          <div className="bg-gradient-to-b border-[#b3b3b3] border-[0.757px] border-solid from-[#f4f4f4] rounded-[7.567px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-[40px] to-[#e5e5e5]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center right-[20%] size-[35px] top-[225px] md:top-[140px]" style={{ "--transform-inner-width": "31.09375", "--transform-inner-height": "31.09375" } as React.CSSProperties}>
        <div className="flex-none rotate-[352.26deg]">
          <div className="bg-gradient-to-b border-[#b3b3b3] border-[0.757px] border-solid from-[#f4f4f4] rounded-[7.567px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-[31.096px] to-[#e5e5e5]" />
        </div>
      </div>
      
      {/* Icons positioned independently and centered */}
      <div className="absolute flex items-center justify-center left-[20%] size-[42px] top-[230px] md:top-[145px]">
        <div className="flex items-center justify-center size-full">
          <div className="rotate-[346.129deg]">
            <svg className="block h-[19.083px] w-[19.081px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p2460800} fill="#1E1E1E" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[50%] translate-x-[-50%] size-[42.132px] top-[250px] md:top-[166px]">
        <div className="flex items-center justify-center size-full">
          <div className="rotate-[3.141deg]">
            <svg className="block size-[20.463px]" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
              <path d={svgPaths.p29b78b00} fill="#1E1E1E" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center right-[20%] size-[35px] top-[225px] md:top-[140px]">
        <div className="flex items-center justify-center size-full">
          <div className="rotate-[352.26deg]">
            <svg className="block size-[16.325px]" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.p3b8cc800} fill="#1E1E1E" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
