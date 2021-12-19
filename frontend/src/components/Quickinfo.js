import React from "react";
import { Link } from "react-router-dom";
import './Quickinfo.css'
import img1 from './svgs/svg1.svg'
import img2 from './svgs/svg2.svg'
import img3 from './svgs/svg3.svg'
import img4 from './svgs/svg4.svg'
import img5 from './svgs/svg5.svg'
export default function Quickinfo() {
  return (
    <div className="container_main">
      <div className="container_1">
        <div className="heading" id="archive">
          ARCHIVE STATISTICS OF CDC
        </div>
        <div className="elements">
          <div className="container_years">
            <a href="https://awaaziitkgp.com/placement-analysis-phase-1-2020-21/" target="_blank" rel="noreferrer"><p>YEAR 2020-2021</p></a>
            <a href="https://awaaziitkgp.com/placement-statistics-2019-phase-1/" target="_blank" rel="noreferrer"><p>YEAR 2019-2020</p></a>
            <a href="https://awaaziitkgp.com/placement-statistics-2018-phase-1/" target="_blank" rel="noreferrer"><p>YEAR 2018-2019</p></a>
          </div>
          <img src={img1} alt="" srcSet="" />
        </div>
      </div>
      <div className="container_1">
        <div className="heading">
          QUICK LINKS
        </div>
        <div className="elements">
          <div className="container_years">
            <a href="http://www.iitkgp.ac.in/" target="_blank" rel="noreferrer"><p>IIT KGP WEBSITE</p></a>
            <a href="https://gymkhana.iitkgp.ac.in/secretaries/" target="_blank" rel="noreferrer"><p>TECHNOLOGY STUDENTS’ GYMKHANA</p></a>
            <a href="https://kgpmoodle.iitkgp.ac.in/moodle/login/index.php" target="_blank" rel="noreferrer"><p>MOODLE</p></a>
            <a href="https://medium.com/@swgiitkgp" target="_blank" rel="noreferrer"><p>STUDENTS’ WELFARE GROUP</p></a>
            <a href="https://yourdost.com/" target="_blank" rel="noreferrer"><p>APNA DOST</p></a>
          </div>
          <img src={img2} alt="" srcSet="" />
        </div>
      </div>
      <div className="container_1">
        <div className="heading">
          CONTACTS
        </div>
        <div className="elements">
          <div className="container_years">
            <Link to="/quickinfo/officebearers"><p>OFFICE BEARERS</p></Link>
            <Link to="/quickinfo/officestaffs"><p>OFFICE STAFFS</p></Link>
            <Link to="/quickinfo/secretaries"><p>SECRETARIES</p></Link>
          </div>
          <img src={img3} alt="" srcSet="" />
        </div>
      </div>
      <div className="container_1">
        <div className="heading">
          HALLS OF RESIDENCE
        </div>
        <div className="elements">
          <div className="container_years">
            <a href="https://wiki.metakgp.org/w/Rajendra_Prasad_Hall_of_Residence" target="_blank" rel="noreferrer"><p>Rajendra Prasad Hall of Residence</p></a>
            <a href="https://wiki.metakgp.org/w/Radha_Krishnan_Hall_of_Residence" target="_blank" rel="noreferrer"><p>Radhakrishnan Hall of Residence</p></a>
            <a href="https://wiki.metakgp.org/w/Sarojini_Naidu_/_Indira_Gandhi_Hall_of_Residence" target="_blank" rel="noreferrer"><p>Sarojini Naidu / Indira Gandhi Hall of Residence</p></a>
            <a href="https://wiki.metakgp.org/w/Mother_Teresa_Hall_of_Residence" target="_blank" rel="noreferrer"><p>Mother Teresa Hall of Residence</p></a>
            <a href="https://wiki.metakgp.org/w/Category:Halls_of_Residence" target="_blank" rel="noreferrer"><p>click to know more {`->`}</p></a>
          </div>
          <img src={img4} alt="" srcSet="" />
        </div>
      </div>
      <div className="container_1">
        <div className="heading">
          SOCIETIES
        </div>
        <div className="elements">
          <div className="container_years">
            <a href="https://wiki.metakgp.org/w/Business_Club" target="_blank" rel="noreferrer"><p>Business Club</p></a>
            <a href="https://wiki.metakgp.org/w/Communiqu%C3%A9" target="_blank" rel="noreferrer"><p>Communique</p></a>
            <a href="https://wiki.metakgp.org/w/Debating_Society" target="_blank" rel="noreferrer"><p>Debating Society</p></a>
            <a href="https://wiki.metakgp.org/w/Eastern_Technology_Music_Society" target="_blank" rel="noreferrer"><p>Eastern Technology Music Society</p></a>
            <a href="https://wiki.metakgp.org/w/List_of_Societies_and_Clubs" target="_blank" rel="noreferrer"><p>click to know more {`->`}</p></a>
          </div>
          <img src={img5} alt="" srcSet="" />
        </div>
      </div>
      <div className="container_1">
        <div className="heading">
          FACULTIES AND DEPARTMENTS
        </div>
        <div className="elements">
          <div className="container_years">
            <a href="http://www.iitkgp.ac.in/department/AE" target="_blank" rel="noreferrer"><p>List of Departments and Faculties</p></a>
            
          </div>
          <img src={img1} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
}
