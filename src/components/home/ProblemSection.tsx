import biofilmImage from "@/assets/biofilm-illustration.jpg";

const ProblemSection = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={biofilmImage}
              alt="Biofilm Shield Illustration"
              className="rounded-2xl shadow-lg-custom w-full"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="badge badge-orange mb-4">The Challenge</span>
            <h2 className="mb-6">
              The Barrier: The <span className="text-accent">"Biofilm Shield"</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Standard rinses often fail because they cannot penetrate the "Biofilm Shield"—a 
              structured community of bacteria encased in an extracellular polymeric matrix 
              hidden deep within tonsillar crypts.
            </p>
            <div className="bg-card rounded-xl p-6 border border-border card-shadow">
              <h4 className="text-lg font-bold text-primary mb-3">Why Traditional Rinses Fail</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-status-alert mt-1">✗</span>
                  Cannot penetrate biofilm matrix
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-status-alert mt-1">✗</span>
                  Surface-level treatment only
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-status-alert mt-1">✗</span>
                  Bacteria remain protected deep in crypts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
