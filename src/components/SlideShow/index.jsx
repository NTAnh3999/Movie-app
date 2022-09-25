import React from "react";

const SlideShow = ({ children }) => {
    return (
        <section className="slideshow-container">
            <h3 className="title-section">Trending</h3>
            <div className="slideshow">{children}</div>
        </section>
    );
};

export default SlideShow;
