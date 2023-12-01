import SectionTitle from "@/components/Common/SectionTitle";
import Features from "@/components/Features";
import SingleFeature from "@/components/Features/SingleFeature";
import featuresData from "@/components/Features/featuresData";
import React from "react";

const Service = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container pt-11">
          <SectionTitle
            title="Services We Provide"
            paragraph="There are many variations of services that we provide."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
