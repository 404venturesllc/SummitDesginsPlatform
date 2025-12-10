import imgImage6 from "figma:asset/4feab96a2f115b9e65d2c8504235eff1c83ef069.png";

function Group() {
  return (
    <div className="absolute contents left-[19px] top-[194px]">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[20px] text-[11px] text-neutral-600 text-nowrap top-[195px] whitespace-pre">Learn more</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white border border-[#b3b3b3] border-solid overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-full">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-113.5px)] text-[#1e1e1e] text-[20px] text-center text-nowrap top-[19px] translate-x-[-50%] whitespace-pre">Boost show-up rates</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-216px)] text-[15px] text-neutral-600 top-[74px] w-[416px]">Track no-shows, send smart reminders, and spot which channels bring the people who actually show up.</p>
      <Group />
      <div className="absolute h-[242px] left-[121px] pointer-events-none rounded-[5px] top-[139px] w-[306px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-[110.93%] left-[-31.26%] max-w-none top-[-5.33%] w-[134.84%]" src={imgImage6} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 rounded-[5px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}