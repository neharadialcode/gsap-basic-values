import React, { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const value = "HELLO WORLD MY NAME IS NEHA";
  const newArr = value.split(" ").map((obj) => obj.split(""));
  console.log(newArr, "updated");
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".heading", {
      xPercent: -200,
      ease: "bounce",
      duration: 2,
    });
    gsap.from(".text_split_child", {
      autoAlpha: 0,
      yPercent: 50,
      stagger: 0.1,
    });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="heading">Hello</h1>
            <div className="text_split">
              {newArr.map((obj, i) => (
                <span key={i} className="text-nowrap d-inline-block">
                  &nbsp;
                  {obj.map((obj, i) => (
                    <span key={i} className="text_split_child  d-inline-block">
                      {obj}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
