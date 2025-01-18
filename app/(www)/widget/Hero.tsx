import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero-bg.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-white mt-14  mx-auto flex flex-col items-start text-left px-4">
        <h2 className="text-3xl md:text-5xl font-bold  mb-6 max-w-lg">
          Transforming farming for a greener world
        </h2>
        <p className="text-lg  max-w-2xl mb-8">
          Join the movement towards greener agriculture. Explore our solutions.
        </p>
        <Button>Go green</Button>
      </div>
    </section>
  );
};

export default Hero;
