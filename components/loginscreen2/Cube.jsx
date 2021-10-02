import React, { useState } from "react";
const { detect } = require("detect-browser");
const browser = detect();
if (browser) {
  console.log(browser.name);
  console.log(browser.version);
  console.log(browser.os);
}
const Cube = ({
  selectAllFront,
  selectAllBottom,
  selectAllLeft,
  selectAllRight,
  selectAllTop,
  selectAllBack,
}) => {
  const [faceLeft, setFaceLeft] = useState("");
  const toggleFaceLeft = () => {
    if (faceLeft === "") {
      setFaceLeft("face-left");
    } else {
      if (faceLeft === "face-left") {
        setFaceLeft("");
      }
    }
  };
  const [faceRight, setFaceRight] = useState("");
  const toggleFaceRight = () => {
    if (faceRight === "") {
      setFaceRight("face-right");
    } else {
      if (faceRight === "face-right") {
        setFaceRight("");
      }
    }
  };
  const [faceFront, setFaceFront] = useState("");
  const toggleFaceFront = () => {
    if (faceFront === "") {
      setFaceFront("face-front");
    } else {
      if (faceFront === "face-front") {
        setFaceFront("");
      }
    }
  };
  const [faceBottom, setFaceBottom] = useState("");
  const toggleFaceBottom = () => {
    if (faceBottom === "") {
      setFaceBottom("face-bottom");
    } else {
      if (faceBottom === "face-bottom") {
        setFaceBottom("");
      }
    }
  };
  const [faceTop, setFaceTop] = useState("");
  const toggleFaceTop = () => {
    if (faceTop === "") {
      setFaceTop("face-top");
    } else {
      if (faceTop === "face-top") {
        setFaceTop("");
      }
    }
  };
  const [faceBack, setFaceBack] = useState("");
  const toggleFaceBack = () => {
    if (faceBack === "") {
      setFaceBack("face-back");
    } else {
      if (faceBack === "face-back") {
        setFaceBack("");
      }
    }
  };

  return (
    <>
      {browser.name === "safari" ||
      browser.name === "ios" ||
      browser.name === "fxios" ||
      browser.name === "crios" ? (
        <>
          <h1 className="header2">Sagbladregister</h1>
        </>
      ) : (
        <div className="container-cube">
          <div className="cube">
            <div
              className={`face front ${faceFront} ${selectAllFront}`}
              onClick={toggleFaceFront}
            >
              <img
                className="cube-img"
                src="https://coop.no/globalassets/coop-obs-bygg/brands/moelven/moelven_logo.blaa.png"
                alt=""
              />
            </div>
            <div
              className={`face bottom ${faceBottom} ${selectAllBottom}`}
              onClick={toggleFaceBottom}
            >
              Sagbladregister
            </div>
            <div
              className={`face left ${faceLeft} ${selectAllLeft}`}
              onClick={toggleFaceLeft}
            >
              <img
                className="cube-img-link"
                src="https://files.hoechsmann.com/lexikon/img/500/lin_logo_2018.png"
                alt=""
              />
            </div>
            <div
              className={`face right ${faceRight} ${selectAllRight}`}
              onClick={toggleFaceRight}
            >
              <img
                className="cube-img-link"
                src="https://upload.wikimedia.org/wikipedia/commons/0/07/Kanefusa_mark3.png"
                alt=""
              />
            </div>
            <div
              className={`face top ${faceTop} ${selectAllTop}`}
              onClick={toggleFaceTop}
            >
              <img
                className="cube-img-kvarnstrands"
                src="https://admin.mekke.no/data/logos/2575.jpg?0fdb77d0367a54aa6aa01e52d022fcaa"
                alt=""
              />
            </div>
            <div
              className={`face back ${faceBack} ${selectAllBack}`}
              onClick={toggleFaceBack}
            >
              <img
                className="cube-img-vollmer"
                src="https://upload.wikimedia.org/wikipedia/de/thumb/0/04/Vollmer-logo.svg/1200px-Vollmer-logo.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cube;
