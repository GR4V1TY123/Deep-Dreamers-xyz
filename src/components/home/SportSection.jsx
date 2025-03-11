import React, { useState, useEffect } from 'react';

const SportSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Manage current slide
  const totalSlides = 9; // Total number of sports
  const cardWidth = 360; // Adjust based on card width + margin (gap)

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Handle Next Slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Handle Previous Slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Sports array
  const sports = [
    { name: 'Running', img: 'https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Basketball', img: 'https://images.unsplash.com/photo-1525918779320-0ca02e9a8b6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YSUyMHBlcnNvbiUyMHBsYXlpbmclMjBiYXNrZXRiYWxsfGVufDB8fDB8fHww' },
    { name: 'Football', img: 'https://plus.unsplash.com/premium_photo-1661868926397-0083f0503c07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D' },
    { name: 'Tennis', img: 'https://plus.unsplash.com/premium_photo-1664303119944-4cf5302bb701?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlbm5pc3xlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Yoga', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Boxing', img: 'https://public.readdy.ai/ai/img_res/a68dbf997abdd1388ab065c30ac167a7.jpg' },
    { name: 'Swimming', img: 'https://public.readdy.ai/ai/img_res/76e640e3a1150c2417e714bbf5b9ace0.jpg' },
    { name: 'Cycling', img: 'https://public.readdy.ai/ai/img_res/d49946fc1195d1bf2e9e10504bd1bf70.jpg' },
    { name: 'Golf', img: 'https://public.readdy.ai/ai/img_res/6a0723c162a71cb21f1744fb2bacbe66.jpg' },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[60px] font-bold" style={{ fontFamily: 'Anton' }}>SHOP BY SPORT</h2>
          <p className="text-black text-lg font-light mt-2" style={{ fontFamily: 'Anton' }}>
            Unleash Your Potential — One Sport at a Time.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary transition-colors"
          >
            <i className="ri-arrow-left-line text-2xl"></i>
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary transition-colors"
          >
            <i className="ri-arrow-right-line text-2xl"></i>
          </button>
        </div>

        {/* Scrollable container */}
        <div className="overflow-hidden">
          <div
            id="sportsContainer"
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * cardWidth}px)` }}
          >
            {sports.map((sport, index) => (
              <div key={index} className="w-1/3 flex-shrink-0">
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img
                    src={sport.img}
                    alt={sport.name}
                    className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-30 flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-3xl font-bold mb-2">{sport.name}</h3>
                      <p className="text-white opacity-90">Shop {sport.name} Collection</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportSection;
