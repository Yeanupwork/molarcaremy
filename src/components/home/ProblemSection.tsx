import { Shield, Droplets, Leaf, Clock, Award, FlaskConical } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Dual-Action Formula",
    description: "0.2% Chlorhexidine Digluconate + 0.1% CPC for comprehensive protection against bacteria and enveloped viruses."
  },
  {
    icon: FlaskConical,
    title: "BFD Factor™ Technology",
    description: "Patented Biofilm Dissolving technology that penetrates deep into tonsillar crypts where conventional rinses fail."
  },
  {
    icon: Leaf,
    title: "Alcohol-Free",
    description: "Gentle on your mouth with no burning sensation. Cool mint flavour for a refreshing experience."
  },
  {
    icon: Clock,
    title: "Ready-to-Use",
    description: "Simply rinse for 30 seconds. No dilution required - one cap equals 10ml, ensuring accurate dosing."
  },
  {
    icon: Award,
    title: "Halal Certified",
    description: "Halal certified formula ensuring compliance with halal standards for peace of mind."
  },
  {
    icon: Droplets,
    title: "Clinically Proven",
    description: "Backed by clinical studies demonstrating effective biofilm disruption in tonsillar crypts."
  }
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <span className="badge badge-orange mb-4">Why Choose Us</span>
          <h2 className="mb-4">Product Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Advanced oral care technology designed for comprehensive protection and comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border card-shadow hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;