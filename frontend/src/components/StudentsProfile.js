import React from "react";
import "./StudentsProfile.css";

const StudentsProfile = () => {
  return (
    <body>
      <div class="students-profile">
        <nav class="navbar">Navbar</nav>
        <div class="your-achievements">
          <h2>Your achievements</h2>
          <div class="achievements-content">
            <h3> Technology</h3>
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
                  {" "}
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
            <h3> Social and Culture</h3>
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
                  {" "}
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
            <h3> Sports and games</h3>
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
              <div></div>
              <div class="buttons">
                <button class="btn">
                  {" "}
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
            <h3> Students welfare</h3>
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
                  {" "}
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
            <h3> Others</h3>
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
                  {" "}
                  <i class="fa fa-download"></i> Download Certificate
                </button>
              </div>
            </article>
          </div>
        </div>
        <div class="floating-links">
          <div class="floating-links-dark">
            <a href="#">Your Achievements</a>
          </div>
          <div class="floating-links-light">
            <a href="#">Technology</a>
          </div>
          <div class="floating-links-dark">
            <a href="#">Social and Culture</a>
          </div>
          <div class="floating-links-light">
            <a href="#">Sports and Games</a>
          </div>
          <div class="floating-links-dark">
            <a href="#">Student's Welfare</a>
          </div>
          <div class="floating-links-light">
            <a href="#">Others</a>
          </div>
        </div>
      </div>
    </body>
  );
};

export default StudentsProfile;
