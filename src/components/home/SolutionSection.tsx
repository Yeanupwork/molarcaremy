import { Shield, Beaker, CheckCircle2, Sparkles } from "lucide-react";
const SolutionSection = () => {
  return <section className="section-padding">
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
        
      </div>
    </section>;
};
export default SolutionSection;