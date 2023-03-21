import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NewFile = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        // markers: true,
        pin: true,
      },
    });
    tl.from(".heading1", {
      xPercent: -100,
      color: "red",
    });
    ScrollTrigger.matchMedia({
      "(min-width:992px)": function () {
        tl.fromTo(
          ".heading2",
          {
            xPercent: -100,
            background: `linear-gradient(
    53deg,
    rgba(129, 70, 177, 1) 32%,
    rgba(255, 0, 96, 1) 63%,
    rgba(253, 2, 95, 1) 82%,
    rgba(219, 37, 74, 1) 100%
  )`,
          },
          {
            xPercent: -20,
            background: `linear-gradient(180deg, rgb(240,150,10),rgb(149,64,20))`,
          }
        );
      },
      "(max-width:991px)": function () {
        tl.fromTo(
          ".heading2",
          {
            xPercent: -100,
            background: `linear-gradient(
    53deg,
    rgba(129, 70, 177, 1) 32%,
    rgba(255, 0, 96, 1) 63%,
    rgba(253, 2, 95, 1) 82%,
    rgba(219, 37, 74, 1) 100%
  )`,
          },
          {
            xPercent: -20,
            background: `transparent`,
          }
        );
      },
    });
  }, []);
  return (
    <>
      <div className="parent">
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="heading1">Hello</h1>
          <h1 className="heading2">Hello2</h1>
          <h1 className="heading3">Hello3</h1>
        </div>
      </div>
      <div className="vh-100 bg-warning"></div>
    </>
  );
};

export default NewFile;
