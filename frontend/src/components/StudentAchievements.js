import React from "react";

const StudentAchievements = () => {
  return (
    <body>
      <h2>Add achievement</h2>
      <div>
        <p>
          Title<spam class="asterisk">*</spam>:
        </p>
        <input class="add-achivement-title" />
      </div>
      <div>
        <p>
          Description<span class="asterisk">*</span>:
        </p>
        <input class="add-achievement-decription" />
      </div>
      <button class="upload-achivement">
        Upload<span class="asterisk">*</span>
      </button>
      <button class="cancel-achivement-addition">
        Cancel<span class="asterisk">*</span>
      </button>
      <button class="add-achivement-button">
        ADD<span class="asterisk">*</span>
      </button>
    </body>
  );
};

export default StudentAchievements;
