import React from "react";
import ImgProfile from "../../../images/prasad.jpg";
export default function Profile() {
  return (
    <div>
      <div>
        <div>
          <img src={ImgProfile} className="image" />
        </div>
        <div>
          <h4>Prasad Nimbaji Chaudhari</h4>
        </div>
        <div>
          <h5>Node Full Stack Developer</h5>
        </div>
      </div>
    </div>
  );
}
