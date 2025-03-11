import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ShoeModel = ({ modelPath, color, scale }) => {
  const { scene } = useGLTF(modelPath);

  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.material.color.set(color);
    }
  });

  return <primitive object={scene} scale={scale} position={[0, 0, 0]} frustumCulled={false} />;
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shoeColors, setShoeColors] = useState({
    jordan1: "#ff0000",
    dunkLow: "#00ff00",
  });

  const colorOptions = ["#ff0000", "#0000ff", "#00ff00", "#ffff00"];

  const handleColorChange = (model, color) => {
    setShoeColors((prev) => ({ ...prev, [model]: color }));
  };

  const slides = [
    {
      title: "AIR JORDAN RETRO 1",
      price: "₹9,499",
      originalPrice: "₹12,999",
      rating: "4.7",
      reviews: "4,500",
      modelPath: "/NikeJordan1/nike_air_jordan.glb",
      colorKey: "jordan1",
      scale: 0.8,
    },
    {
      title: "DUNK LOW PANDA",
      price: "₹6,999",
      originalPrice: "₹8,999",
      rating: "4.9",
      reviews: "3,800",
      modelPath: "/NikeShoe2/Nike_Air_Shoes.glb",
      colorKey: "dunkLow",
      scale: 10,
    },
  ];

  return (
    <div className="overflow-hidden relative">
      <div
        className="carousel flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide bg-white min-h-screen relative flex flex-col">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center relative z-10 flex-grow">
              <div className="w-1/2 pr-8">
                <h1 className="text-black text-6xl font-bold mb-4">{slide.title}</h1>
                <div className="flex items-center mb-4">
                  <span className="text-gray-400 line-through text-2xl mr-3">{slide.originalPrice}</span>
                  <span className="text-primary text-3xl font-bold">{slide.price}</span>
                </div>
                <div className="flex items-center mb-8">
                  <span className="text-yellow-400 text-lg mr-1">⭐</span>
                  <span className="font-semibold mr-2">{slide.rating}</span>
                  <span className="text-gray-600">({slide.reviews} reviews)</span>
                </div>
                <button className="bg-black text-white px-8 py-4 !rounded-button hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-[17px] font-bold">
                  SHOP NOW
                </button>
              </div>

              {/* 3D Shoe Model */}
              <div className="w-1/2">
                <div
                  className="parallax-wrapper"
                  style={{
                    height: "500px",
                    backgroundImage: "url('/blue bg.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Canvas className="w-full h-full" style={{ height: "100%" }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 5]} intensity={1.5} />
                    <OrbitControls enableZoom={false} />
                    <ShoeModel modelPath={slide.modelPath} color={shoeColors[slide.colorKey]} scale={slide.scale} />
                  </Canvas>
                </div>

                {/* Color Picker */}
                <div className="mt-4">
                  <p className="text-gray-700 mb-2 font-semibold text-lg">Choose Your Color:</p>
                  <div className="flex space-x-3">
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        className={`w-12 h-12 rounded-full border-4 transition-all duration-300 transform ${shoeColors[slide.colorKey] === color ? "border-black scale-110 shadow-lg" : "border-gray-300"
                          }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorChange(slide.colorKey, color)}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Next Button - Inside Carousel */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute bottom-10 right-10 bg-black text-white p-4 rounded-full hover:bg-gray-800 transition"
            >
              Next
            </button>
          </div>
        ))}

      </div>
      <div className="video-container">
        <video
          width="100%"
          height="60%"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default Carousel;
