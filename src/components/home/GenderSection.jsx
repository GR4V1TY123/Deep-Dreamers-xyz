import React from "react";

const GenderSection = () => {
  const genders = [
    { title: "Men", image: "https://public.readdy.ai/ai/img_res/66dc83cc121c619e42a42bc6566b654b.jpg" },
    { title: "Women", image: "https://public.readdy.ai/ai/img_res/780258b0002ff9bd4fa04f062507241c.jpg" },
    { title: "Kids", image: "https://public.readdy.ai/ai/img_res/c369e855fff1b8f8368cc6a81ecef56e.jpg" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[80px] font-bold text-center mb-2" style={{ fontFamily: "'Anton', sans-serif" }}>
          SHOP BY GENDER
        </h2>
        <p className="text-[20px] text-center mb-12" style={{ fontFamily: "'Anton', sans-serif" }}>
          STYLE HAS NO LIMIT. COMFORT HAS NO RULES.
        </p>
        <div className="flex gap-8">
          {genders.map((gender, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img src={gender.image} alt={gender.title} className="w-full h-[500px] object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-30 flex items-end">
                <div className="p-8">
                  <h3 className="text-white text-[60px] font-bold mb-2" style={{ fontFamily: "'Anton', sans-serif" }}>
                    {gender.title}
                  </h3>
                  <p className="text-white opacity-90">Shop {gender.title}'s Collection</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenderSection;