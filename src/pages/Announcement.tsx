import { useState } from "react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Dialog,
  DialogContent,
  DialogOverlay } from
"@/components/ui/dialog";
import { announcements } from "@/data/announcements";

const events = [
{
  id: 1,
  date: "Feb 2026",
  time: "27.02.26 | 11AM",
  status: "upcoming" as const,
  title: "Webinar (Only for Healthcare Professional)",
  description: "We are pleased to invite healthcare professionals to an exclusive webinar featuring Dr. Chng Wee Keat, Founder and CEO of Theragon Healthcare. Dr. Chng will review new anatomical evidence regarding the limited penetration of conventional rinses and explore the pharmacological mechanisms required to disrupt sessile bacteria within deep tonsillar crypts.\n\nWatch the webinar replay at the following link:\nhttps://www.youtube.com/live/mlhkMOgOEu0?si=bLdIqb6eoXPcD9CC"
},
{
  id: 3,
  date: "Nov 2025",
  time: "                                                                                                                    ",
  status: "ongoing" as const,
  title: "Collaboration: RinseGard x Independent Clinics",
  description: "Our latest clinical study shows significant improvement in biofilm disruption compared to traditional mouthwashes. We are excited to share this evidence-based research with independent clinics nationwide."
},
{
  id: 4,
  date: "Oct 2025 ",
  time: "                                                                          ",
  status: "ongoing" as const,
  title: "RinseGard Product Launching",
  description: "We're excited to announce the official launch of RinseGard, our revolutionary oral rinse with BFD Factor technology."
}];


const Announcement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                  <p className="text-muted-foreground mb-6 whitespace-pre-line">
                    {announcements[currentSlide].description.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                      part.match(/^https?:\/\//) ? (
                        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-accent underline break-all">{part}</a>
                      ) : part
                    )}
                  </p>
                  <button
                    onClick={() => setSelectedImage(announcements[currentSlide].detailImage)}
                    className="text-accent font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    
                    Read More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Image */}
                <div className="bg-muted aspect-video md:aspect-auto flex items-center justify-center min-h-[250px] overflow-hidden">
                  <img
                    src={announcements[currentSlide].image}
                    alt={announcements[currentSlide].title}
                    className="w-full h-full object-fill" />
                  
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg rounded-full p-2 transition-colors hidden md:block">
              
              <ChevronLeft className="w-5 h-5 text-navy" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg rounded-full p-2 transition-colors hidden md:block">
              
              <ChevronRight className="w-5 h-5 text-navy" />
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {announcements.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ?
              "bg-navy" :
              "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`
              } />

            )}
          </div>
        </section>

        {/* Events Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Events</h2>
          
          <div className="space-y-4">
            {events.map((event) =>
            <div
              key={event.id}
              className="bg-card rounded-2xl shadow-lg-custom overflow-hidden">
              
                <div className="flex flex-col sm:flex-row">
                  {/* Date Box */}
                  <div className={`flex-shrink-0 px-6 py-4 sm:px-8 sm:py-6 flex flex-col items-center justify-center ${
                event.status === "upcoming" ?
                "bg-gradient-to-br from-lime-400 to-lime-500" :
                "bg-gradient-to-br from-lime-500 to-lime-600"}`
                }>
                    <span className="text-xl md:text-2xl font-bold text-white">{event.date}</span>
                    <span className="text-lg md:text-xl font-semibold text-white">{event.time}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-8">
                    <span className={`text-sm font-semibold uppercase tracking-wide ${
                  event.status === "upcoming" ? "text-accent" : event.status === "ongoing" ? "text-blue-600" : "text-lime-600"}`
                  }>
                      {event.status === "upcoming" ? "Up Coming Event" : event.status === "ongoing" ? "EVENT ONGOING" : "Event Ended"}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-navy mt-1 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {/* Full-screen Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors">
            
            <X className="w-6 h-6" />
          </button>
          {selectedImage &&
          <img
            src={selectedImage}
            alt="Full size announcement"
            className="w-full h-full max-h-[90vh] object-contain rounded-lg" />

          }
        </DialogContent>
      </Dialog>
    </div>);

};

export default Announcement;