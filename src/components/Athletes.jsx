import { useState, useRef } from "react";

const athletes = [
  {
    name: "Bradley Thompson",
    position: "Point Guard | Boston Celtics",
    quote: "Jordan's are part of my DNA. Been rocking them since 2019.",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg",
  },
  {
    name: "Marcus Williams",
    position: "Small Forward | Dallas Mavericks",
    quote: "The perfect blend of style and performance. Jordan partner since 2020.",
    image: "boy2.jpeg",
  },
  {
    name: "James Anderson",
    position: "Power Forward | New Orleans Pelicans",
    quote: "Jordan Brand represents excellence. Proud member since 2021.",
    image: "boy3.jpeg",
  },
  {
    name: "Luka Doncic",
    position: "Point Guard | Dallas Mavericks",
    quote: "Jordan Brand represents excellence. Proud to be part of the legacy since 2019.",
    image: "boy4.jpeg",
  },
  {
    name: "Michael Chen",
    position: "Center | Miami Heat",
    quote: "Jordan Brand embodies greatness. Honored to join the family in 2023.",
    image: "https://public.readdy.ai/ai/img_res/65f065ef3ba84cfaabc938e2179c06a1.jpg",
  },
  {
    name: "Elena Rodriguez",
    position: "Forward | Las Vegas Aces",
    quote: "",
    image: "girl.jpeg",
  },
];

export default function Athletes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const slideCarousel = (direction) => {
    const maxIndex = athletes.length - 3;
    let newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    newIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentIndex(newIndex);
  };

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
      <section className="flex-1">
        <h2 className="text-6xl font-['Anton'] text-center mb-8 tracking-wider">
          JORDAN BRAND FEATURED ATHLETES
        </h2>
        <div className="relative">
          <div className="carousel overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {athletes.map((athlete, index) => (
                <div key={index} className="min-w-[33.333%] px-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg h-[calc(100vh-100px)]">
                    <div className="carousel-images w-full h-full">
                      <img
                        src={athlete.image}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-white text-xl font-bold" style={{fontFamily: "Montserrat"}}>{athlete.name}</h3>
                      <p className="text-white/80">{athlete.position}</p>
                      {athlete.quote && <p className="text-white/80 text-sm mt-1">"{athlete.quote}"</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer"
            onClick={() => slideCarousel("left")}
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer"
            onClick={() => slideCarousel("right")}
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>
      </section>
    </main>
  );
}
