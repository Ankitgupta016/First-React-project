import React, { useState } from "react";
import "./layout.css"

const Layout = () => {
  const [containerData, setContanerData] = useState({
    backgroundcColor: " rgb(248, 231, 47)",
    text: "1",
  });
  function handleClick(color, text) {
    setContanerData({ backgroundcColor: color, text: text });
  }
  return (
    <div>

      <div className="container">
      <div className="container_1">
       <div
          className="gold gold1"
          onClick={() => handleClick("rgb(248, 231, 47)", "1")}
        >
          1
        </div>
        <div className="gold Red" onClick={() => handleClick("red", "2")}>
          2
        </div>
        <div className="gold green" onClick={() => handleClick("green", "3")}>
          3
        </div>
        <div className="gold blue" onClick={() => handleClick("#25255b", "4")}>
          4
        </div>
        <div className="gold aqua" onClick={() => handleClick("aqua", "5")}>
          5
        </div>
        <div className="gold brown" onClick={() => handleClick("#802222", "6")}>
          6
        </div>
        <div className="gold pink " onClick={() => handleClick("pink", "7")}>
          7
        </div>
      </div>
      <div
        className="container_2"
        style={{ backgroundColor: containerData.backgroundcColor }}
      >
        {containerData.text}
      </div>
    </div>
    </div>
    
  );
};
export default Layout;
