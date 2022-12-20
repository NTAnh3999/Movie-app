import React from "react";

const Section = ({ children, sectionRef }) => {
  return (
    <section className="section-content" ref={sectionRef}>
      {children}
    </section>
  );
};

export default Section;
