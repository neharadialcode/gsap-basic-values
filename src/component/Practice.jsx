import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Practice = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // gsap.from("h1", {
    //   xPercent: -100,
    //   ease: "bounce",
    //   duration: 5,
    // });
    // gsap.from("li", {
    //   yPercent: -100,
    //   stagger: 0.5,
    //   duration: 1,
    //   // repeat: -1,

    //   // yoyo: true,
    // });
    const repeatValue = gsap.timeline({
      scrollTrigger: {
        trigger: ".value",
        start: "top 50%",
        end: "bottom top",
        markers: true,
        // scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    repeatValue.fromTo(
      "p",
      {
        fontSize: "20px",
        color: "green",
        duration: 5,
      },
      {
        fontSize: "50px",
        color: "blue",
        duration: 5,
      }
    );
  }, []);

  return (
    <div>
      <div className="vh-100 bg-warning"></div>

      <div className="value">
        <h1>Hello World</h1>
        <ul className="d-flex justify-content-center list-unstyled">
          <li className=" font_5xl mx-5 fw-bold">1</li>
          <li className=" font_5xl mx-5 fw-bold">2</li>
          <li className=" font_5xl mx-5 fw-bold">3</li>
          <li className=" font_5xl mx-5 fw-bold">4</li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aut officiis
        maxime optio eaque hic dolorum molestias ipsam asperiores, voluptatem
        provident, velit sint fugit fuga impedit. Ullam quidem temporibus
        fugiat!
      </p>
      <div className="vh-100 bg-warning"></div>
    </div>
  );
};

export default Practice;
