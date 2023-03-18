import React, { useEffect } from "react";
import { gsap } from "gsap";

const Practice = () => {
  useEffect(() => {
    gsap.from("h1", {
      xPercent: -100,
      ease: "bounce",
      duration: 5,
    });
    gsap.from("li", {
      yPercent: -100,
      stagger: 0.2,
      duration: 2,
    });
  }, []);

  const data = [
    { heading: "one", para: "Hello World", twitterUrl: "zxcvbn" },
    { heading: "one", para: "Hello World", twitterUrl: "zx dfg sderfgcvbn" },
    { heading: "one", para: "Hello World", twitterUrl: "zxcvbn" },
    {
      heading: "one",
      para: "Hello World",
      twitterUrl: "https://www.twitter.com",
    },
  ];
  return (
    <div>
      {data.map((obj, index) => (
        <div key={index}>
          <h2>{obj.heading}</h2>
          <p>{obj.para}</p>
          <button>READ BUTTON</button>
          <a href={obj.twitterUrl}>Twitter icon</a>
        </div>
      ))}

      <div>
        <h1>Hello World</h1>
        <ul className="d-flex justify-content-center list-unstyled">
          <li className=" font_5xl mx-5 fw-bold">1</li>
          <li className=" font_5xl mx-5 fw-bold">2</li>
          <li className=" font_5xl mx-5 fw-bold">3</li>
          <li className=" font_5xl mx-5 fw-bold">4</li>
        </ul>
      </div>
      <div className="vh-100 bg-primary"></div>
      <div className="vh-100 bg-danger"></div>
      <div className="vh-100 bg-warning"></div>
      <div className="vh-100 bg-success"></div>
    </div>
  );
};

export default Practice;
