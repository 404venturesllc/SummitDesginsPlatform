import svgPaths from "../imports/svg-n00e215pp7";
import logoSvgPaths from "../imports/svg-puci8y41ai";
import Footer from "./Footer";
import FadeInView from "./FadeInView";

// Import your portfolio images
import portfolio1 from "../assets/portfolio-1.png";
import portfolio2 from "../assets/portfolio-2.png";
// Add portfolio3 when you have a third image:
// import portfolio3 from "../assets/portfolio-3.png";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Face & Body RX",
      description: "Face & Body RX provides advanced, customized aesthetic and wellness treatments to help clients look and feel their best.",
      image: portfolio1,
      url: "https://www.faceandbodyrx.com/"
    },
    {
      id: 2,
      title: "Your Integrative Health",
      description: "Your Integrative Health offers integrative and functional medicine treatments designed to uncover root causes and restore long-term wellness.",
      image: portfolio2,
      url: "https://www.yourintegrativehealth.com/"
    }
    // Add third item when you have portfolio-3.png:
    // {
    //   id: 3,
    //   title: "Health & Wellness Portal",
    //   description: "An intuitive appointment booking system for healthcare providers with seamless calendar integration.",
    //   image: portfolio3,
    //   url: "#"
    // }
  ];

  return (
    <div className="bg-[linear-gradient(to_right,#f0f8ff_0%,white_20%,white_80%,#f0f8ff_100%)] min-h-screen w-full">
      {/* Header */}
      <header className="bg-white border border-[#b3b3b3] border-solid rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] mx-4 my-5 md:mx-5 lg:mx-5 p-4 md:p-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-[960px] mx-auto">
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
            <button className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px] flex items-center gap-1">
              Solutions
              <svg className="w-[6px] h-[9px]" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                <path d={svgPaths.p3c147a00} fill="#1E1E1E" />
              </svg>
            </button>
            <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px]">Results</a>
            <a href="#portfolio" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px]">Portfolio</a>
            <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px]">About</a>
          </nav>

          <button className="bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-6 py-2 flex items-center gap-2">
            <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[15px]">Get Started</span>
            <svg className="w-[7px] h-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path d={svgPaths.p334b0980} fill="#CCCCCC" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-4 my-5 md:mx-5 lg:mx-5">
        <div className="max-w-[960px] mx-auto text-center">
          <div className="bg-gradient-to-b from-[#f4f4f4] to-[#e5e5e5] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex items-center gap-2 px-3 py-1 mb-6">
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
            </div>
            <svg className="w-[5px] h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <circle cx="2.5" cy="2.5" fill="#1E1E1E" r="2.5" />
            </svg>
            <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[10px]">Our Work</span>
          </div>
          
          <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d] text-3xl md:text-4xl lg:text-[48px] leading-tight mb-6">
            Portfolio
          </h1>
          
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-lg md:text-[20px] max-w-[564px] mx-auto mb-12">
            Explore our collection of high-converting websites designed to turn visitors into booked appointments.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <FadeInView>
      <section className="mx-4 my-5 md:mx-5 lg:mx-5 pb-10">
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#b3b3b3] border-solid rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                {/* Image Container */}
                <div className="relative w-full h-[240px] bg-gradient-to-b from-[#f4f4f4] to-[#e6e6e6] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[20px] mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[15px] text-neutral-600 mb-6 flex-1">
                    {item.description}
                  </p>

                  {/* Visit Site Button */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-6 py-2.5 h-[40px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
                    </div>
                    <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[15px]">
                      Visit Site
                    </span>
                    <svg className="w-[7px] h-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                      <path d={svgPaths.p334b0980} fill="#CCCCCC" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInView>

      {/* CTA Section */}
      <section className="mx-4 my-5 md:mx-5 lg:mx-5 pb-10">
        <div className="max-w-[960px] mx-auto">
          <div className="bg-white border border-[#b3b3b3] border-solid rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-8 md:p-12 text-center">
            <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d] text-2xl md:text-3xl lg:text-[36px] leading-tight mb-4">
              Ready to build your booking engine?
            </h2>
            
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-lg md:text-[18px] mb-8 max-w-[500px] mx-auto">
              Join these successful businesses and start converting more visitors into appointments.
            </p>

            <button className="bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-8 py-2.5 h-[40px] inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
              </div>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[15px]">
                Get Started
              </span>
              <svg className="w-[7px] h-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                <path d={svgPaths.p334b0980} fill="#CCCCCC" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}