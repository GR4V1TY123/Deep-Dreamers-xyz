import React from "react";

const JordanCollection = () => {
  return (
    <div className="bg-white min-h-24 py-12">
      <main className="container mx-auto px-4">
        <h2 className="text-[60px] font-['Anton'] text-center mb-12">
          ICONIC JORDAN COLLECTION
        </h2>
        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {shoes.map((shoe, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
              style={{ gridColumn: shoe.colSpan, gridRow: shoe.rowSpan }}
            >
              <img
                src={shoe.image}
                className="w-full h-full object-cover"
                alt={shoe.name}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-2xl font-bold">{shoe.name}</h3>
                <p className="text-white/90 text-sm">{shoe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const shoes = [
  {
    name: "Air Jordan 1 'Chicago'",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/852a384c-a6ef-45af-9bf7-2ed47d64ae4f/AIR+JORDAN+1+MID.png",
    description: "The Original Legend",
    colSpan: "span 1", // Occupies 2 columns
    rowSpan: "span 1",
  },
  {
    name: "Air Jordan 11 'Space Jam'",
    image: "https://public.readdy.ai/ai/img_res/c266d830d8571e6b0c6e0bef05463017.jpg",
    description: "A Cinematic Icon",
    colSpan: "span 2",
    rowSpan: "span 1",
  },
  {
    name: "Air Jordan 3 'Black Cement'",
    image: "https://public.readdy.ai/ai/img_res/c6a9455ee9d1dba54e03d28eaaa3032a.jpg",
    description: "Timeless Design",
    colSpan: "span 1",
    rowSpan: "span 1",
  },
  {
    name: "Air Jordan 4 'Bred'",
    image: "https://public.readdy.ai/ai/img_res/21eff05de71c480ef009f3207f4108c7.jpg",
    description: "The Shot Legacy",
    colSpan: "span 1",
    rowSpan: "span 1",
  },
  {
    name: "Air Jordan 6 'Infrared'",
    image: "https://public.readdy.ai/ai/img_res/169173826ef6f660822d764b4054dc90.jpg",
    description: "Championship DNA",
    colSpan: "span 1",
    rowSpan: "span 1",
  },
];

export default JordanCollection;