import rinsegardLaunchImg from "@/assets/rinsegard-launch.png";
import independentClinicImg from "@/assets/independent-clinic.jpg";
import webinarFlyerImg from "@/assets/webinar-flyer.png";
import rinsegardFlyerImg from "@/assets/rinsegard-flyer.png";
import mimsAnnouncementImg from "@/assets/mims-announcement.jpg";
import moreTpaPanelsImg from "@/assets/more-tpas-announcement.jpg";
import perdim1 from "@/assets/perdim-1.jpg";
import perdim2 from "@/assets/perdim-2.jpg";
import perdim3 from "@/assets/perdim-3.jpg";
import perdim4 from "@/assets/perdim-4.jpg";

const perdimPhotos = [perdim1, perdim2, perdim3, perdim4];

export interface Announcement {
  id: number;
  title: string;
  description: string;
  image: string;
  detailImage: string;
  images?: string[];
}

export const announcements: Announcement[] = [
  {
    id: 7,
    title: "Theragon x PERDIM: Manufacturing Site Visit & Endorsement Agreement",
    description: "A meaningful milestone for Theragon and MolarCare RinseGard.\n\nWe were honoured to host the Executive Committee of PERDIM for a visit to the manufacturing site of MolarCare RinseGard, and the visit concluded with the signing of an Endorsement Agreement between Theragon Healthcare and PERDIM to promote MolarCare RinseGard — another important step in advancing Antibiotic Stewardship and addressing Antimicrobial Resistance (AMR).\n\nHealing in Infinite Ways.",
    image: perdim1,
    detailImage: perdim1,
    images: perdimPhotos,
  },
  {
    id: 6,
    title: "Another New Milestone",
    description: "MolarCare RinseGard is now officially listed on MiCare, HealthConnect & RedAlert.\n\nAn Innovative solution from Malaysia. Available in participating Clinics nationwide.\n\nList of all claimable TPA Panels:\n\n1) PMCare\n2) MiCare\n3) Healthconnect\n4) RedAlert Online",
    image: moreTpaPanelsImg,
    detailImage: moreTpaPanelsImg,
  },
  {
    id: 5,
    title: "A New Milestone: MolarCare RinseGard Is Now Officially Listed in all claimable TPA panels",
    description: "We are pleased to announce that MolarCare RinseGard is now officially listed in PMCare, MiCare, Healthconnect & RedAlert TPA Panel system, marking another important milestone in expanding its accessibility within the healthcare community.",
    image: "https://rkchptwhpohrbzdfetbd.supabase.co/storage/v1/object/public/assets/PMCare-Announcement1.0.png",
    detailImage: "https://rkchptwhpohrbzdfetbd.supabase.co/storage/v1/object/public/assets/PMCare-Announcement1.0.png",
  },
  {
    id: 4,
    title: "BFD Factor Recognized by MIMS",
    description: "We are honored to announce that our BFD Factor has been officially recognized for listing in the Monthly Index of Medical Specialties (MIMS).",
    image: mimsAnnouncementImg,
    detailImage: mimsAnnouncementImg,
  },
  {
    id: 1,
    title: "RinseGard Product Launch",
    description: "We're excited to announce the official launch of RinseGard, our revolutionary oral rinse with BFD Factor technology.",
    image: rinsegardLaunchImg,
    detailImage: rinsegardFlyerImg,
  },
  {
    id: 2,
    title: "Collaboration: RinseGard x Independent Clinics",
    description: "Our latest clinical study shows significant improvement in biofilm disruption compared to traditional mouthwashes. We are excited to share this evidence-based research with independent clinics nationwide.",
    image: independentClinicImg,
    detailImage: independentClinicImg,
  },
  {
    id: 3,
    title: "Webinar (Only for Healthcare Professional)",
    description: "We are pleased to invite healthcare professionals to an exclusive webinar featuring Dr. Chng Wee Keat, Founder and CEO of Theragon Healthcare. Dr. Chng will review new anatomical evidence regarding the limited penetration of conventional rinses and explore the pharmacological mechanisms required to disrupt sessile bacteria within deep tonsillar crypts.\n\nWatch the webinar replay at the following link:\nWebinar Replay",
    image: webinarFlyerImg,
    detailImage: webinarFlyerImg,
  },
];
