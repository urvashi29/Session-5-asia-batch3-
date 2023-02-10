import React from "react";

const HOC = (Propect) => (props) => {
  console.log(Propect);
  const color = ["red", "blue", "pink", "black"];
  const randomColor = color[Math.floor(Math.random() * color.length)];

  return (
    <div style={{ color: randomColor }}>
      <Propect />
    </div>
  );
};

export default HOC;
