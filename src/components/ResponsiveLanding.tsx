import svgPaths from "../imports/svg-n00e215pp7";
import logoSvgPaths from "../imports/svg-puci8y41ai";
import card1SvgPaths from "../imports/svg-xzr8sdx1da";
import card2SvgPaths from "../imports/svg-lyraussgwn";
import BenefitCard1 from "./BenefitCard1";
import BenefitCard2 from "./BenefitCard2";
import BenefitCard3 from "./BenefitCard3";
import BenefitCard4 from "./BenefitCard4";
import BenefitCard5 from "./BenefitCard5";
import DemoCard1 from "./DemoCard1";
import DemoCard2 from "./DemoCard2";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";
import FadeInView from "./FadeInView";
import imgImage3 from "figma:asset/4feab96a2f115b9e65d2c8504235eff1c83ef069.png";
import imgFella1 from "figma:asset/b9f38d2bf87af1a186f331110448b42f8858cb5b.png";
import imgGoogleCalendarIcon2020Svg1 from "figma:asset/0c3625c684a56d4a6decc79ff57e8557db988677.png";
import imgFaceBodyRxBlack1 from "figma:asset/aae1b2c4a90d32af79405c3bfcb78514017a6f41.png";
import imgZoomIcon1 from "figma:asset/aa28125008f8e64b0762304c525ec3fd747c860f.png";
import img48445171 from "figma:asset/fbb88fc3a30307136a34656887c95adeb5b45c8c.png";
import imgMicrosoftOfficeTeamsLogoIcon1457261 from "figma:asset/ef655b09dedf319360cd300c0b0f8bfb5cceee26.png";
import imgSalesforceComLogoSvg1 from "figma:asset/5ecb5ad26c1929efca4e29020f69952b0aec9243.png";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function ResponsiveLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[linear-gradient(to_right,#f0f8ff_0%,white_20%,white_80%,#f0f8ff_100%)] min-h-screen w-full">
      {/* Header */}
      <header className="bg-white border border-[#b3b3b3] border-solid rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] mx-4 my-5 md:mx-5 lg:mx-5 p-4 md:p-5">
        <div className="max-w-[960px] mx-auto">
          {/* Desktop/Tablet Header */}
          <div className="hidden md:flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-[60px] h-[26px] relative">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 34">
                  <path clipRule="evenodd" d={logoSvgPaths.pc7edb00} fill="#1D1D1D" fillRule="evenodd" />
                </svg>
              </div>
              <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d]">
                Summit Designs
              </div>
            </a>
            
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
              <a href="#test-it-out" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px] flex items-center gap-1">
                Solutions
                <svg className="w-[6px] h-[9px]" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                  <path d={svgPaths.p3c147a00} fill="#1E1E1E" />
                </svg>
              </a>
              <a href="#wall-of-love" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px]">Results</a>
              <a href="#portfolio" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px]">Portfolio</a>
              <a href="#how-it-works" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px]">About</a>
            </nav>

            <a href="#contact" className="bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-6 py-2 flex items-center gap-2 hover:opacity-90 transition-opacity">
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[15px]">Get Started</span>
              <svg className="w-[7px] h-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                <path d={svgPaths.p334b0980} fill="#CCCCCC" />
              </svg>
            </a>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-[60px] h-[26px] relative">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 34">
                    <path clipRule="evenodd" d={logoSvgPaths.pc7edb00} fill="#1D1D1D" fillRule="evenodd" />
                  </svg>
                </div>
                <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d]">
                  Summit Designs
                </div>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-[#e6e6e6] flex flex-col gap-4"
              >
                <a
                  href="#test-it-out"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[15px] flex items-center gap-1 py-2"
                >
                  Solutions
                  <svg className="w-[6px] h-[9px]" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                    <path d={svgPaths.p3c147a00} fill="#1E1E1E" />
                  </svg>
                </a>
                <a
                  href="#wall-of-love"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[15px] py-2"
                >
                  Results
                </a>
                <a
                  href="#portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[15px] py-2"
                >
                  Portfolio
                </a>
                <a
                  href="#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[15px] py-2"
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-6 py-2 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-2"
                >
                  <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[15px]">Get Started</span>
                  <svg className="w-[7px] h-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                    <path d={svgPaths.p334b0980} fill="#CCCCCC" />
                  </svg>
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border border-[#b3b3b3] border-solid rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] mx-4 my-5 md:mx-5 custom-xl:mx-5 p-6 md:p-10 custom-xl:p-12 custom-xl:px-16 overflow-hidden">
        <div className="max-w-[1200px] custom-xl:max-w-full mx-auto">
          <div className="flex flex-col custom-xl:flex-row gap-8 custom-xl:gap-12 items-center custom-xl:items-start custom-xl:justify-between">
            <div className="flex-1 space-y-6 custom-xl:space-y-10 custom-xl:max-w-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-b from-[#f4f4f4] to-[#ededed] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex items-center gap-2 px-3 py-1"
              >
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-[5px] h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <circle cx="2.5" cy="2.5" fill="#1E1E1E" r="2.5" />
                  </svg>
                  <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[10px]">Limited spots left</span>
                </div>
                <svg className="w-[6px] h-[9px]" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                  <path d={svgPaths.p3c147a00} fill="#1E1E1E" />
                </svg>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d] text-3xl md:text-4xl custom-xl:text-[48px] leading-tight"
              >
                Turn your website into a booking engine
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-lg md:text-xl custom-xl:text-[24px] leading-normal"
              >
                Summit Designs creates high converting websites and follows up with your leads, answer questions, and book appointments straight into your calendar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#contact" className="bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-8 py-2.5 h-[40px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <div className="relative inset-0">
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
                  </div>
                  <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[15px]">Get Started</span>
                  <svg className="w-[7px] h-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                    <path d={svgPaths.p334b0980} fill="#CCCCCC" />
                  </svg>
                </a>

                <a href="#test-it-out" className="bg-gradient-to-b from-[#f4f4f4] to-[#f0f0f0] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-8 py-2.5 h-[40px] hover:opacity-90 transition-opacity relative flex items-center justify-center">
                  <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
                  <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[15px]">Watch Summit Peak in action</span>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex-shrink-0 w-full custom-xl:flex-shrink custom-xl:w-auto"
            >
              <div className="border border-[#b3b3b3] border-solid rounded-[17px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden w-full custom-xl:min-w-[400px] custom-xl:max-w-[45vw] h-auto custom-xl:min-h-[450px] custom-xl:max-h-[60vh]">
                <img alt="Summit Designs Dashboard" className="w-full h-full custom-xl:object-contain" src={imgImage3} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="mx-4 my-5 md:mx-5 lg:mx-5 py-6 md:py-8 lg:py-10 border-y border-[#e6e6e6]">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[15px] text-neutral-600 flex-shrink-0">
              We work with the products you already use
            </p>
            
            <div className="flex items-center gap-6 md:gap-8 flex-wrap md:flex-nowrap justify-center">
              <div className="flex flex-col items-center gap-2">
                <img src={imgGoogleCalendarIcon2020Svg1} alt="Google Calendar" className="h-[35px] w-[35px] object-contain" />
                <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] text-neutral-600">Calendar</span>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-[#e6e6e6]" />
              
              <div className="flex flex-col items-center gap-2">
                <div className="h-[35px] w-[35px] overflow-hidden flex items-center justify-center">
                  <img src={imgZoomIcon1} alt="Zoom" className="max-w-none h-full object-cover" style={{ width: 'auto' }} />
                </div>
                <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] text-neutral-600">Zoom</span>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-[#e6e6e6]" />
              
              <div className="flex flex-col items-center gap-2">
                <img src={img48445171} alt="Hubspot" className="h-[35px] w-[35px] object-contain" />
                <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] text-neutral-600">Hubspot</span>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-[#e6e6e6]" />
              
              <div className="flex flex-col items-center gap-2">
                <img src={imgMicrosoftOfficeTeamsLogoIcon1457261} alt="Teams" className="h-[35px] w-[35px] object-contain" />
                <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] text-neutral-600">Teams</span>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-[#e6e6e6]" />
              
              <div className="flex flex-col items-center gap-2">
                <div className="h-[35px] w-[35px] flex items-center justify-center">
                  <img src={imgSalesforceComLogoSvg1} alt="Salesforce" className="h-[25px] w-[35px] object-contain" />
                </div>
                <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] text-neutral-600">Salesforce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <FadeInView>
      <section id="how-it-works" className="mx-4 my-5 md:mx-5 lg:mx-5">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <div className="bg-gradient-to-b from-[#f4f4f4] to-[#e5e5e5] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex items-center gap-2 px-3 py-1 mb-6">
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
              </div>
              <svg className="w-[5px] h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                <circle cx="2.5" cy="2.5" fill="#1E1E1E" r="2.5" />
              </svg>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[10px]">How it works</span>
            </div>
            
            <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d] text-3xl md:text-4xl lg:text-[48px] leading-tight mb-6">
              With us, appointment scheduling is easy
            </h2>
            
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-lg md:text-[20px] max-w-[564px] mx-auto">
              Effortless scheduling for business and individuals, powerful solutions for fast-growing modern companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 - Plan your funnel & site */}
            <div className="bg-white border border-[#b3b3b3] border-solid rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 overflow-hidden h-[401px] flex flex-col relative">
              <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[20px] text-center mb-6">
                Plan your funnel & site
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[15px] text-neutral-600 text-center mb-8">
                We map your offer, pages, and booking flow so every click leads toward an appointment.
              </p>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-[212px] h-[196px] relative">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 197">
                    <g>
                      <g filter="url(#filter0_di_10_708)">
                        <rect fill="url(#paint0_linear_10_708)" height="24.5289" rx="7.56696" width="50.8098" x="73.5859" y="85.8511" />
                        <rect height="23.7722" rx="7.18862" stroke="#CCCCCC" strokeWidth="0.756696" width="50.0531" x="73.9643" y="86.2294" />
                      </g>
                      <path d={card1SvgPaths.p262a6980} stroke="#B3B3B3" strokeWidth="2" fill="none" />
                      <circle cx="98.5566" cy="97.6772" r="53.7519" stroke="#B3B3B3" strokeWidth="2" fill="none" />
                      <circle cx="98.555" cy="97.6771" r="75.6527" stroke="#B3B3B3" strokeWidth="2" fill="none" />
                      <g filter="url(#filter1_d_10_708)">
                        <rect fill="url(#paint1_linear_10_708)" height="30.6611" rx="7.56696" width="30.6611" x="29.7852" y="30.6611" />
                        <rect height="29.9044" rx="7.18862" stroke="#B3B3B3" strokeWidth="0.756696" width="29.9044" x="30.1635" y="31.0395" />
                      </g>
                      <path d={card1SvgPaths.p2cb7f080} fill="#1E1E1E" />
                      <g filter="url(#filter2_d_10_708)">
                        <rect fill="url(#paint2_linear_10_708)" height="30.6611" rx="7.56696" width="30.6611" x="181.34" y="82.3467" />
                        <rect height="29.9044" rx="7.18862" stroke="#B3B3B3" strokeWidth="0.756696" width="29.9044" x="181.718" y="82.725" />
                      </g>
                      <path d={card1SvgPaths.pee02b00} fill="#1E1E1E" />
                      <g filter="url(#filter3_d_10_708)">
                        <rect fill="url(#paint3_linear_10_708)" height="30.6611" rx="7.56696" width="30.6611" x="80.5977" y="136.661" />
                        <rect height="29.9044" rx="7.18862" stroke="#B3B3B3" strokeWidth="0.756696" width="29.9044" x="80.976" y="137.039" />
                      </g>
                      <path d={card1SvgPaths.p3ffeb600} fill="#1E1E1E" />
                      <path clipRule="evenodd" d={card1SvgPaths.p3037fd00} fill="#1D1D1D" fillRule="evenodd" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.5824" id="filter0_di_10_708" width="56.8633" x="70.5592" y="84.3377">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="1.51339" />
                        <feGaussianBlur stdDeviation="1.51339" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_708" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_708" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="0.756696" />
                        <feGaussianBlur stdDeviation="1.51339" />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                        <feBlend in2="shape" mode="normal" result="effect2_innerShadow_10_708" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.6611" id="filter1_d_10_708" width="38.6611" x="25.7852" y="28.6611">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_708" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_708" mode="normal" result="shape" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.6611" id="filter2_d_10_708" width="38.6611" x="177.34" y="80.3467">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_708" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_708" mode="normal" result="shape" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.6611" id="filter3_d_10_708" width="38.6611" x="76.5977" y="134.661">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_708" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_708" mode="normal" result="shape" />
                      </filter>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_708" x1="98.9908" x2="98.9908" y1="85.8511" y2="110.38">
                        <stop stopColor="#F4F4F4" />
                        <stop offset="1" stopColor="#E6E6E6" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_10_708" x1="45.1157" x2="45.1157" y1="30.6611" y2="61.3222">
                        <stop stopColor="#F4F4F4" />
                        <stop offset="1" stopColor="#E6E6E6" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_10_708" x1="196.67" x2="196.67" y1="82.3467" y2="113.008">
                        <stop stopColor="#F4F4F4" />
                        <stop offset="1" stopColor="#E6E6E6" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_10_708" x1="95.9282" x2="95.9282" y1="136.661" y2="167.322">
                        <stop stopColor="#F4F4F4" />
                        <stop offset="1" stopColor="#E6E6E6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 - Design the site */}
            <div className="bg-white border border-[#b3b3b3] border-solid rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 overflow-hidden h-[401px] flex flex-col relative">
              <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[20px] text-center mb-6">
                Design the site
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[15px] text-neutral-600 text-center mb-8">
                We build the website, connect your forms, and set up the AI to call, text, and follow up with every lead.
              </p>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-[274px] h-[223px] relative">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 274 223">
                    <g>
                      <rect height="223" width="274" />
                      <rect fill="url(#paint0_radial_10_721)" fillOpacity="0.68" height="223" width="274" />
                      <g filter="url(#filter0_d_10_721)">
                        <rect fill="url(#paint1_linear_10_721)" height="40" rx="7.56696" width="40" x="33" y="31" />
                        <rect height="39.2433" rx="7.18862" stroke="#B3B3B3" strokeWidth="0.756696" width="39.2433" x="33.3783" y="31.3783" />
                      </g>
                      <g filter="url(#filter1_d_10_721)">
                        <rect fill="url(#paint2_linear_10_721)" height="40" rx="7.56696" width="40" x="57" y="128" />
                        <rect height="39.2433" rx="7.18862" stroke="#B3B3B3" strokeWidth="0.756696" width="39.2433" x="57.3783" y="128.378" />
                      </g>
                      <g filter="url(#filter2_d_10_721)">
                        <rect fill="url(#paint3_linear_10_721)" height="40" rx="7.56696" width="40" x="206" y="51" />
                        <rect height="39.2433" rx="7.18862" stroke="#B3B3B3" strokeWidth="0.756696" width="39.2433" x="206.378" y="51.3783" />
                      </g>
                      <g filter="url(#filter3_d_10_721)">
                        <rect fill="url(#paint4_linear_10_721)" height="40" rx="7.56696" width="40" x="179" y="152" />
                        <rect height="39.2433" rx="7.18862" stroke="#B3B3B3" strokeWidth="0.756696" width="39.2433" x="179.378" y="152.378" />
                      </g>
                      <path d={card2SvgPaths.p273a7100} fill="#1E1E1E" />
                      <path d={card2SvgPaths.p1e42400} fill="#1E1E1E" />
                      <path d={card2SvgPaths.p6ea3400} fill="#1E1E1E" />
                      <path d={card2SvgPaths.p2531fe80} fill="#1E1E1E" />
                      <g filter="url(#filter4_d_10_721)">
                        <path d={card2SvgPaths.p1baab00} fill="#1E1E1E" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_10_721" width="48" x="29" y="29">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_721" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_721" mode="normal" result="shape" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter1_d_10_721" width="48" x="53" y="126">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_721" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_721" mode="normal" result="shape" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter2_d_10_721" width="48" x="202" y="49">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_721" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_721" mode="normal" result="shape" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter3_d_10_721" width="48" x="175" y="150">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_721" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_721" mode="normal" result="shape" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37" id="filter4_d_10_721" width="26" x="161" y="97">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_721" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_721" mode="normal" result="shape" />
                      </filter>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(137 111.5) rotate(90) scale(153.5 188.605)" gradientUnits="userSpaceOnUse" id="paint0_radial_10_721" r="1">
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                      </radialGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_10_721" x1="53" x2="53" y1="31" y2="71">
                        <stop stopColor="#F4F4F4" />
                        <stop offset="1" stopColor="#E6E6E6" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_10_721" x1="77" x2="77" y1="128" y2="168">
                        <stop stopColor="#F4F4F4" />
                        <stop offset="1" stopColor="#E6E6E6" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_10_721" x1="226" x2="226" y1="51" y2="91">
                        <stop stopColor="#F4F4F4" />
                        <stop offset="1" stopColor="#E6E6E6" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_10_721" x1="199" x2="199" y1="152" y2="192">
                        <stop stopColor="#F4F4F4" />
                        <stop offset="1" stopColor="#E6E6E6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3 - Launch, test, & optimize bookings */}
            <div className="bg-white border border-[#b3b3b3] border-solid rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 overflow-hidden h-[401px] flex flex-col relative">
              <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[20px] mb-6">
                Launch, test, & optimize bookings
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[15px] text-neutral-600 text-center mb-8">
                We go live, watch the calendar fill, and tweak copy, pages, and automations to increase show-up and close rates.
              </p>
              <div className="flex-1 flex items-center justify-center overflow-hidden relative">
                {/* Tilted dashboard images */}
                <div className="absolute" style={{ width: '287px', height: '228px', transform: 'rotate(-5.926deg) translateY(10px)' }}>
                  <div className="border border-[#b3b3b3] rounded-[5px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden w-full h-full">
                    <img src={imgImage3} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute" style={{ width: '287px', height: '228px', transform: 'rotate(-5.926deg) translateY(-10px)' }}>
                  <div className="border border-[#b3b3b3] rounded-[5px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden w-full h-full opacity-80">
                    <img src={imgImage3} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <a href="#contact" className="bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-8 py-2.5 h-[40px] inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
              </div>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[15px]">Get Started</span>
              <svg className="w-[7px] h-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                <path d={svgPaths.p334b0980} fill="#CCCCCC" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      </FadeInView>

      {/* Companies Section */}
      <section className="mx-4 my-5 md:mx-5 lg:mx-5 py-6 md:py-8 border-y border-[#e6e6e6]">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[15px] text-neutral-600 flex-shrink-0">
              Companies we work with
            </p>
            
            <div className="flex items-center gap-6 md:gap-8 flex-wrap md:flex-nowrap justify-center">
              <img src={imgFaceBodyRxBlack1} alt="Face Body RX" className="h-[35px] w-[99px] object-cover flex-shrink-0" />
              
              <div className="hidden md:block w-px h-12 bg-[#e6e6e6]" />
              
              <img src={imgFaceBodyRxBlack1} alt="Face Body RX" className="h-[35px] w-[99px] object-cover flex-shrink-0" />
              
              <div className="hidden md:block w-px h-12 bg-[#e6e6e6]" />
              
              <img src={imgFaceBodyRxBlack1} alt="Face Body RX" className="h-[35px] w-[99px] object-cover flex-shrink-0" />
              
              <div className="hidden md:block w-px h-12 bg-[#e6e6e6]" />
              
              <img src={imgFaceBodyRxBlack1} alt="Face Body RX" className="h-[35px] w-[99px] object-cover flex-shrink-0" />
              
              <div className="hidden md:block w-px h-12 bg-[#e6e6e6]" />
              
              <img src={imgFaceBodyRxBlack1} alt="Face Body RX" className="h-[35px] w-[99px] object-cover flex-shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <FadeInView>
      <section className="mx-4 my-5 md:mx-5 lg:mx-5">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <div className="bg-gradient-to-b from-[#f4f4f4] to-[#e5e5e5] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex items-center gap-2 px-3 py-1 mb-6">
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
              </div>
              <svg className="w-[5px] h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                <circle cx="2.5" cy="2.5" fill="#1E1E1E" r="2.5" />
              </svg>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[10px]">Benefits</span>
            </div>
            
            <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d] text-3xl md:text-4xl lg:text-[48px] leading-tight mb-6">
              Your AI employees and website, all in one dashboard
            </h2>
            
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-lg md:text-[20px] max-w-[564px] mx-auto">
              Track every conversation, booking, and click in a single platform  so you actually know what's working.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Smart Chatbots */}
            <div className="lg:col-span-1">
              <BenefitCard1 />
            </div>

            {/* AI Desk receptionist - WIDE */}
            <div className="md:col-span-2 lg:col-span-2">
              <BenefitCard2 />
            </div>

            {/* Analytics Dashboard */}
            <div className="lg:col-span-1">
              <BenefitCard3 />
            </div>

            {/* Boost show-up rates */}
            <div className="md:col-span-2 lg:col-span-2">
              <BenefitCard4 />
            </div>

            {/* One hub for your growth */}
            <div className="md:col-span-2 lg:col-span-2">
              <BenefitCard5 />
            </div>
          </div>
        </div>
      </section>
      </FadeInView>

      {/* Test It Out Section */}
      <section id="test-it-out" className="mx-4 my-5 md:mx-5 lg:mx-5">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <div className="bg-gradient-to-b from-[#f4f4f4] to-[#e5e5e5] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex items-center gap-2 px-3 py-1 mb-6">
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
              </div>
              <svg className="w-[5px] h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                <circle cx="2.5" cy="2.5" fill="#1E1E1E" r="2.5" />
              </svg>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[10px]">Test it out</span>
            </div>
            
            <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d] text-3xl md:text-4xl lg:text-[48px] leading-tight mb-6">
              Try the experience your leads get
            </h2>
            
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-lg md:text-[20px] max-w-[564px] mx-auto">
              Test the voice agent and chatbot, hear how they respond, and imagine them working for your business 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Demo Cards */}
            <DemoCard1 />
            <DemoCard2 />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}