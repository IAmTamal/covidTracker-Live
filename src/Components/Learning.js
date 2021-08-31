//Learning useState hooks
//Use effect is a type of side effect.
import React, { useState } from "react";

const Learning = () => {
  const [myName, setmyName] = useState("BRO");

  const changeName = () => {
    if (myName === "BRO") setmyName("ONII-CHAN");
    else setmyName("BRO");
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2>{myName}</h2>

      <button
        className="btn my-3"
        onClick={changeName}
        style={{ backgroundColor: "red" }}
      >
        Click me
      </button>
    </div>
  );
};

export default Learning;
