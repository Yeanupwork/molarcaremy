import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroProduct from "@/assets/hero-product.png";
import symptomsCollage from "@/assets/symptoms-collage.jpg";
import productExplain from "@/assets/product-explain.jpg";
import halalLogo from "@/assets/halal-logo.png";
import bfdFactorLogo from "@/assets/bfd-factor-logo-2.jpg";
import { Check, AlertTriangle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
const Products = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Symptoms */}
        <section className="bg-navy py-8 md:py-12">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-primary-foreground text-3xl md:text-4xl font-bold mb-2">
                  Experiencing<br />These Symptoms?
                </h1>
                <p className="text-accent font-semibold text-lg mb-1">
                  Sneeze? Cough? Sore Throat?
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Take the Next Step Toward Feeling Better
                </p>
              </div>
              <div className="flex-1">
                <img src={symptomsCollage} alt="Common flu symptoms - sneezing, coughing, sore throat" className="w-full rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="py-12 bg-gradient-to-b from-secondary to-background">
          <div className="container-custom mx-auto px-4 md:px-8">
            {/* Alcohol Free Badge */}
            <div className="mb-8">
              <span className="bg-accent-green text-primary font-bold px-6 py-2 rounded-md text-sm uppercase tracking-wide">
                Alcohol Free
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Product Info */}
              <div>
                {/* RinseGard Branding */}
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1a5f9e] italic mb-0" style={{
                  fontFamily: 'Georgia, serif'
                }}>
                    RinseGard<span className="text-accent">✦</span>
                  </h2>
                  <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm border-t border-b border-muted-foreground/30 py-1 inline-block">
                    — Antiseptic —
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1a5f9e] uppercase tracking-wider">
                    Oral Rinse
                  </h3>
                </div>

                {/* Features Row */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Deep Cleaning</p>
                      <p className="text-xs text-muted-foreground">Full Coverage</p>
                    </div>
                  </div>
                  <div className="bg-secondary px-4 py-2 rounded-lg text-center">
                    <p className="font-bold text-primary text-lg">120ML</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">No Further</p>
                      <p className="text-xs text-muted-foreground">Dilution Needed</p>
                    </div>
                  </div>
                </div>

                {/* BFD Factor Logo */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-navy px-4 py-2 rounded-lg">
                    <span className="text-accent font-black text-xl italic">BFD</span>
                    <span className="text-primary-foreground font-bold">Factor™</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Biofilm Dissolving Factor (Patented)</p>
                </div>

                {/* Ingredients */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-[#1a5f9e]">0.2%</span>
                    <p className="text-sm text-muted-foreground">Chlorhexidine</p>
                  </div>
                  <span className="text-2xl text-accent font-bold">+</span>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-[#1a5f9e]">0.1%</span>
                    <p className="text-sm text-muted-foreground">Cetylpyridinium<br />Chloride</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-1">
                        <span className="text-primary font-black text-xl">1st</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">Combination</p>
                      <p className="text-sm text-muted-foreground">In Malaysia</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-2xl">🇲🇾</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Product Image */}
              <div className="relative flex justify-center">
                <div className="relative">
                  <img src={heroProduct} alt="RinseGard Antiseptic Oral Rinse" className="max-w-xs md:max-w-sm w-full drop-shadow-2xl" />
                  {/* Cool Mint Badge */}
                  <div className="absolute bottom-4 right-0 bg-accent-green text-primary px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    🌿 Cool Mint Flavour
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Everything Starts Section - Orange Banner */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-6">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="w-8 h-8 text-white" />
              <h2 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide text-center">
                Everything Starts From Unhygienic Oral Care
              </h2>
            </div>
          </div>
        </section>

        {/* Biofilm Mechanism Section */}
        <section className="py-8 bg-secondary">
          <div className="container-custom mx-auto px-4 md:px-8">
            <img src={productExplain} alt="RinseGard BFD Factor biofilm mechanism - how it penetrates and dissolves biofilm in tonsil crypts" className="w-full rounded-xl shadow-lg" />
          </div>
        </section>

        {/* Patented Formula Section */}
        <section className="py-12 bg-background">
          <div className="container-custom mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Our Patented Formula Designed<br />to Break Biofilms
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* BFD Factor Card */}
              <div className="rounded-xl p-6 flex items-center justify-center bg-[primary-navy-dark] bg-zinc-50">
                <img alt="BFD Factor - Biofilms Dissolving Factor (Patented)" className="max-h-24 w-auto" src="/lovable-uploads/1f6b7f5f-13c7-4e3c-9cf1-9a1301c4a75d.png" />
              </div>

              {/* Clinical Study Link */}
              <Link to="/about" className="bg-white border-2 border-border rounded-xl p-6 hover:border-accent transition-colors group">
                <div className="text-center">
                  <p className="font-bold text-primary text-lg mb-1">Clinical Study</p>
                  <p className="text-muted-foreground mb-4">(12 Hours)</p>
                  <p className="text-accent font-semibold flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Click to View <ChevronRight className="w-4 h-4" />
                  </p>
                </div>
              </Link>

              {/* Articles Link */}
              <Link to="/about" className="bg-white border-2 border-border rounded-xl p-6 hover:border-accent transition-colors group">
                <div className="text-center">
                  <p className="font-bold text-primary text-lg mb-4">Articles</p>
                  <p className="text-accent font-semibold flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Click to View <ChevronRight className="w-4 h-4" />
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* HALAL Section */}
        <section className="bg-navy py-12">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  It's HALAL!
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <img src={halalLogo} alt="HALAL Certification" className="w-24 h-24 object-contain" />
                <div className="text-primary-foreground/80 text-sm">
                  <p className="font-semibold">MS 2634</p>
                  <p>3 135-10/2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Section */}
        <section className="py-12 bg-background">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Oral Rinse Usage
              </h2>
              <p className="text-muted-foreground">
                Best Practices for Consistent Results
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-xl">1-2</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Rinse 1-2 Times<br />Per Day</p>
                    <p className="text-sm text-muted-foreground mt-1">Depends on severity</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">30<br /><span className="text-xs">SEC</span></span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Each Time</p>
                    <p className="font-bold text-primary text-lg">30 Seconds</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">10ML</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Each Time</p>
                    <p className="font-bold text-primary">Gargle 10ml<br />(one full cap)</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">5-7</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Gargle for<br />4-5 Days</p>
                    <p className="text-sm text-muted-foreground mt-1">(coupled with antibiotic treatment course)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Products;