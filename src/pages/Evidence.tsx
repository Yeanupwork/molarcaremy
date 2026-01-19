import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { FileText, Users, Microscope, FlaskConical, BarChart3, Brain, Target } from "lucide-react";

interface StudyData {
  id: string;
  title: string;
  citation: string;
  objective: string;
  subjectPopulation: string;
  tonsillarCondition: string;
  pathogenDetected: string;
  detectionMethods: string;
  prevalence: string;
  keyFindings: string;
  conclusions: string;
  badgeColor: string;
}

const studies: StudyData[] = [
  {
    id: "biofilm-study",
    title: "The Biofilm Study",
    citation: "Chole, R. A., & Faddis, B. T. (2003). Anatomical Evidence of Microbial Biofilms in Tonsillar Tissues: A Possible Mechanism to Explain Chronicity. Archives of Otolaryngology–Head & Neck Surgery, 129(6), 634–636",
    objective: "To determine if microbial biofilms occur within clinically abnormal tonsils.",
    subjectPopulation: "19 human subjects",
    tonsillarCondition: "Recurrent infection vs. hypertrophy and obstruction.",
    pathogenDetected: "Gram-positive and gram-negative bacteria (predominantly gram-positive cocci) forming biofilms.",
    detectionMethods: "Light microscopy, Transmission electron microscopy (TEM), Gram staining.",
    prevalence: "11 of 15 (73%) in infected tonsils; 3 of 4 (75%) in hypertrophied tonsils.",
    keyFindings: "Biofilms located within tonsillar crypts; bacteria embedded in amorphous polysaccharide matrix; inflammatory cells at periphery.",
    conclusions: "Anatomical evidence of biofilms in chronically diseased tonsils may explain resistance to antibiotics and the recurrent nature of tonsillitis.",
    badgeColor: "bg-accent text-accent-foreground"
  },
  {
    id: "viral-reservoir-study",
    title: "The Viral Reservoir Study",
    citation: "Castro, I. A., Jorge, D. M. M., Ferreri, L. M., Martins, R. B., Pontelli, M. C., Jesus, B. L. S., ... & Arruda, E. (2020). Silent Infection of B and CD8+ T Lymphocytes by Influenza A Virus in Children with Tonsillar Hypertrophy. Journal of Virology, 94(9), e01969-19",
    objective: "To assess the replicative state of Influenza A Virus (IAV) in adenoids and palatine tonsils of asymptomatic children.",
    subjectPopulation: "103 children (aged 3 to 13 years)",
    tonsillarCondition: "Tonsillar hypertrophy (asymptomatic for ARI at time of surgery).",
    pathogenDetected: "Influenza A Virus (IAV) subtype pH1N1.",
    detectionMethods: "Real-time RT-PCR, Next-generation sequencing (NGS), Immunohistochemistry (IHC), Flow cytometry, Confocal microscopy.",
    prevalence: "7 of 103 patients (6.8%) positive for IAV M gene.",
    keyFindings: "IAV NP antigen found in CD20⁺ B lymphocytes, CD8⁺ T lymphocytes, CD11c⁺ cells, and cytokeratin+ epithelial cells; nuclear localization of NP in lymphocytes.",
    conclusions: "Human lymphoid tissues can harbor silent, productive IAV infections in immune cells, potentially impacting virus evolution and community transmission.",
    badgeColor: "bg-primary text-primary-foreground"
  }
];

const StudyCard = ({ study }: { study: StudyData }) => (
  <Card className="border-2 hover:border-accent transition-colors">
    <CardHeader className="pb-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge className={study.badgeColor}>{study.title}</Badge>
          <CardTitle className="mt-3 text-xl text-primary leading-tight">
            {study.objective}
          </CardTitle>
        </div>
      </div>
      <p className="text-sm text-muted-foreground italic mt-2 leading-relaxed">
        {study.citation}
      </p>
    </CardHeader>
    <CardContent>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="methodology">
          <AccordionTrigger className="text-sm font-medium hover:no-underline">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-accent" />
              Methodology & Population
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4 pt-2">
              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Subject Population</p>
                  <p className="text-sm text-foreground">{study.subjectPopulation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Tonsillar Condition</p>
                  <p className="text-sm text-foreground">{study.tonsillarCondition}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Microscope className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Detection Methods</p>
                  <p className="text-sm text-foreground">{study.detectionMethods}</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="findings">
          <AccordionTrigger className="text-sm font-medium hover:no-underline">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-accent" />
              Key Findings
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4 pt-2">
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Pathogen Detected</p>
                  <p className="text-sm text-foreground">{study.pathogenDetected}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Prevalence</p>
                  <p className="text-sm text-foreground">{study.prevalence}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Cellular/Anatomical Findings</p>
                  <p className="text-sm text-foreground">{study.keyFindings}</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="conclusions" className="border-b-0">
          <AccordionTrigger className="text-sm font-medium hover:no-underline">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-accent" />
              Conclusions
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-muted/50 rounded-lg p-4 mt-2">
              <p className="text-sm text-foreground leading-relaxed">{study.conclusions}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
);

const Evidence = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy py-12 md:py-16">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-primary-foreground text-4xl md:text-5xl font-bold mb-4">
                Evidence & Insights
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl">
                Peer-reviewed clinical studies and research supporting our approach to oral health
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-10 bg-secondary">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Supporting Literatures
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The following clinical studies provide the scientific foundation for understanding 
                biofilm formation in tonsillar tissues and the challenges in treating chronic 
                tonsillitis. These insights inform our approach to developing effective oral care solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Studies Section */}
        <section className="py-12 bg-background">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="grid gap-8 max-w-4xl mx-auto">
              {studies.map((study) => (
                <StudyCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-12 bg-muted">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 text-center">
                Key Takeaways
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Biofilm Resistance</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Up to 75% of chronically diseased tonsils contain biofilms, which may explain 
                    resistance to conventional antibiotic treatment.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FlaskConical className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Targeted Approach Needed</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These findings highlight the need for solutions that can penetrate biofilm 
                    structures to effectively reach embedded pathogens.
                  </p>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default Evidence;
