import rinsegardLaunchImg from "@/assets/rinsegard-launch.png";
import independentClinicImg from "@/assets/independent-clinic.jpg";
import webinarFlyerImg from "@/assets/webinar-flyer.png";
import rinsegardFlyerImg from "@/assets/rinsegard-flyer.png";

export interface Announcement {
  id: number;
  title: string;
  description: string;
  image: string;
  detailImage: string;
}

export const announcements: Announcement[] = [
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
    description: "We are pleased to invite healthcare professionals to an exclusive webinar featuring Dr. Chng Wee Keat, Founder and CEO of Theragon Healthcare. Dr. Chng will review new anatomical evidence regarding the limited penetration of conventional rinses and explore the pharmacological mechanisms required to disrupt sessile bacteria within deep tonsillar crypts.\n\nWatch the webinar replay at the following link:\nhttps://www.youtube.com/live/mlhkMOgOEu0?si=bLdIqb6eoXPcD9CC",
    image: webinarFlyerImg,
    detailImage: webinarFlyerImg,
  },
];
