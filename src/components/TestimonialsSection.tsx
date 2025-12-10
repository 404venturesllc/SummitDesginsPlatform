import svgPaths from "../imports/svg-njiod6albc";
import imgFella1 from "figma:asset/b9f38d2bf87af1a186f331110448b42f8858cb5b.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

function TestimonialCard() {
  return (
    <div className="bg-white border border-[#b3b3b3] border-solid h-[232px] overflow-clip rounded-[15px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] w-[307px] flex-shrink-0 relative">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-134.5px)] text-[#1e1e1e] text-[20px] top-[19px] w-[267px]">{`"Just gave it a go and it's definitely the easiest meeting I've ever scheduled!"`}</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-81.5px)] text-[#1e1e1e] text-[15px] top-[172px] w-[71px]">John Pork</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-81.5px)] text-[13px] text-neutral-500 top-[191px] w-[131px]">Founder of Apple Inc.</p>
      <div className="absolute left-[19px] rounded-[10px] size-[42px] top-[169px]" data-name="fella 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-full left-[-7.64%] max-w-none top-0 w-[108.13%]" src={imgFella1} />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollLeft -= 300;
    }
  };

  const handleScrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollLeft += 300;
    }
  };

  return (
    <section id="wall-of-love" className="mx-4 my-5 md:mx-5 lg:mx-5">
      <div className="max-w-[960px] mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <div className="bg-gradient-to-b from-[#f4f4f4] to-[#e5e5e5] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex items-center gap-2 px-3 py-1 mb-6">
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
            </div>
            <svg className="w-[5px] h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <circle cx="2.5" cy="2.5" fill="#1E1E1E" r="2.5" />
            </svg>
            <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[10px]">Wall of love</span>
          </div>
          
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d] text-3xl md:text-4xl lg:text-[48px] leading-tight mb-6">
            Don't just take our word for it
          </h2>
          
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-lg md:text-[20px] max-w-[564px] mx-auto mb-8">
            Our users are our best ambassadors. Discover why we're the top choice for web design and AI scheduling.
          </p>

          <button className="bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-8 py-2.5 h-[40px] inline-flex items-center gap-2 hover:opacity-90 transition-opacity mb-12">
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
            </div>
            <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[15px]">Get Started</span>
            <svg className="w-[7px] h-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path d={svgPaths.p334b0980} fill="#CCCCCC" />
            </svg>
          </button>
        </div>

        {/* Testimonials Cards with Gradient Overlays */}
        <div className="relative">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 lg:w-[322px] bg-gradient-to-l from-[rgba(255,255,255,0)] to-90% to-white z-10 pointer-events-none" />
          
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 lg:w-[322px] z-10 pointer-events-none">
            <div className="h-full w-full rotate-180 scale-y-[-100%]">
              <div className="bg-gradient-to-l from-[rgba(255,255,255,0)] to-90% to-white h-full w-full" />
            </div>
          </div>

          {/* Testimonials container */}
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} ref={testimonialsRef}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>

          {/* Scroll buttons */}
          <button className="absolute left-2 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-2 z-20" onClick={handleScrollLeft}>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="absolute right-2 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-2 z-20" onClick={handleScrollRight}>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}