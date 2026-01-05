import { Shield, Beaker, CheckCircle2, Sparkles } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-green mb-4">The Solution</span>
          <h2 className="mb-6">
            Active <span className="text-accent">Medical Defense</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            This unique delivery system allows RinseGard's potent active agents to reach 
            pathogens previously shielded from treatment.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border card-shadow hover:shadow-lg transition-shadow group">
            <div className="feature-icon mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">
              0.2% Chlorhexidine Digluconate
            </h3>
            <p className="text-muted-foreground">
              A gold-standard bacteriocidal agent trusted by healthcare professionals worldwide 
              for effective antimicrobial action.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border card-shadow hover:shadow-lg transition-shadow group">
            <div className="feature-icon mb-6 group-hover:scale-110 transition-transform">
              <Beaker className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">
              0.1% Cetylpyridinium Chloride (CPC)
            </h3>
            <p className="text-muted-foreground">
              A potent agent effective against bacteria and enveloped viruses, providing 
              comprehensive oral protection.
            </p>
          </div>
        </div>

        {/* BFD Factor Section */}
        <div className="bg-navy rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-accent" />
                <span className="text-accent font-bold text-lg uppercase tracking-wide">
                  BFD Factor™
                </span>
              </div>
              <h3 className="text-primary-foreground text-2xl md:text-3xl font-bold mb-4">
                Powered by Patented Biofilm Dissolving Factor Technology
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                RinseGard changes this paradigm through its Biofilm Dissolving Factor (BFD Factor™), 
                a proprietary surfactant formulation designed to breach the matrix.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Breaks through biofilm matrix",
                "Reaches deep-seated bacteria",
                "100-fold increase in diffusion",
                "Prolonged contact with tissue",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
