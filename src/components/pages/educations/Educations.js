import React from "react";

export default function Educations() {
  return (
    <div>
      <div class="card">
        <h6>
          <strong className="education">EDUCATION : -</strong>
        </h6>
        <table class="striped">
          <thead>
            <tr>
              <th>Certificate</th>
              <th>Percentage</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10th</td>
              <td>62.00%</td>
              <td>Jan 2012</td>
            </tr>
            <tr>
              <td>Diploma</td>
              <td>67.00%</td>
              <td>May 2016</td>
            </tr>
            <tr>
              <td>BE</td>
              <td>7.00 (SPGA)</td>
              <td>June 2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
