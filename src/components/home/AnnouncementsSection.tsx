import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "RinseGard Launch Event",
    description: "We're excited to announce the official launch of RinseGard, our revolutionary oral rinse with BFD Factor technology.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "New Clinical Study Results",
    description: "Our latest clinical study shows significant improvement in biofilm disruption compared to traditional mouthwashes.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Partnership Announcement",
    description: "MolarCare partners with leading dental clinics across Malaysia to bring RinseGard to more patients.",
    image: "/placeholder.svg",
  },
];

const AnnouncementsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % announcements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">Announcements</h2>
        <p className="text-muted-foreground mb-8">Here's what we've been working on</p>
        
        {/* Carousel */}
        <div className="relative">
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  {announcements[currentSlide].title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {announcements[currentSlide].description}
                </p>
                <Link 
                  to="/stories/announcement" 
                  className="text-accent font-semibold flex items-center gap-1 hover:gap-2 transition-all w-fit"
                >
                  Read More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Image */}
              <div className="bg-muted aspect-video md:aspect-auto flex items-center justify-center min-h-[250px]">
                <span className="text-muted-foreground text-lg font-medium">IMAGE</span>
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
      </div>
    </section>
  );
};

export default AnnouncementsSection;
