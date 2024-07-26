import React from "react";
import { pricing } from "./data/pricing";
import Plancard from "./Plancard";
import Tagline from "./Tagline";
function Pricingsection() {
  return (
    <section id="pricing" className="flex flex-col justify-center mt-20 mb-10 text-center">
      <Tagline>Pricing</Tagline>
      <h2 className="pt-3 mb-8 text-3xl font-bold text-center">
        Flexible Pricing to Fit your Growth
      </h2>
      <div className="grid items-center max-w-screen-xl grid-cols-1 gap-5 mt-5 md:grid-cols-3">
        {
        pricing.map((plan, index) => (
          <Plancard
            key={index}
            price={plan.price}
            title={plan.title}
            description={plan.description}
            features={plan.features}
            ispopular={plan.ispopular}
          />
        ))}
      </div>
    </section>
  );
}

export default Pricingsection;
