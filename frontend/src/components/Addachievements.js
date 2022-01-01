import React from 'react'
import "./Addachievements.css";
import { useHistory } from "react-router-dom";
export default function Addachievements() {
    const history = useHistory();
    function AddachievCancelButtonClicked(){
        history.push("/StudentsProfile");
    }
    return (
        <>
               <div id="add-achivement">
      <div id="achievement-content-input-div">
        <h1>Add Achievement</h1>
        <p  className='addAchievmentDescriptionPara'>Request TSG officials to add an achievement in Others category</p>
        <div  className='addAchievmentDescriptionPara'>
          <p class="title-text">Title<spam class="asterisk">*</spam> :</p>
          <input class="add-achivement-title inputAddAcievement" />
        </div>
        <div className='addAchievmentDescriptionPara'>
          <p class="description-text">
            Description<span class="asterisk">*</span> :
          </p>
          <textarea class="add-achievement-decription"></textarea>
        </div>
      </div>

        <button class="upload-achievement-certificate">
          Upload Certificate<span class="asterisk">*</span>
        </button>
      <div class = "add-cancel-btns">
        <button
          class="cancel-achivement-addition"
          onClick={AddachievCancelButtonClicked}
          type="button"
        >
          Cancel
        </button>
        <button class="add-achivement-button">ADD Achievement</button>
      </div>
      
    </div>
        </>
    )
}
