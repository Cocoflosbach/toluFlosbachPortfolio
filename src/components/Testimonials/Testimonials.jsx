import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What others say about me </h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="testimonial__head">
            <h3>Joshua Mende </h3>
          </div>
          <p className="testimonial__text">
            If you're looking for someone with heart and spirit, think of Coco!
            I cannot recommend someone more.
          </p>
        </article>
        <article className="testimonial">
          <div className="testimonial__head">
            <h3>Matthew Olalekan </h3>
          </div>
          <p className="testimonial__text">
            I have worked on many projects with Coco and I can say what;s most
            outstanding is her passion for learning new things.
          </p>
        </article>
        <article className="testimonial">
          <div className="testimonial__head">
            <h3>Daniel Syril </h3>
          </div>
          <p className="testimonial__text">
            I can speak on Tolu's willingness to improve anyday. Such an
            inspiring young woman!
          </p>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
