import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.png";
import shieldOverlay from "@/assets/shield-overlay.png";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  return <section className="bg-navy min-h-[90vh] flex items-center relative overflow-hidden pt-24 pb-20 md:pt-28 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-32 left-20 w-48 h-48 rounded-full bg-accent-green blur-3xl" />
      </div>

      <div className="container-custom mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <span className="badge badge-yellow mb-6 inline-flex">
              1st Patented in Malaysia
            </span>
            <h1 className="text-primary-foreground mb-6 leading-tight text-2xl md:text-3xl lg:text-4xl">
              Bridge the Immunity Gap:{" "}
              <span className="text-accent">Immediate Flu Protection</span> with RinseGard.
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
              While vaccination is key, the 7–10 day latency period leaves patients vulnerable. 
              RinseGard provides an essential antiseptic shield powered by{" "}
              <strong className="text-accent">Biofilm Dissolving Technology</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary group"
                onClick={() => document.getElementById('clinics')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Where to Find
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white bg-transparent text-white font-semibold hover:bg-white hover:text-navy"
                onClick={() => window.open('https://wa.me/60102472600?text=Get%20the%20Clinical%20Data', '_blank')}
              >
                Discover the Science Behind It
              </Button>
            </div>
          </div>

          {/* Product Image with Shield Overlay */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Shield overlay behind product */}
              <img 
                src={shieldOverlay} 
                alt="Protection shield" 
                className="absolute inset-0 w-full h-full object-contain scale-125 opacity-60 z-0" 
              />
              <img 
                src={heroProduct} 
                alt="RinseGard Antiseptic Oral Rinse" 
                className="relative z-10 w-full h-auto rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;