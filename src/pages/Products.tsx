import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroProduct from "@/assets/hero-product.jpg";
import clinicalStudy from "@/assets/clinical-study.jpg";
import { Clock, Droplets, Calendar, FlaskConical, ShieldCheck, Award } from "lucide-react";

const Products = () => {
  const usageSteps = [
    { icon: Droplets, label: "Rinse 1-2 Times", sublabel: "Per Day", detail: "Depends on severity" },
    { icon: Clock, label: "Each Time", sublabel: "30 Seconds", detail: "" },
    { icon: FlaskConical, label: "Dose: 10ml", sublabel: "(One full cap)", detail: "" },
    { icon: Calendar, label: "Duration", sublabel: "4-5 Days", detail: "(coupled with antibiotic treatment)" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy py-20">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-primary-foreground mb-4">
                  Experiencing These Symptoms?
                </h1>
                <p className="text-2xl md:text-3xl text-accent font-semibold mb-6">
                  Sneeze? Cough? Sore Throat?
                </p>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  Take the Next Step Toward Feeling Better
                </p>
                <span className="badge badge-green text-base px-4 py-2">
                  Alcohol Free
                </span>
              </div>
              <div className="flex justify-center">
                <img
                  src={heroProduct}
                  alt="RinseGard Product"
                  className="max-w-sm w-full rounded-2xl shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <ShieldCheck className="w-8 h-8 text-accent" />
                <span className="text-2xl font-bold text-primary">BFD Factor™</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-secondary rounded-2xl p-8 text-center">
                  <span className="text-4xl font-bold text-accent">0.2%</span>
                  <p className="text-xl font-semibold text-primary mt-2">Chlorhexidine</p>
                </div>
                <div className="bg-secondary rounded-2xl p-8 text-center">
                  <span className="text-4xl font-bold text-accent">0.1%</span>
                  <p className="text-xl font-semibold text-primary mt-2">Cetylpyridinium Chloride</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
                <span className="badge badge-orange px-6 py-2 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  Combination #1 in Malaysia
                </span>
                <span className="badge badge-green px-6 py-2 text-sm">
                  Cool Mint Flavour
                </span>
              </div>
            </div>

            {/* Mechanism Section */}
            <div className="bg-accent/10 rounded-3xl p-8 md:p-12 mb-16">
              <h2 className="text-center mb-8">
                Everything Starts from <span className="text-accent">Unhygienic Oral Care</span>
              </h2>
              <div className="bg-card rounded-2xl p-6 text-center max-w-2xl mx-auto">
                <p className="text-lg font-semibold text-primary mb-2">Right Ratio:</p>
                <p className="text-xl font-bold text-accent">
                  Polysorbate 20 + Poloxamer 407
                </p>
              </div>
            </div>

            {/* Clinical Study */}
            <div className="mb-16">
              <h2 className="text-center mb-8">
                Theragon In-House Light Microscope Clinical Study{" "}
                <span className="text-accent">(12 Hours)</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <img
                  src={clinicalStudy}
                  alt="Before and After Clinical Study"
                  className="w-full rounded-2xl shadow-lg-custom"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <span className="text-lg font-bold text-muted-foreground">Before</span>
                    <p className="text-sm text-muted-foreground/70">Dense biofilm mass</p>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-bold text-accent">After</span>
                    <p className="text-sm text-muted-foreground/70">Disintegrated structure</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HALAL Badge */}
            <div className="bg-navy rounded-3xl p-8 md:p-12 text-center mb-16">
              <h2 className="text-primary-foreground mb-4">It's HALAL!</h2>
              <p className="text-primary-foreground/70 text-lg">
                MS 2634<br />
                3 135-10/2024
              </p>
            </div>

            {/* Usage Guide */}
            <div>
              <h2 className="text-center mb-4">Oral Rinse Usage</h2>
              <p className="text-center text-muted-foreground mb-12">
                Best Practices for Consistent Results
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {usageSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 text-center border border-border card-shadow hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    <p className="font-bold text-primary">{step.label}</p>
                    <p className="text-xl font-bold text-accent">{step.sublabel}</p>
                    {step.detail && (
                      <p className="text-sm text-muted-foreground mt-2">{step.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
