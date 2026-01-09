import heroProduct from "@/assets/product-with-shield.png";
import rinsegardLogo from "@/assets/rinsegard-logo.png";
import bfdLogo from "@/assets/bfd-logo.png";
import { Check, Ban, Shield } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-radial from-blue-50/80 via-white to-slate-100/60">
      {/* Background Shield Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div 
          className="w-[900px] h-[900px] bg-contain bg-center bg-no-repeat" 
          style={{ backgroundImage: `url('/lovable-uploads/cb0aeae5-46f1-477c-a7b7-401df5ecf27b.png')` }} 
        />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        {/* Alcohol Free Badge - Absolute Top Left */}
        <div className="absolute top-4 left-4 md:left-8">
          <span className="bg-[#1F3A5F] text-white font-bold px-5 py-2 text-xs uppercase tracking-widest">
            Alcohol Free
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center pt-8">
          {/* Left Column - 60% (3/5) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Brand Header */}
            <div className="flex items-center gap-3">
              <img 
                src={rinsegardLogo} 
                alt="RinseGard" 
                className="h-14 md:h-18 w-auto" 
              />
              <Shield className="w-8 h-8 text-[#1F3A5F] stroke-1" />
            </div>

            {/* Product Title Group */}
            <div className="space-y-1">
              {/* Antiseptic with lines */}
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#F59D42]"></div>
                <span className="text-[#F59D42] uppercase tracking-[0.25em] text-sm font-light">
                  Antiseptic
                </span>
                <div className="h-px w-8 bg-[#F59D42]"></div>
              </div>
              
              {/* Oral Rinse - Large Orange */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F59D42] uppercase tracking-wide">
                Oral Rinse
              </h2>
            </div>

            {/* Features Row */}
            <div className="flex flex-wrap items-center gap-4 py-4">
              {/* Deep Cleaning */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-[#1F3A5F]">Deep Cleaning</p>
                  <p className="text-muted-foreground text-xs">Full Coverage</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-gray-300"></div>

              {/* 120ML */}
              <div className="text-center px-2">
                <p className="font-bold text-[#1F3A5F] text-xl">120ML</p>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-gray-300"></div>

              {/* No Further Dilution */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <Ban className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-[#1F3A5F]">No Further</p>
                  <p className="text-muted-foreground text-xs">Dilution Needed</p>
                </div>
              </div>
            </div>

            {/* Bottom Section: BFD + Ingredients + Malaysia 1st */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pt-4">
              {/* BFD Factor Logo */}
              <div className="flex-shrink-0">
                <img 
                  src={bfdLogo} 
                  alt="BFD Factor - Biofilms Dissolving Factor (Patented)" 
                  className="h-10 md:h-12 w-auto" 
                />
              </div>

              {/* Ingredients Formula */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-[#1F3A5F]">0.2%</span>
                  <span className="text-sm text-gray-700">Chlorhexidine</span>
                </div>
                <span className="text-2xl font-bold text-[#1F3A5F] my-1">+</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-[#1F3A5F]">0.1%</span>
                  <span className="text-sm text-gray-700">Cetylpyridinium Chloride</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-20 w-px bg-gray-300"></div>

              {/* Malaysia's 1st */}
              <div className="flex items-center gap-3">
                {/* Laurel Wreath with 1 */}
                <div className="relative w-16 h-16">
                  {/* Laurel wreath SVG */}
                  <svg viewBox="0 0 64 64" className="w-full h-full text-[#D4AF37]">
                    {/* Left laurel */}
                    <path 
                      d="M16 32c-2-8 2-16 8-20c-4 6-4 14 0 20c-4 6-4 14 0 20c-6-4-10-12-8-20z" 
                      fill="currentColor" 
                      opacity="0.9"
                    />
                    <path 
                      d="M20 32c-2-6 1-12 6-16c-3 5-3 11 0 16c-3 5-3 11 0 16c-5-4-8-10-6-16z" 
                      fill="currentColor" 
                      opacity="0.7"
                    />
                    {/* Right laurel */}
                    <path 
                      d="M48 32c2-8-2-16-8-20c4 6 4 14 0 20c4 6 4 14 0 20c6-4 10-12 8-20z" 
                      fill="currentColor" 
                      opacity="0.9"
                    />
                    <path 
                      d="M44 32c2-6-1-12-6-16c3 5 3 11 0 16c3 5 3 11 0 16c5-4 8-10 6-16z" 
                      fill="currentColor" 
                      opacity="0.7"
                    />
                    {/* Stars */}
                    <circle cx="32" cy="18" r="2" fill="currentColor" />
                    <circle cx="26" cy="20" r="1.5" fill="currentColor" opacity="0.7" />
                    <circle cx="38" cy="20" r="1.5" fill="currentColor" opacity="0.7" />
                  </svg>
                  {/* Number 1 */}
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-black text-[#1F3A5F]">
                    1
                  </span>
                </div>
                
                <div>
                  <p className="font-bold text-[#1F3A5F] text-lg leading-tight">Combination</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    In Malaysia
                    <span className="text-lg">🇲🇾</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 40% (2/5) */}
          <div className="lg:col-span-2 relative flex justify-center items-center min-h-[400px]">
            {/* Layer 1: Shield Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <img 
                src="/lovable-uploads/cb0aeae5-46f1-477c-a7b7-401df5ecf27b.png" 
                alt="" 
                className="w-80 h-80 object-contain"
              />
            </div>

            {/* Layer 2: Floating Particles/Molecules */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Molecule 1 */}
              <div className="absolute top-8 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-60 animate-float shadow-lg"></div>
              {/* Molecule 2 */}
              <div className="absolute top-16 right-8 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-50 animate-float animation-delay-1000 shadow-md"></div>
              {/* Molecule 3 */}
              <div className="absolute bottom-20 left-8 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-40 animate-float animation-delay-2000 shadow-md"></div>
              {/* Molecule 4 */}
              <div className="absolute bottom-32 right-4 w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 opacity-55 animate-float animation-delay-500 shadow-lg"></div>
              {/* Molecule 5 */}
              <div className="absolute top-1/3 left-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-300 to-cyan-500 opacity-45 animate-float animation-delay-1500 shadow-sm"></div>
            </div>

            {/* Layer 3: Product Bottle */}
            <div className="relative z-10">
              <img 
                src={heroProduct} 
                alt="RinseGard Antiseptic Oral Rinse" 
                className="max-w-xs md:max-w-sm w-full drop-shadow-2xl"
              />
              
              {/* Layer 4: Cool Mint Badge */}
              <div className="absolute -bottom-2 -right-4 flex items-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <span className="text-lg">🌿</span>
                  Cool Mint Flavour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
