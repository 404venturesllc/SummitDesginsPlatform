import logoSvgPaths from "../imports/svg-puci8y41ai";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#b3b3b3] border-solid mt-20">
      <div className="max-w-[960px] mx-auto px-4 md:px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-[25px] h-[25px]" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                <path d={logoSvgPaths.p3d6c3700} fill="#1E1E1E" />
                <path d={logoSvgPaths.p2fb27a00} fill="#1E1E1E" />
                <path d={logoSvgPaths.p30dd9680} fill="#1E1E1E" />
              </svg>
              <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e1e1e] text-[20px]">Summit</span>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] leading-relaxed">
              Revolutionizing web design with AI-powered scheduling and automation.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[15px] mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">Integrations</a>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">Demo</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[15px] mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e1e1e] text-[15px] mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e6e6e6] border-solid pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px]">
            © 2024 Summit Designs. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">
              Twitter
            </a>
            <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-neutral-600 text-[13px] hover:text-[#1e1e1e] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
