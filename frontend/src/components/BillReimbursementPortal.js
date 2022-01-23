import React, { useState, useEffect } from "react";
import "./BillReimbursementPortal.css";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
export default function BillReimbursementPortal() {
  const history = useHistory();
  const location = useLocation();
  const remark="Nice one ,Amdani athanni kharcha ruapiya",rollType="society",orgsnName="13";
  const [brpData,setBrpData]=useState({lastUpdaterollno:'20EE1111',rollType:'society',organisationName:location.state.Socname,status:'pending',remark:''});
  const onOpen=async()=>{
    axios.get("/api/brp/getbrp/"+orgsnName).then(res=>console.log(res)).catch(e=>console.log(e.response));
    
  }
  const onSave=async()=>{
    console.log(brpData);
    axios
      .post("/api/brp/addBrp", { ...brpData })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.response));
  };
  const onUpdate = async () => {
    axios
      .post("/api/brp/updateBrp", { ...brpData })
      .then((res) => console.log(res))
      .catch((e) => console.log(e.response.data));
  };
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <div className="containerBillPortal">
      <div className="BillPortalHead">
        <h1>Bill Reimbursement Portal</h1>
      </div>
      <div>
        <h3>Image/Document Upload</h3>
        <input
          type="file"
          style={{ color: "white", backgroundColor: "white" }}
        />
        <button onClick={console.log("uploaded")}>Upload!</button>
      </div>
      <div>
        <p className="labelcss">Organisation Name</p>
        <input style={{color:'black',backgroundColor:'white'}} type="text" name="organisationName" value={brpData.organisationName} onChange={(e)=>{setBrpData({...brpData,organisationName:e.target.value});console.log(brpData.organisationName)}}/>
      </div>
      <div style={{flexDirection: 'row'}}>
        <div className="statusinputBillPortal">
        <span className="labelcss">Status</span>
        <input type="checkbox" className="statusboxBillPortal"/>
        {/* <input style={{color:'black',backgroundColor:'white'}} type="text" name="organisationName" value={brpData.organisationName} onChange={(e)=>{setBrpData({...brpData,organisationName:e.target.value});console.log(brpData.organisationName)}}/> */}
        </div>
      </div>
      <div>
        <p className="labelcss">Remarks</p>
        {rollType === "society" ? (
          <p style={{ color: "white" }}>{remark}</p>
        ) : (
          <input
            style={{ color: "black", backgroundColor: "white" }}
            type="text"
            name="organisationName"
            value={brpData.remark}
            onChange={(e) => {
              setBrpData({ ...brpData, remark: e.target.value });
              console.log(brpData.remark);
            }}
          />
        )}
      </div>
      <div>
        <button onClick={() => onSave()} className="saveBrpBtn">
          Save
        </button>
        <button onClick={() => onUpdate()} className="updateBrpBtn">
          Update
        </button>
      </div>
      
    </div>
  );
}
