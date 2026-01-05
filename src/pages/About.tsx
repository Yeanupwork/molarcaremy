import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import bfdMechanism from "@/assets/bfd-mechanism.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* BFD Factor Logo Section */}
        <section className="py-16 bg-[#e8eaed]">
          <div className="container-custom mx-auto flex flex-col items-center">
            <img 
              alt="BFD Factor - Biofilms Dissolving Factor (Patented)" 
              src="/lovable-uploads/cb0aeae5-46f1-477c-a7b7-401df5ecf27b.png" 
              className="max-w-md w-full h-auto object-contain"
            />
            <p className="text-[#d4a017] text-lg font-medium mt-4">
              Biofilms Dissolving Factor (Patented)
            </p>
          </div>
        </section>

        {/* Why BFD Factor Section */}
        <section className="py-16">
          <div className="container-custom mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8 max-w-4xl mx-auto">
              <div className="flex-shrink-0">
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                  WHY BFD<br />Factor?
                </h2>
              </div>
              <div className="flex items-stretch gap-8">
                <div className="w-1 bg-[#d4a017] flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Our patented combination of excipients creates the Biofilm Dissolving Factor (BFD Factor™), a unique delivery system that actively overcomes biofilm resistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BFD Mechanism Image Section */}
        <section className="w-full">
          <img 
            src={bfdMechanism} 
            alt="The Mechanism: How Patented BFD Factor Unlocks the Biofilm" 
            className="w-full h-auto object-contain"
          />
        </section>

        {/* Bottom Text Section */}
        <section className="py-12">
          <div className="container-custom mx-auto">
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;