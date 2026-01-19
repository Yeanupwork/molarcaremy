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
      </main>
      <Footer />
    </div>
  );
};

export default Evidence;
