import React from "react";

const Features = () => {
  const features = [
    {
      icon: "ri-medal-line",
      title: "Premium Quality",
      description: "We use only the finest materials to ensure lasting comfort and durability.",
    },
    {
      icon: "ri-footprint-line",
      title: "Comfort Fit",
      description: "Engineered for athletes, designed for everyone. Experience unmatched comfort.",
    },
    {
      icon: "ri-global-line",
      title: "Global Shipping",
      description: "Fast and reliable worldwide shipping to bring Nike excellence to your doorstep.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <i className={`${feature.icon} text-primary text-4xl`}></i>
              </div>
              <h3 className="text-black text-[28px] font-bold mb-4" style={{ fontFamily: "Anton" }}>
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;