import React from "react";

export default function Skills() {
  return (
    <div>
      <div className="card">
        <h6>
          <strong>PROFESSIONAL SKILLS</strong>
        </h6>
        <div>
          <div className="col">
            <p>JAVA</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "89%" }}></div>
            </div>
          </div>
          <div className="col">
            <p>REACT</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "100%" }}></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>JAVASCRIPT</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="col">
            <p>NODE-JS</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
