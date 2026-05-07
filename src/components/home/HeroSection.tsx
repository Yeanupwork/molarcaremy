import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroProductSlide1 from "@/assets/hero-product.png";
import heroProductSlide2 from "@/assets/hero-product-v3.png";
import shieldOverlay from "@/assets/shield-overlay.png";
import carouselBanner from "@/assets/carousel-banner.jpg";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    badge: "1st Patented in Malaysia",
    image: heroProductSlide1,
    showShield: true,
    title: (
      <>
        Bridge the Immunity Gap:{" "}
        <span className="text-accent">Immediate Flu Protection</span> with RinseGard.
      </>
    ),
    description: (
      <>
        While vaccination is key, the 7–10 day latency period leaves patients vulnerable.
        RinseGard provides an essential antiseptic shield powered by{" "}
        <strong className="text-accent">Biofilm Dissolving Technology</strong>.
      </>
    ),
  },
  {
    badge: "Evidence-Based Approach",
    badgeClass: "bg-pink-400 text-white",
    image: heroProductSlide2,
    showShield: false,
    title: (
      <>
        Adjunctive Co-Prescription in URTI:{" "}
        <span className="text-pink-400">Enhance Healing & Reduce Antibiotic Resistance</span>
      </>
    ),
    description:
      "Routine co-Prescription with Antibiotics for URTI to improve recovery, reduce complications and reduces Antibiotic Resistance.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
    <section className="bg-navy min-h-0 md:min-h-[90vh] flex items-center relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-32 left-20 w-48 h-48 rounded-full bg-accent-green blur-3xl" />
      </div>

      <div className="container-custom mx-auto px-4 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="relative order-2 lg:order-1">
            <div
              key={currentSlide}
              className="animate-fade-in"
            >
              <span className={`badge mb-4 md:mb-6 inline-flex text-xs md:text-sm ${slides[currentSlide].badgeClass || 'badge-yellow'}`}>
                {slides[currentSlide].badge}
              </span>
              <h1 className="text-primary-foreground mb-4 md:mb-6 leading-tight text-xl md:text-2xl lg:text-4xl">
                {slides[currentSlide].title}
              </h1>
              <p className="text-primary-foreground/80 text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                className="btn-primary group text-sm md:text-base"
                onClick={() => document.getElementById('clinics')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Where to Find
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white bg-transparent text-white font-semibold hover:bg-white hover:text-navy text-sm md:text-base"
                onClick={() => window.open('https://wa.me/60102472600?text=Get%20the%20Clinical%20Data', '_blank')}
              >
                Discover the Science Behind It
              </Button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-accent"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Image with Shield Overlay */}
          <div className="relative flex items-center justify-center">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors hidden md:block"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors hidden md:block"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="relative w-full max-w-lg">
              {slides[currentSlide].showShield && (
                <img
                  src={shieldOverlay}
                  alt="Protection shield"
                  className="absolute inset-0 w-full h-full object-contain scale-125 opacity-60 z-0"
                />
              )}
              <img
                src={slides[currentSlide].image}
                alt="RinseGard Antiseptic Oral Rinse"
                className="relative z-10 w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
      <div className="w-full bg-white">
        <img
          src={carouselBanner}
          alt="Biofilm Dissolving Technology - How antibiotics and BFD work together"
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default HeroSection;
