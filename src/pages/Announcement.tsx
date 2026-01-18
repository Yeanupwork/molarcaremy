import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import rinsegardLaunchImg from "@/assets/rinsegard-launch.png";
import independentClinicImg from "@/assets/independent-clinic.jpg";

const announcements = [
  {
    id: 1,
    title: "RinseGard Product Launch",
    description: "We're excited to announce the official launch of RinseGard, our revolutionary oral rinse with BFD Factor technology.",
    image: rinsegardLaunchImg,
  },
  {
    id: 2,
    title: "Collaboration: RinseGard x Independent Clinics",
    description: "Our latest clinical study shows significant improvement in biofilm disruption compared to traditional mouthwashes.",
    image: independentClinicImg,
  },
  {
    id: 3,
    title: "Webinar (Only for Healthcare Professional)",
    description: "MolarCare partners with leading dental clinics across Malaysia to bring RinseGard to more patients.",
    image: "/placeholder.svg",
  },
];

const events = [
  {
    id: 1,
    date: "15.01.26",
    time: "10AM",
    status: "upcoming" as const,
    title: "Dental Health Seminar 2026",
    description: "Join us for an interactive seminar on the importance of biofilm management in oral health.",
  },
  {
    id: 2,
    date: "20.02.26",
    time: "2PM",
    status: "upcoming" as const,
    title: "RinseGard Product Demo",
    description: "Experience the power of BFD Factor technology firsthand at our product demonstration event.",
  },
  {
    id: 3,
    date: "10.12.25",
    time: "9AM",
    status: "ended" as const,
    title: "Oral Care Workshop",
    description: "A comprehensive workshop covering best practices for maintaining optimal oral hygiene.",
  },
  {
    id: 4,
    date: "05.11.25",
    time: "11AM",
    status: "ended" as const,
    title: "Community Health Day",
    description: "Free dental check-ups and oral health education for the local community.",
  },
];

const Announcement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % announcements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom mx-auto px-4 md:px-8 py-12">
        {/* Announcements Section */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">Announcements</h1>
          <p className="text-muted-foreground mb-8">Here's what we've been working on</p>
          
          {/* Carousel */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-lg-custom overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {announcements[currentSlide].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {announcements[currentSlide].description}
                  </p>
                  <Link 
                    to="#" 
                    className="text-accent font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                
                {/* Image */}
                <div className="bg-muted aspect-video md:aspect-auto flex items-center justify-center min-h-[250px] overflow-hidden">
                  <img 
                    src={announcements[currentSlide].image} 
                    alt={announcements[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg rounded-full p-2 transition-colors hidden md:block"
            >
              <ChevronLeft className="w-5 h-5 text-navy" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg rounded-full p-2 transition-colors hidden md:block"
            >
              <ChevronRight className="w-5 h-5 text-navy" />
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? "bg-navy" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Events</h2>
          
          <div className="space-y-4">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="bg-card rounded-2xl shadow-lg-custom overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Date Box */}
                  <div className={`flex-shrink-0 px-6 py-4 sm:px-8 sm:py-6 flex flex-col items-center justify-center ${
                    event.status === "upcoming" 
                      ? "bg-gradient-to-br from-lime-400 to-lime-500" 
                      : "bg-gradient-to-br from-lime-500 to-lime-600"
                  }`}>
                    <span className="text-xl md:text-2xl font-bold text-white">{event.date}</span>
                    <span className="text-lg md:text-xl font-semibold text-white">{event.time}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-8">
                    <span className={`text-sm font-semibold uppercase tracking-wide ${
                      event.status === "upcoming" ? "text-accent" : "text-lime-600"
                    }`}>
                      {event.status === "upcoming" ? "Up Coming Event" : "Event Ended"}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-navy mt-1 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Announcement;
