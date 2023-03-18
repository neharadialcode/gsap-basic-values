import React from "react";
import gsap from "gsap-trial";
import { useLayoutEffect } from "react";
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  useLayoutEffect(() => {
    let text = new SplitText(".split", { type: "chars" });
    let chars = text.chars;
    const value = gsap.timeline({
      scrollTrigger: {
        trigger: ".value",
        start: "top 50%",
        end: "bottom center",
        markers: true,
      },
    });
    value.from(chars, {
      yPercent: 50,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "back(5)",
    });
  }, []);
  return (
    <>
      <div className="vh-100"></div>
      <div className="vh-100 bg-primary"></div>
      <div className="value ">
        <div className="split">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quisquam eaque unde earum aspernatur laborum veniam, nesciunt
            repudiandae consequuntur perferendis, porro culpa, amet deleniti sed
            voluptate debitis officia velit quas.
          </h1>
        </div>{" "}
      </div>
      <div className="vh-100 bg-primary"></div>
    </>
  );
};

export default About;
