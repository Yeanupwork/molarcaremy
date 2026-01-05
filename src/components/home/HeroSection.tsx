import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-navy min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-accent-green blur-3xl" />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <span className="badge badge-yellow mb-6 inline-flex">
              1st Patented in Malaysia
            </span>
            <h1 className="text-primary-foreground mb-6 leading-tight">
              Bridge the Immunity Gap:{" "}
              <span className="text-accent">Immediate Flu Protection</span> with RinseGard.
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              While vaccination is key, the 7–10 day latency period leaves patients vulnerable. 
              RinseGard provides an essential antiseptic shield powered by{" "}
              <strong className="text-accent">Biofilm Dissolving Technology</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Where to Find
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img
                src={heroProduct}
                alt="RinseGard Antiseptic Oral Rinse"
                className="max-w-md w-full rounded-2xl shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-accent text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Alcohol Free
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-foreground text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                120ML
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
