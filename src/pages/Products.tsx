import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductShowcase from "@/components/products/ProductShowcase";
import symptomsCollage from "@/assets/symptoms-collage.jpg";
import productExplain from "@/assets/product-explain.jpg";
import bfdFactorLogo from "@/assets/bfd-factor-logo-new.png";
import halalCertificate from "@/assets/halal-certificate.jpg";
import { AlertTriangle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const Products = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Symptoms */}
        <section className="bg-navy py-8 md:py-12">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-primary-foreground text-5xl md:text-6xl font-bold mb-2">
                  Experiencing<br />These Symptoms?
                </h1>
                <p className="text-accent font-semibold text-2xl mb-1">
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
        <ProductShowcase />

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
                <img alt="BFD Factor - Biofilms Dissolving Factor (Patented)" className="max-h-56 w-auto" src={bfdFactorLogo} />
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
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: Heading and Badge */}
              <div className="text-center md:text-left flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                  Halal Certified
                </h2>
                <p className="text-primary-foreground/80 text-lg">
                  Certified by JAKIM - Jabatan Kemajuan Islam Malaysia
                </p>
                <p className="text-primary-foreground/60 text-sm mt-2">
                  Ref: JAKIM.700-2/3/3 135-10/2024
                </p>
              </div>
              
              {/* Right: Certificate Image - Click to Enlarge */}
              <div className="flex-shrink-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <img src={halalCertificate} alt="Halal Certificate - JAKIM Certified" className="max-h-80 w-auto rounded-lg shadow-lg border-4 border-white/20 cursor-pointer hover:scale-105 transition-transform duration-300" />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-2 bg-transparent border-none">
                    <img src={halalCertificate} alt="Halal Certificate - JAKIM Certified" className="w-full h-auto rounded-lg" />
                  </DialogContent>
                </Dialog>
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
                    
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg text-center"><br /><span className="text-xs">SEC</span></span>
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