import imgImage4 from "figma:asset/4feab96a2f115b9e65d2c8504235eff1c83ef069.png";

function Group() {
  return (
    <div className="absolute contents left-[21.19px] top-[185px]">
      <div className="absolute flex h-[256.008px] items-center justify-center left-[35.06px] top-[186px] w-[309.227px]" style={{ "--transform-inner-width": "287", "--transform-inner-height": "228" } as React.CSSProperties}>
        <div className="flex-none rotate-[354.074deg]">
          <div className="h-[227.568px] pointer-events-none relative rounded-[5px] w-[287.269px]" data-name="image 4">
            <div className="absolute inset-0 overflow-hidden rounded-[5px]">
              <img alt="" className="absolute h-[110.93%] left-[-31.36%] max-w-none top-[-5.33%] w-[134.95%]" src={imgImage4} />
            </div>
            <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 rounded-[5px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[256.031px] items-center justify-center left-[22.19px] top-[204.74px] w-[309.441px]" style={{ "--transform-inner-width": "287", "--transform-inner-height": "228" } as React.CSSProperties}>
        <div className="flex-none rotate-[354.074deg]">
          <div className="h-[227.568px] pointer-events-none relative rounded-[5px] w-[287.484px]" data-name="image 5">
            <div className="absolute inset-0 overflow-hidden rounded-[5px]">
              <img alt="" className="absolute h-[110.93%] left-[-31.26%] max-w-none top-[-5.33%] w-[134.84%]" src={imgImage4} />
            </div>
            <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 rounded-[5px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white border border-[#b3b3b3] border-solid overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-full">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-131px)] text-[#1e1e1e] text-[20px] top-[19px] w-[280px]">{`Launch, test, & optimize bookings`}</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-131px)] text-[15px] text-neutral-600 top-[89px] w-[263px]">We go live, watch the calendar fill, and tweak copy, pages, and automations to increase show-up and close rates.</p>
      <Group />
    </div>
  );
}