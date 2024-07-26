import React from "react";
import { feature } from "./data/feature";
import Tagline from "./Tagline";
function Featuressection() {
  return (
    <section id="features" className="flex flex-col items-center justify-center p-10">
      <Tagline>Features</Tagline>
      <h2 className="pt-3 mb-8 text-3xl font-bold text-center">
        Intelligent Form Biulding
      </h2>
      <div className="grid items-center max-w-screen-xl grid-cols-1 gap-5 mt-10 md:grid-cols-3 ">
        {feature.map((feature, index) => (
          <div key={index} className="flex items-center h-full p-6 space-x-4 bg-white border rounded-lg shadow-lg border-indigo-400/20">
            <div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 flex-start">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featuressection;
