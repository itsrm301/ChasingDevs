import React from "react";
import "./Grievances.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Grievances() {
    const history = useHistory();
    function GrievanceCacelButtonClicked(){
        history.push("/StudentsProfile");
    
    }
    const[grievance,setGrievance]=React.useState({
     
      roll: "20EE1111",
      name:"Raghav" ,
      queryRaised:"",
      status: "pending",
      response: "",
    });
    const onSubmit = async () => {
      console.log(grievance);
      axios
        .post("/api/sgf/sgf", { ...grievance })
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e.response));
        history.push("/StudentsProfile");
    };
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
            value={grievance.queryRaised}
            onChange={(e)=>{
              setGrievance({...grievance,queryRaised:e.target.value});
              console.log(grievance.queryRaised)
            }}
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
          <button class="grievances-register" type="submit"
          onClick={()=>{
            onSubmit();
          }}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
