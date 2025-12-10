import imgImage6 from "figma:asset/4feab96a2f115b9e65d2c8504235eff1c83ef069.png";

export default function BenefitCard4() {
  return (
    <div className="bg-white border border-[#b3b3b3] border-solid overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] w-full h-[370px] md:h-[232px]">
      <div className="px-5 pt-[19px]">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[#1e1e1e] text-[20px] text-center">Boost show-up rates</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[15px] text-neutral-600 mt-[16px] text-center mx-auto max-w-[90%]">Track no-shows, send smart reminders, and spot which channels bring the people who actually show up.</p>
      </div>
      <div className="absolute h-[140px] left-[50%] translate-x-[-50%] pointer-events-none rounded-[5px] top-[175px] md:top-[139px] w-[180px] md:w-[306px] md:h-[242px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-full w-full object-cover object-left" src={imgImage6} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 rounded-[5px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}
