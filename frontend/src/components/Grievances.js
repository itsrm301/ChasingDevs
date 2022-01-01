import React from "react";
import "./Grievances.css";
import { useHistory } from "react-router-dom";
export default function Grievances() {
    const history = useHistory();
    function GrievanceCacelButtonClicked(){
        history.push("/StudentsProfile");
    
    }
  return (
    <>
      <div class="grievances">
        <h1 class="grievances-header">
          Please register any grievanes/complaints here:
        </h1>
        <div class="grievances-block">
          <p class="grievances-instruction">
            Your Grievances/Complaints<span class="asterisk">*</span>:
          </p>
          <textarea
            class="grievances-input"
            placeholder="register your complaint here..."
          >
           
          </textarea>
        </div>
        <div class="register-and-cancel-div">
          <button
            class="grievances-cancel"
            onClick={GrievanceCacelButtonClicked}
            type="button"
          >
            Cancel
          </button>
          <button class="grievances-register" type="submit">
            Register
          </button>
        </div>
      </div>
    </>
  );
}
