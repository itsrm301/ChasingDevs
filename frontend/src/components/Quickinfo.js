import React from "react";
import { Link } from "react-router-dom";
import './Quickinfo.css'
import img1 from './svgs/svg1.svg'
import img2 from './svgs/svg2.svg'
import img3 from './svgs/svg3.svg'
import img4 from './svgs/svg4.svg'
import img5 from './svgs/svg5.svg'
import Button from "./Button";
export default function Quickinfo() {
  return (
    <div className="quickinfo_container_main">
      <div className="quickinfo_container_1">
        <div className="quickinfo_heading" id="archive">
          ARCHIVE STATISTICS OF CDC
        </div>
        <div className="quickinfo_elements">
          <div className="quickinfo_container_years">
            <a href="https://awaaziitkgp.com/placement-analysis-phase-1-2020-21/" target="_blank" rel="noreferrer"><Button text="YEAR 2020-2021"/></a>
            <a href="https://awaaziitkgp.com/placement-statistics-2019-phase-1/" target="_blank" rel="noreferrer"><Button text="YEAR 2019-2020"/></a>
            <a href="https://awaaziitkgp.com/placement-statistics-2018-phase-1/" target="_blank" rel="noreferrer"><Button text="YEAR 2018-2019"/></a>
          </div>
          <img src={img1} alt="" srcSet="" />
        </div>
      </div>
      <div className="quickinfo_container_1">
        <div className="quickinfo_heading">
          QUICK LINKS
        </div>
        <div className="quickinfo_elements">
          <div className="quickinfo_container_years">
            <a href="http://www.iitkgp.ac.in/" target="_blank" rel="noreferrer"><Button text="IIT KGP WEBSITE"/></a>
            <a href="https://gymkhana.iitkgp.ac.in/secretaries/" target="_blank" rel="noreferrer"><Button text="TECHNOLOGY STUDENTS’ GYMKHANA"/></a>
            <a href="https://kgpmoodle.iitkgp.ac.in/moodle/login/index.php" target="_blank" rel="noreferrer"><Button text="MOODLE"/></a>
            <a href="https://medium.com/@swgiitkgp" target="_blank" rel="noreferrer"><Button text="STUDENTS’ WELFARE GROUP"/></a>
            <a href="https://yourdost.com/" target="_blank" rel="noreferrer"><Button text="APNA DOST"/></a>
          </div>
          <img src={img2} alt="" srcSet="" />
        </div>
      </div>
      <div className="quickinfo_container_1">
        <div className="quickinfo_heading">
          CONTACTS
        </div>
        <div className="quickinfo_elements">
          <div className="quickinfo_container_years">
            <Link to="/quickinfo/officebearers"><Button text="OFFICE BEARERS"/></Link>
            <Link to="/quickinfo/officestaffs"><Button text="OFFICE STAFFS"/></Link>
            <Link to="/quickinfo/secretaries"><Button text="SECRETARIES"/></Link>
          </div>
          <img src={img3} alt="" srcSet="" />
        </div>
      </div>
      <div className="quickinfo_container_1">
        <div className="quickinfo_heading">
          HALLS OF RESIDENCE
        </div>
        <div className="quickinfo_elements">
          <div className="quickinfo_container_years">
            <a href="https://wiki.metakgp.org/w/Rajendra_Prasad_Hall_of_Residence" target="_blank" rel="noreferrer"><Button text="Rajendra Prasad Hall of Residence"/></a>
            <a href="https://wiki.metakgp.org/w/Radha_Krishnan_Hall_of_Residence" target="_blank" rel="noreferrer"><Button text="Radhakrishnan Hall of Residence"/></a>
            <a href="https://wiki.metakgp.org/w/Sarojini_Naidu_/_Indira_Gandhi_Hall_of_Residence" target="_blank" rel="noreferrer"><Button text="Sarojini Naidu / Indira Gandhi Hall of Residence"/></a>
            <a href="https://wiki.metakgp.org/w/Mother_Teresa_Hall_of_Residence" target="_blank" rel="noreferrer"><Button text="Mother Teresa Hall of Residence"/></a>
            <a href="https://wiki.metakgp.org/w/Category:Halls_of_Residence" target="_blank" rel="noreferrer"><Button text="click to know more ->"/></a>
          </div>
          <img src={img4} alt="" srcSet="" />
        </div>
      </div>
      <div className="quickinfo_container_1">
        <div className="quickinfo_heading">
          SOCIETIES
        </div>
        <div className="quickinfo_elements">
          <div className="quickinfo_container_years">
            <a href="https://wiki.metakgp.org/w/Business_Club" target="_blank" rel="noreferrer"><Button text="Business Club"/></a>
            <a href="https://wiki.metakgp.org/w/Communiqu%C3%A9" target="_blank" rel="noreferrer"><Button text="Communique"/></a>
            <a href="https://wiki.metakgp.org/w/Debating_Society" target="_blank" rel="noreferrer"><Button text="Debating Society"/></a>
            <a href="https://wiki.metakgp.org/w/Eastern_Technology_Music_Society" target="_blank" rel="noreferrer"><Button text="Eastern Technology Music Society"/></a>
            <a href="https://wiki.metakgp.org/w/List_of_Societies_and_Clubs" target="_blank" rel="noreferrer"><Button text="click to know more ->"/></a>
          </div>
          <img src={img5} alt="" srcSet="" />
        </div>
      </div>
      <div className="quickinfo_container_1">
        <div className="quickinfo_heading">
          FACULTIES AND DEPARTMENTS
        </div>
        <div className="quickinfo_elements">
          <div className="quickinfo_container_years">
            <a href="http://www.iitkgp.ac.in/department/AE" target="_blank" rel="noreferrer"><Button text="List of Departments and Faculties"/></a>
            
          </div>
          <img src={img1} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
}
