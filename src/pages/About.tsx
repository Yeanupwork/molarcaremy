import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Beaker, Droplets, Sparkles } from "lucide-react";
import bfdFactorLogo from "@/assets/bfd-factor-logo.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState<"poloxamer" | "polysorbate">("poloxamer");

  const tabs = {
    poloxamer: {
      title: "Engineered Penetration (Poloxamer 407)",
      headline: "Breaking the Matrix",
      description:
        "Utilizing Poloxamer 407, the solution effectively creates water-filled channels within the biofilm matrix.",
      optimization:
        "The concentration is scientifically optimized at 1.5% w/w. Research indicates this specific ratio provides a 100-fold increase in diffusion compared to lower concentrations, ensuring the antiseptic reaches deep-seated bacteria.",
      icon: Beaker,
    },
    polysorbate: {
      title: "Optimized Delivery (Polysorbate 20)",
      headline: "Reaching the Crypts",
      description:
        "Polysorbate 20 is critical for modulating the solution's viscosity. It prevents \"sol-gel transition\" (excessive thickening), which ensures the liquid remains fluid enough to flow deep into tonsillar crypts.",
      benefit:
        "This component maintains mucoadhesive properties, allowing for prolonged contact time with the infected tissue without being washed away immediately.",
      icon: Droplets,
    },
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy py-20">
          <div className="container-custom mx-auto px-4 md:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-10 h-10 text-accent" />
              <span className="text-accent font-bold text-2xl uppercase tracking-wide">
                BFD Factor™
              </span>
            </div>
            <h1 className="text-primary-foreground mb-6 max-w-4xl mx-auto">
              The Engine Behind RinseGard
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto">
              The effectiveness of an oral rinse is defined not just by its active ingredients, 
              but by its ability to deliver them where they are needed most. BFD Factor™ is our 
              patented technology designed to overcome the physical barriers of oral biofilms.
            </p>
          </div>
        </section>

        {/* Technical Breakdown */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <h2 className="text-center mb-12">
              Technical <span className="text-accent">Breakdown</span>
            </h2>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab("poloxamer")}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "poloxamer"
                    ? "bg-accent text-primary shadow-button"
                    : "bg-secondary text-primary hover:bg-secondary/80"
                }`}
              >
                Poloxamer 407
              </button>
              <button
                onClick={() => setActiveTab("polysorbate")}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "polysorbate"
                    ? "bg-accent text-primary shadow-button"
                    : "bg-secondary text-primary hover:bg-secondary/80"
                }`}
              >
                Polysorbate 20
              </button>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-3xl p-8 md:p-12 border border-border card-shadow-lg animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  {activeTab === "poloxamer" ? (
                    <Beaker className="w-12 h-12 text-accent" />
                  ) : (
                    <Droplets className="w-12 h-12 text-accent" />
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {tabs[activeTab].headline}
                    </h3>
                    <p className="text-muted-foreground">{tabs[activeTab].title}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    {tabs[activeTab].description}
                  </p>

                  <div className="bg-secondary rounded-xl p-6">
                    <h4 className="font-bold text-primary mb-2">
                      {activeTab === "poloxamer" ? "Scientific Optimization" : "Key Benefit"}
                    </h4>
                    <p className="text-muted-foreground">
                      {activeTab === "poloxamer"
                        ? tabs.poloxamer.optimization
                        : tabs.polysorbate.benefit}
                    </p>
                  </div>

                  {activeTab === "poloxamer" && (
                    <div className="bg-accent/10 rounded-xl p-6 text-center">
                      <span className="text-4xl font-bold text-accent">100x</span>
                      <p className="text-lg font-semibold text-primary mt-2">
                        Increase in Diffusion
                      </p>
                      <p className="text-muted-foreground text-sm">
                        at 1.5% w/w concentration
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patent Section */}
        <section className="section-padding bg-[#e8eaed]">
          <div className="container-custom mx-auto flex justify-center">
            <img 
              src={bfdFactorLogo} 
              alt="BFD Factor - Biofilms Dissolving Factor (Patented)" 
              className="max-w-2xl w-full h-auto"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
