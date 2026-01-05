import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MolarCare RinseGard?",
    answer: "MolarCare RinseGard is an antibacterial and antiviral antiseptic gargle solution designed to provide protection during the post-vaccination immunity gap. It features Biofilm Dissolving Technology to effectively target deep-seated pathogenic colonies."
  },
  {
    question: "How does RinseGard help during the post-vaccination period?",
    answer: "While flu vaccinations are essential, they take 7-10 days to build full immunity. During this latency period, patients remain vulnerable. RinseGard provides an antiseptic shield that protects the respiratory virus droplet pathway, offering an additional layer of defense until antibody production is complete."
  },
  {
    question: "Can RinseGard be used alongside antibiotics?",
    answer: "Yes, RinseGard is often co-dispensed with systemic antibiotics like Amoxicillin for conditions such as bacterial tonsillitis and pharyngitis. It targets the biofilm source directly, complementing systemic treatment to reduce recurrence and accelerate recovery."
  },
  {
    question: "How should I use RinseGard?",
    answer: "Use RinseGard as directed by your healthcare provider. It is typically used as a gargle solution, following the instructions on the packaging for proper dosage and frequency. For specific guidance, please consult your prescribing physician."
  },
  {
    question: "Where can I get MolarCare RinseGard?",
    answer: "RinseGard is available through licensed GP clinics across Malaysia. You can find a list of dispensing partners on our website, or ask your healthcare provider to prescribe it for you."
  },
  {
    question: "Is RinseGard suitable for all patients?",
    answer: "RinseGard is designed for adult patients who need antiseptic protection, particularly during flu season or post-vaccination periods. However, please consult with your healthcare provider to determine if RinseGard is appropriate for your specific situation."
  }
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge badge-green mb-4">Got Questions?</span>
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about MolarCare RinseGard.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;