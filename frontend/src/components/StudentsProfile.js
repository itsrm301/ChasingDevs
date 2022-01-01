import React from "react";
import "./StudentsProfile.css";
import { useHistory } from "react-router-dom";
const StudentsProfile = () => {
  
  const history = useHistory();
  function GrievanceFormClicked(){
    history.push("/Grievances");
  }
  function AddachievementsClicked(){
    history.push("/Addachievements");
  }
  return (
    <>
  <div class="students-profile">
    

      <div id="your-achievements">
        <h2>Your achievements</h2>
        <div class="achievements-content">
          <div id="technology">
            <h3>Technology</h3>
            <article class = "no-achievement">
                <p class = "no-achivement-title"> ---x---x---x--- You have no achivement in this field ---x---x---x---</p>
            </article>
            <article class="achievement">
              <p class="achievement-title">Description</p>
              <p class="achievement-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>

              <div class="buttons">
                <button class="btn">
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
          </div>
          <div id="social-and-culture">
            <h3>Social and Culture</h3>
            <article class = "no-achievement">
                <p class = "no-achivement-title"> ---x---x---x--- You have no achivement in this field ---x---x---x---</p>
            </article>
            <article class="achievement">
              <p class="achievement-title">Description</p>
              <p class="achievement-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div class="buttons">
                <button class="btn">
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
          </div>
          <div id="sports-and-games">
            <h3>Sports and games</h3>
            <article class = "no-achievement">
                <p class = "no-achivement-title"> ---x---x---x--- You have no achivement in this field ---x---x---x---</p>
            </article>
            <article class="achievement">
              <p class="achievement-title">Description</p>
              <p class="achievement-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
             
              <div class="buttons">
                <button class="btn">
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
          </div>
          <div id="students-welfare">
            <h3>Students welfare</h3>
            <article class = "no-achievement">
                <p class = "no-achivement-title"> ---x---x---x--- You have no achivement in this field ---x---x---x---</p>
            </article>
            <article class="achievement">
              <p class="achievement-title">Description</p>
              <p class="achievement-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div class="buttons">
                <button class="btn">
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
          </div>
          <div id="others">
            <h3>Others</h3>
            <article class = "no-achievement">
                <p class = "no-achivement-title"> ---x---x---x--- You have no achivement in this field ---x---x---x---</p>
            </article>
            <article class="achievement">
              <p class="achievement-title">Description</p>
              <p class="achievement-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div class="buttons">
                <button class="btn">
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
            <article class="achievement">
              <p class="achievement-title">Description</p>
              <p class="achievement-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div class="buttons">
                <button class="btn">
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
            <button class="add-other-achievement-btn" onClick={AddachievementsClicked}>
                Request to add an achivement in Others category
            </button>
          </div>
        </div>
      </div>
      <div class="floating-links">
        <div class="floating-links-dark">
          <a href="#your-achievements">Your Achievements</a>
        </div>
        <div class="floating-links-light">
          <a href="#technology">Technology</a>
        </div>
        <div class="floating-links-dark">
          <a href="#social-and-culture">Social and Culture</a>
        </div>
        <div class="floating-links-light">
          <a href="#sports-and-games">Sports and Games</a>
        </div>
        <div class="floating-links-dark">
          <a href="#students-welfare">Student's Welfare</a>
        </div>
        <div class="floating-links-light">
          <a href="#others">Others</a>
        </div>
        <div id="students-grievances-form" onClick={GrievanceFormClicked}>
           Student's Grievances form
        </div>
      </div>
    
      {/* </Grievances> */}
      </div>
    </>
    
  );
};

export default StudentsProfile;
