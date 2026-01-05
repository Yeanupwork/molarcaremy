import { MapPin } from "lucide-react";

const clinics = [
  {
    name: "Klinik Remedic (Kangar)",
    address: "271 & 279, Taman Pengkalan Asam, Jln Baru, Kangar-Alor Setar, 01000 Kangar, Perlis"
  },
  {
    name: "Klinik Remedic (Raub)",
    address: "3 & 4 (Tingkat Bawah), Pusat Komersial Raub, Jalan Komersial Utama, 27600 Raub, Pahang"
  },
  {
    name: "Klinik Remedic (Alor Setar)",
    address: "No. 92, Ground Floor, Kompleks Perniagaan Sultan Abdul Hamid, Persiaran Sultan Abdul Hamid, Taman Purnama, 05050 Alor Setar, Kedah"
  },
  {
    name: "Klinik Evergreen Sdn Bhd",
    address: "43, Jalan Ehsan Perdana 7/KS5, Di Jalan Pandamaran, 42000 Pelabuhan Klang, Selangor"
  },
  {
    name: "PSD Medical Sdn Bhd",
    address: "No.163C, Jalan 42, Kaw.10 Pandamaran, 42000 Port Klang, Selangor"
  },
  {
    name: "Care Clinic (Pandamaran)",
    address: "59, Ground Floor, Jalan Ehsan Perdana 7/KS5, Off Jalan Pandamaran, 42000 Pelabuhan Klang, Selangor"
  },
  {
    name: "Klinik Alam Medic Sdn Bhd (HQ)",
    address: "41 (Tingkat 1), Jalan Makmur 25/64, Taman Sri Muda, 40400 Shah Alam, Selangor"
  },
  {
    name: "Careclinics Healthcare Services Sdn Bhd",
    address: "A-05-32 & 33 Kompleks Perindustrian Emhub, Psrn Surian Sek 3 Tmn Sains Selangor Kota Damansara, 47810 Petaling Jaya, Selangor"
  },
  {
    name: "Ampang Medical Practice Sdn Bhd",
    address: "18A, Lorong Kolam Air Lama 1, 68000 Ampang Jaya, Selangor"
  },
  {
    name: "360 Medic Holdings Sdn Bhd",
    address: "03A-18 Skyawani Commercial, No. 27, Jalan Sentul Perdana, 51100 Kuala Lumpur"
  },
  {
    name: "ST Clinic Sdn Bhd",
    address: "23, Jalan Tun Sambanthan 4, Brickfields, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
  }
];

const ClinicsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge badge-yellow mb-4">GP Clinic Dispensing Only</span>
          <h2 className="mb-4">
            Where can you find this solution?{" "}
            <span className="text-accent">Exclusively at GP Clinics.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Available at licensed GP clinics across Malaysia.
          </p>
        </div>

        {/* Clinic Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border card-shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{clinic.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{clinic.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
