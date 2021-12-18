import React from "react";
import "./BillReimbursementPortal.css";
import axios from "axios";

export default function BillReimbursementPortal() {
  return (
    <div className="containerBillPortal">
      <div className="BillPortalHead">
        <h1>Bill Reimbursement Portal</h1>
      </div>
      <div>
        <h3>Image/Document Upload</h3>
        <input type="file" />
        <button onClick={console.log('uploaded')}>Upload!</button>
      </div>
      <div className="tableContainer">
        <table>
          <tr>
            <th>Sl.</th>
            <th>Uploaded File</th>
            <th>Roll Number</th>
            <th>Verification Status</th>
            <th>Remarks</th>
          </tr>
          <tr>
            <td>1.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <td>2.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
         
        </table>
      </div>
    </div>
  );
}
