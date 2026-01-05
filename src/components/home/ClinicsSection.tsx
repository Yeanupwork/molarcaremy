import { MapPin } from "lucide-react";

const ClinicsSection = () => {
  const clinicsByRegion = [
    {
      region: "Kedah & Perlis",
      clinics: [
        "Klinik Remedic Branch Kangar (Perlis)",
        "Alor Setar (Kompleks Perniagaan Sultan Abdul Hamid)",
      ],
    },
    {
      region: "Selangor & KL",
      clinics: [
        "Klinik Evergreen Sdn Bhd (Pelabuhan Klang)",
        "PSD Medical Sdn Bhd (Port Klang)",
        "Care Clinic (Pandamaran)",
        "Klinik Alam Medic Sdn Bhd (Shah Alam)",
        "Careclinics Healthcare Services (Kota Damansara)",
        "Ampang Medical Practice (Ampang Jaya)",
        "360 Medic Holdings (Sentul, KL)",
        "ST Clinic Sdn Bhd (Brickfields, KL)",
      ],
    },
    {
      region: "Pahang",
      clinics: [
        "Raub 3 & 4 (Pusat Komersial Raub)",
      ],
    },
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-yellow mb-4">GP Clinic Dispensing Only</span>
          <h2 className="mb-6">
            Where can you find this solution?{" "}
            <span className="text-accent">Exclusively at GP Clinics.</span>
          </h2>
        </div>

        {/* Clinic Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicsByRegion.map((regionData, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border card-shadow"
            >
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">{regionData.region}</h3>
              </div>
              <ul className="space-y-3">
                {regionData.clinics.map((clinic, clinicIndex) => (
                  <li
                    key={clinicIndex}
                    className="flex items-start gap-2 text-muted-foreground text-sm"
                  >
                    <span className="text-accent mt-0.5">•</span>
                    {clinic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
