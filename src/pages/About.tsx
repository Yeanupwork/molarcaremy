import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Beaker, Droplets } from "lucide-react";
import bfdFactorLogo from "@/assets/bfd-factor-logo.jpg";
const About = () => {
  const [activeTab, setActiveTab] = useState<"poloxamer" | "polysorbate">("poloxamer");
  const tabs = {
    poloxamer: {
      title: "Engineered Penetration (Poloxamer 407)",
      headline: "Breaking the Matrix",
      description: "Utilizing Poloxamer 407, the solution effectively creates water-filled channels within the biofilm matrix.",
      optimization: "The concentration is scientifically optimized at 1.5% w/w. Research indicates this specific ratio provides a 100-fold increase in diffusion compared to lower concentrations, ensuring the antiseptic reaches deep-seated bacteria.",
      icon: Beaker
    },
    polysorbate: {
      title: "Optimized Delivery (Polysorbate 20)",
      headline: "Reaching the Crypts",
      description: "Polysorbate 20 is critical for modulating the solution's viscosity. It prevents \"sol-gel transition\" (excessive thickening), which ensures the liquid remains fluid enough to flow deep into tonsillar crypts.",
      benefit: "This component maintains mucoadhesive properties, allowing for prolonged contact time with the infected tissue without being washed away immediately.",
      icon: Droplets
    }
  };
  return <div className="min-h-screen">
      <Header />
      <main>
        {/* Patent Section */}
        <section className="section-padding bg-[#e8eaed]">
          <div className="container-custom mx-auto flex justify-center bg-primary-foreground bg-[primary-navy-light]">
            <img alt="BFD Factor - Biofilms Dissolving Factor (Patented)" src="/lovable-uploads/cb0aeae5-46f1-477c-a7b7-401df5ecf27b.png" className="max-w-2xl w-full h-auto border-[primary-navy-light] object-scale-down" />
          </div>
        </section>

        {/* Hero Section */}
        

        {/* Technical Breakdown */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <h2 className="text-center mb-12">
              Technical <span className="text-accent">Breakdown</span>
            </h2>

            {/* Tab Navigation */}
            

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-3xl p-8 md:p-12 border border-border card-shadow-lg animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  {activeTab === "poloxamer" ? <Beaker className="w-12 h-12 text-accent" /> : <Droplets className="w-12 h-12 text-accent" />}
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
                      {activeTab === "poloxamer" ? tabs.poloxamer.optimization : tabs.polysorbate.benefit}
                    </p>
                  </div>

                  {activeTab === "poloxamer" && <div className="bg-accent/10 rounded-xl p-6 text-center">
                      <span className="text-4xl font-bold text-accent">100x</span>
                      <p className="text-lg font-semibold text-primary mt-2">
                        Increase in Diffusion
                      </p>
                      <p className="text-muted-foreground text-sm">
                        at 1.5% w/w concentration
                      </p>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;