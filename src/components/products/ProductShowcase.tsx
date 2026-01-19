import heroProduct from "@/assets/product-with-shield.png";
import rinsegardLogo from "@/assets/rinsegard-logo-stretch.png";
import bfdLogo from "@/assets/bfd-logo.png";
import { Check, Ban } from "lucide-react";
const ProductShowcase = () => {
  return <section className="relative py-16 overflow-hidden bg-white">

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
            {/* Brand Header with Product Title */}
            <div className="space-y-2">
              {/* RinseGard Logo - stretched to touch product image */}
              <div className="flex items-center gap-4 relative z-20 lg:w-[140%] xl:w-[150%]">
                <img src={rinsegardLogo} alt="RinseGard" className="h-32 md:h-40 lg:h-56 xl:h-64 w-auto" />
                
              </div>

              {/* Antiseptic - thin with lines */}
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#F59D42]"></div>
                <span className="text-[#F59D42] uppercase tracking-[0.4em] text-sm md:text-base font-light">
                  Antiseptic
                </span>
                <div className="h-px w-12 bg-[#F59D42]"></div>
              </div>
              
              {/* Oral Rinse - massive bold */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#F59D42] uppercase tracking-wider">
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
                <img src={bfdLogo} alt="BFD Factor - Biofilms Dissolving Factor (Patented)" className="h-10 md:h-12 w-auto" />
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
                    <path d="M16 32c-2-8 2-16 8-20c-4 6-4 14 0 20c-4 6-4 14 0 20c-6-4-10-12-8-20z" fill="currentColor" opacity="0.9" />
                    <path d="M20 32c-2-6 1-12 6-16c-3 5-3 11 0 16c-3 5-3 11 0 16c-5-4-8-10-6-16z" fill="currentColor" opacity="0.7" />
                    {/* Right laurel */}
                    <path d="M48 32c2-8-2-16-8-20c4 6 4 14 0 20c4 6 4 14 0 20c6-4 10-12 8-20z" fill="currentColor" opacity="0.9" />
                    <path d="M44 32c2-6-1-12-6-16c3 5 3 11 0 16c3 5 3 11 0 16c5-4 8-10 6-16z" fill="currentColor" opacity="0.7" />
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
          <div className="lg:col-span-2 relative flex justify-center items-center min-h-[500px]">
            {/* Product Bottle - Static, enlarged, blended */}
            <div className="relative z-10">
              <img src={heroProduct} alt="RinseGard Antiseptic Oral Rinse" className="w-full max-w-md lg:max-w-lg xl:max-w-xl" />
              
              {/* Cool Mint Badge */}
              <div className="absolute bottom-4 right-0 flex items-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <span className="text-lg">🌿</span>
                  Cool Mint Flavour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductShowcase;