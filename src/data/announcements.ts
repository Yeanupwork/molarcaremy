import rinsegardLaunchImg from "@/assets/rinsegard-launch.png";
import independentClinicImg from "@/assets/independent-clinic.jpg";
import webinarFlyerImg from "@/assets/webinar-flyer.png";
import rinsegardFlyerImg from "@/assets/rinsegard-flyer.png";
import mimsAnnouncementImg from "@/assets/mims-announcement.jpg";
import moreTpaPanelsImg from "@/assets/more-tpas-announcement.jpg.asset.json";

export interface Announcement {
  id: number;
  title: string;
  description: string;
  image: string;
  detailImage: string;
}

export const announcements: Announcement[] = [
  {
    id: 5,
    title: "A New Milestone: MolarCare RinseGard Is Now Officially Listed in PMCare",
    description: "We are pleased to announce that MolarCare RinseGard is now officially listed in PMCare TPA Panel system, marking another important milestone in expanding its accessibility within the healthcare community.",
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
