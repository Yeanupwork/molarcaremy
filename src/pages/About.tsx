import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import bfdMechanism from "@/assets/bfd-mechanism.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Droplets, FlaskConical, TrendingUp } from "lucide-react";
const RevealSection = ({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const {
    ref,
    isVisible
  } = useScrollReveal(0.15);
  return <div ref={ref} className={`transition-all duration-700 ease-out ${className}`} style={{
    transitionDelay: `${delay}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)"
  }}>
      {children}
    </div>;
};
const About = () => {
  return <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-[#e8eaed] to-white">
          <div className="container-custom mx-auto text-center">
            <RevealSection>
              <img alt="BFD Factor - Biofilms Dissolving Factor (Patented)" src="/lovable-uploads/cb0aeae5-46f1-477c-a7b7-401df5ecf27b.png" className="max-w-sm w-full h-auto object-contain mx-auto mb-6" />
            </RevealSection>
            <RevealSection delay={200}>
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                How Patented BFD Factor<br />Unlocks the Biofilm
              </h1>
            </RevealSection>
            <RevealSection delay={400}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our patented combination of excipients creates the Biofilm Dissolving Factor (BFD Factor™), 
                a unique delivery system that actively overcomes biofilm resistance.
              </p>
            </RevealSection>
          </div>
        </section>

        {/* Feature 1: Enhanced Penetration */}
        <section className="py-20">
          <div className="container-custom mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
              <RevealSection className="flex-1">
                <div className="bg-primary/5 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Droplets className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Enhanced Penetration
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  <span className="text-[#d4a017] font-semibold">Poloxamer 407</span> acts as a penetration enhancer, 
                  creating channels within the biofilm's polymeric matrix. This allows Chlorhexidine to reach 
                  bacteria previously shielded from treatment.
                </p>
              </RevealSection>
              <RevealSection delay={200} className="flex-1">
                <div className="bg-[#e8eaed] rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary rounded-full animate-pulse" />
                    </div>
                    <p className="text-sm text-muted-foreground">Penetrating biofilm matrix</p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Feature 2: Optimized Delivery */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="container-custom mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-5xl mx-auto">
              <RevealSection className="flex-1">
                <div className="bg-[#d4a017]/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <FlaskConical className="w-10 h-10 text-[#d4a017]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Optimized Delivery
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  <span className="text-[#d4a017] font-semibold">Polysorbate 20</span> prevents excessive gelation, 
                  ensuring the solution remains in a liquid form to flow deep into tonsillar crypts while maintaining 
                  mucoadhesive properties for prolonged contact time.
                </p>
              </RevealSection>
              <RevealSection delay={200} className="flex-1">
                <div className="bg-white rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="flex items-end justify-center gap-2 mb-4">
                      <div className="w-8 h-16 bg-[#d4a017]/30 rounded-t-full" />
                      <div className="w-8 h-24 bg-[#d4a017]/50 rounded-t-full" />
                      <div className="w-8 h-20 bg-[#d4a017]/70 rounded-t-full" />
                      <div className="w-8 h-28 bg-[#d4a017] rounded-t-full" />
                    </div>
                    <p className="text-sm text-muted-foreground">Extended contact time</p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Feature 3: 100x Increased Diffusion */}
        <section className="py-20">
          <div className="container-custom mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
              <RevealSection className="flex-1">
                <div className="bg-green-500/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <TrendingUp className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  100x Increased Diffusion
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  The optimal <span className="text-[#d4a017] font-semibold">1.5% w/w Poloxamer 407</span> concentration 
                  provides <span className="text-green-600 font-bold text-xl">100-fold increase</span> in chlorhexidine diffusion 
                  through the biofilm barrier.
                </p>
              </RevealSection>
              <RevealSection delay={200} className="flex-1">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-600 mb-2">100x</div>
                    <p className="text-sm text-muted-foreground">Greater diffusion rate</p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container-custom mx-auto">
            <RevealSection>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                The Difference is Clear
              </h2>
            </RevealSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <RevealSection delay={200}>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-400 rounded-full opacity-50" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Standard Chlorhexidine</h3>
                  <p className="text-white/70">Limited Penetration</p>
                  <div className="mt-6 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-1/4 bg-red-400 rounded-full" />
                  </div>
                  
                </div>
              </RevealSection>
              <RevealSection delay={400}>
                <div className="bg-[#d4a017]/20 backdrop-blur rounded-2xl p-8 text-center border-2 border-[#d4a017]">
                  <div className="w-16 h-16 bg-[#d4a017]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#d4a017] rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">With BFD Factor™</h3>
                  <p className="text-[#d4a017]">Deep Biofilm Access</p>
                  <div className="mt-6 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-[#d4a017] rounded-full" />
                  </div>
                  
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Mechanism Image Section */}
        <section className="py-16 bg-white">
          <div className="container-custom mx-auto">
            <RevealSection>
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
                The Science Behind BFD Factor™
              </h2>
            </RevealSection>
            <RevealSection delay={200}>
              <img src={bfdMechanism} alt="The Mechanism: How Patented BFD Factor Unlocks the Biofilm" className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg" />
            </RevealSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;