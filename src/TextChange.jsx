import React, { useState } from "react";

function TextChange() {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={() => setText("I am Gaytri Dhore")}>
        Change Text
      </button>
    </div>
  );
}

export default TextChange;