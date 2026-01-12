import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import svgPaths from "../imports/svg-n00e215pp7";
import logoSvgPaths from "../imports/svg-puci8y41ai";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    websiteUrl: "",
    message: ""
  });

  // Web3Forms access key - form submissions will be sent to your email
  const WEB3FORMS_ACCESS_KEY = "f5699615-fa8c-45cf-bac6-5189d1d42f74";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.fullName,
          email: formData.email,
          business_name: formData.businessName,
          website_url: formData.websiteUrl,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.fullName}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.");
        setFormData({
          fullName: "",
          businessName: "",
          email: "",
          websiteUrl: "",
          message: ""
        });
      } else {
        setSubmitMessage("Oops! Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      setSubmitMessage("Oops! Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[linear-gradient(to_right,#f0f8ff_0%,white_20%,white_80%,#f0f8ff_100%)] min-h-screen w-full relative">
      {/* Vertical side lines are rendered by SectionDivider components */}
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
              <a href="#home" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px] flex items-center gap-1">
                Solutions
                <svg className="w-[6px] h-[9px]" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                  <path d={svgPaths.p3c147a00} fill="#1E1E1E" />
                </svg>
              </a>
              <a href="#home" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px]">Results</a>
              <a href="#portfolio" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px]">Portfolio</a>
              <a href="#home" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[13px]">About</a>
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
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1d1d1d] text-[15px] flex items-center gap-1 py-2"
                >
                  Solutions
                  <svg className="w-[6px] h-[9px]" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
                    <path d={svgPaths.p3c147a00} fill="#1E1E1E" />
                  </svg>
                </a>
                <a
                  href="#home"
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
                  href="#home"
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

      {/* Contact Form Section */}
      <section className="mx-4 my-5 md:mx-5 lg:mx-5">
        <div className="max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-12"
          >
            <div className="bg-gradient-to-b from-[#f4f4f4] to-[#e5e5e5] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex items-center gap-2 px-3 py-1 mb-6">
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
              </div>
              <svg className="w-[5px] h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                <circle cx="2.5" cy="2.5" fill="#1E1E1E" r="2.5" />
              </svg>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[10px]">Get Started</span>
            </div>
            
            <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1d1d1d] text-3xl md:text-4xl lg:text-[48px] leading-tight mb-6">
              Let's transform your website
            </h1>
            
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-lg md:text-[20px] max-w-[564px] mx-auto">
              Tell us about your business and we'll show you how Summit Designs can turn your website into a booking engine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-[#b3b3b3] border-solid rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 md:p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[15px] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-gradient-to-b from-[#f4f4f4] to-[#f0f0f0] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e1e1e] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#363636] transition-all"
                  placeholder="John Smith"
                />
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[15px] mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full bg-gradient-to-b from-[#f4f4f4] to-[#f0f0f0] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e1e1e] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#363636] transition-all"
                  placeholder="Acme Corporation"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[15px] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gradient-to-b from-[#f4f4f4] to-[#f0f0f0] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e1e1e] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#363636] transition-all"
                  placeholder="john@acmecorp.com"
                />
              </div>

              {/* Website URL (Optional) */}
              <div>
                <label htmlFor="websiteUrl" className="block font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[15px] mb-2">
                  Website URL <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-500">(Optional)</span>
                </label>
                <input
                  type="url"
                  id="websiteUrl"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className="w-full bg-gradient-to-b from-[#f4f4f4] to-[#f0f0f0] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e1e1e] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#363636] transition-all"
                  placeholder="https://acmecorp.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[15px] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gradient-to-b from-[#f4f4f4] to-[#f0f0f0] border border-[#cccccc] border-solid rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e1e1e] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#363636] transition-all resize-none"
                  placeholder="Tell us about your business and what you're looking to achieve..."
                />
              </div>

              {/* Success/Error Message */}
              {submitMessage && (
                <div className={`p-4 rounded-[10px] ${
                  submitMessage.includes("success") 
                    ? "bg-green-50 border border-green-200 text-green-800" 
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[15px]">
                    {submitMessage}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-b from-[#363636] to-[#1d1d1d] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-8 py-3 h-[48px] flex items-center justify-center gap-2 transition-opacity ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                  }`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_4px_0px_inset_rgba(255,255,255,0.25)]" />
                  </div>
                  <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[15px]">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  {!isSubmitting && (
                    <svg className="w-[7px] h-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                      <path d={svgPaths.p334b0980} fill="#CCCCCC" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[15px]">
              We typically respond within 24 hours. Looking forward to working with you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20"></div>
    </div>
  );
}