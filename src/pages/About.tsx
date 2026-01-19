import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import bfdMechanism from "@/assets/bfd-mechanism.png";
import bfdFactorHero from "@/assets/bfd-factor-logo-hero.png";
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
              <img alt="BFD Factor - Biofilms Dissolving Factor (Patented)" src={bfdFactorHero} className="max-w-md w-full h-auto object-contain mx-auto mb-6" />
            </RevealSection>
            <RevealSection delay={200}>
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                How Patented BFD Factor<br />Unlocks the Biofilm
              </h1>
            </RevealSection>
            <RevealSection delay={400}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our patented combination of excipients creates the Biofilm Dissolving Factor (BFD Factor™)<sup>1</sup>, 
                a unique delivery system that actively overcomes biofilm resistance.<sup>2</sup>
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
                  bacteria previously shielded from treatment.<sup>3,4</sup>
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
                  mucoadhesive properties for prolonged contact time.<sup>3,4</sup>
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
                  <h3 className="text-xl font-bold mb-3 text-white">Standard Chlorhexidine</h3>
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
                  <h3 className="text-xl font-bold mb-3 text-white">With BFD Factor™</h3>
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

        {/* CTA Section - Speak to Product Specialist */}
        <section className="py-16 bg-navy">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Have Questions About the Science?
              </h3>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Our product specialists can walk you through the clinical evidence and help you understand how RinseGard's BFD Factor technology works.
              </p>
              <a
                href="https://wa.me/60102472600?text=Hi%2C%20I%27d%20like%20to%20speak%20with%20a%20product%20specialist%20about%20the%20clinical%20evidence."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Speak to a Product Specialist
              </a>
              <p className="text-primary-foreground/60 text-sm mt-4">
                Available via WhatsApp • Response within 24 hours
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;