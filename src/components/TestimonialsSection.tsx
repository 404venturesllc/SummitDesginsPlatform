import svgPaths from "../imports/svg-njiod6albc";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useCallback, useState } from "react";
import VerticalSideLines from "./VerticalSideLines";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  initial: string;
  bgColor: string;
}

function TestimonialCard({ quote, name, role, initial, bgColor }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-[#b3b3b3] border-solid h-[200px] overflow-clip rounded-[15px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] w-[307px] flex-shrink-0 relative flex flex-col px-8 pt-6 pb-4">
      {/* Quote */}
      <div className="flex-1">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[#1e1e1e] text-[12px]">
          "{quote}"
        </p>
      </div>
      {/* Author info */}
      <div className="flex items-center gap-3 mt-4">
        <div
          className="size-[40px] min-w-[40px] min-h-[40px] aspect-square rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: bgColor }}
        >
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-white text-[16px]">
            {initial}
          </span>
        </div>
        <div className="flex flex-col">
          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] text-[#1e1e1e] text-[14px]">{name}</p>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.3] text-[12px] text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Our new website converts visitors into bookings. No more losing leads to missed calls.",
    name: "Inor",
    role: "Face and Body RX",
    initial: "I",
    bgColor: "#587FB2"
  },
  {
    quote: "Built my website from scratch and helped launch my business. Went from nothing to booking clients in weeks.",
    name: "Gio",
    role: "Health Coach",
    initial: "G",
    bgColor: "#1C45A6"
  },
  {
    quote: "Every lead gets contacted right away. My calendar fills up without me doing anything.",
    name: "Megan",
    role: "Your Integrative Health",
    initial: "M",
    bgColor: "#377EF8"
  },
  {
    quote: "Used to miss calls while grooming dogs. Now the AI handles everything and my schedule stays full.",
    name: "Pete",
    role: "Pet Grooming",
    initial: "P",
    bgColor: "#3779A2"
  }
];

// Card width (307px) + gap (20px) = 327px per card
const CARD_WIDTH = 327;
const CARD_COUNT = 4;
const TOTAL_WIDTH = CARD_WIDTH * CARD_COUNT;

const AUTO_SCROLL_INTERVAL = 4000; // 4 seconds between auto-scrolls

export default function TestimonialsSection() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  // Initialize scroll position to the middle set
  useEffect(() => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollLeft = TOTAL_WIDTH;
    }
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (testimonialsRef.current && !isScrollingRef.current) {
        testimonialsRef.current.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
      }
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle infinite scroll loop
  const handleScroll = useCallback(() => {
    if (!testimonialsRef.current || isScrollingRef.current) return;

    const { scrollLeft } = testimonialsRef.current;

    // If scrolled to the end (third set), jump to middle set
    if (scrollLeft >= TOTAL_WIDTH * 2) {
      isScrollingRef.current = true;
      testimonialsRef.current.scrollLeft = scrollLeft - TOTAL_WIDTH;
      setTimeout(() => { isScrollingRef.current = false; }, 50);
    }
    // If scrolled to the beginning (first set), jump to middle set
    else if (scrollLeft <= 0) {
      isScrollingRef.current = true;
      testimonialsRef.current.scrollLeft = scrollLeft + TOTAL_WIDTH;
      setTimeout(() => { isScrollingRef.current = false; }, 50);
    }
  }, []);

  useEffect(() => {
    const container = testimonialsRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const handleScrollLeft = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
    }
  };

  return (
    <section id="wall-of-love" className="mx-1 md:mx-2 lg:mx-2 relative" style={{ marginTop: '10px', marginBottom: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
      <VerticalSideLines />
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
            Our clients are our best ambassadors. Discover why we're the top choice for web design and AI scheduling.
          </p>

          <a href="#contact" className="bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-8 py-2.5 h-[40px] inline-flex items-center gap-2 hover:opacity-90 transition-opacity mb-12">
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
            </div>
            <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[15px]">Get Started</span>
            <svg className="w-[7px] h-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path d={svgPaths.p334b0980} fill="#CCCCCC" />
            </svg>
          </a>
        </div>

        {/* Testimonials Cards with CSS Mask Fade */}
        <div className="relative">
          {/* Testimonials container with mask for edge fade */}
          <div
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
            ref={testimonialsRef}
          >
            {/* First set (clone for infinite loop) */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`first-${i}`} {...t} />
            ))}
            {/* Second set (original) */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`second-${i}`} {...t} />
            ))}
            {/* Third set (clone for infinite loop) */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`third-${i}`} {...t} />
            ))}
          </div>

          {/* Scroll buttons */}
          <button
            className="absolute left-2 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-2 z-20"
            onClick={handleScrollLeft}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="absolute right-2 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-2 z-20"
            onClick={handleScrollRight}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
