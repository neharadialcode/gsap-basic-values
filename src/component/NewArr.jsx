import React from "react";

const NewArr = () => {
  const value = "My name is Neha Rai";
  const words = value.split(" ").map((word) => word.split(""));
  console.log(words);
  return <div>newArr</div>;
};

export default NewArr;
