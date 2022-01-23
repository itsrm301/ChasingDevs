import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const style = {
        color: "gray", textDecoration: "none", marginRight: "15px",
    }
    return (
        <div>
            <div className="defaultnav">
                <div class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#=">Navbar</a>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/" exact>
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/studentprofile" exact>
                                    Student Profile
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/events" exact>
                                    Events(TSG)
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/societypoint" exact>
                                    Society Point
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/newsbulletin" exact>
                                    News Bulletin
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/studentspoint" exact>
                                    Students' Point
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/quickinfo" exact>
                                    Quick Info
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/archives" exact>
                                    Archives
                                </NavLink>
                            </li></ul>
                    </div>
                </div>
            </div>
            <div className="nav1050">
                <nav class="navbar  navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div className='mainc'>
                        <div class="navbar-expand" >
                            <ul className='navbar-nav ml-auto'>
                                <li class="nav-item active">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/" exact>
                                        Home
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/studentprofile" exact>
                                        Student Profile
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/events" exact>
                                        Events(TSG)
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/societypoint" exact>
                                        Society Point
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/newsbulletin" exact>
                                        News Bulletin
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/studentspoint" exact>
                                        Students' Point
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="btn">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown1"
                                aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown1">

                        <ul class=" navbar-nav ml-auto">
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/quickinfo" exact>
                                    Quick Info
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/archives" exact>
                                    Archives
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
            <div className="nav900">
                <nav class="navbar  navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div className='mainc'>
                        <div class="navbar-expand" >
                            <ul className='navbar-nav ml-auto'>
                                <li class="nav-item active">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/" exact>
                                        Home
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/studentprofile" exact>
                                        Student Profile
                                    </NavLink>
                                </li>
                                <li class="nav-item ">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/events" exact>
                                        Events(TSG)
                                    </NavLink>
                                </li>
                                <li class="nav-item ">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/societypoint" exact>
                                        Society Point
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                        <div className="btn">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown2"
                                aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown2">

                        <ul class=" navbar-nav ml-auto">
                            <li class="nav-item  ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/newsbulletin" exact>
                                    News Bulletin
                                </NavLink>
                            </li>
                            <li class="nav-item  ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/studentspoint" exact>
                                    Students' Point
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/quickinfo" exact>
                                    Quick Info
                                </NavLink>
                            </li>
                            <NavLink activeStyle={{ color: "white" }} style={style} to="/archives" exact>
                                Archives
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="nav650">
                <nav class="navbar  navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div className='mainc'>
                        <div class="navbar-expand" >
                            <ul className='navbar-nav ml-auto'>
                                <li class="nav-item active">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/" exact>
                                        Home
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink activeStyle={{ color: "white" }} style={style} to="/studentprofile" exact>
                                        Student Profile
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="btn">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown3"
                                aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div class="collapse  navbar-collapse" id="navbarNavDropdown3">

                        <ul class=" navbar-nav ml-auto">
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/events" exact>
                                    Events(TSG)
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/societypoint" exact>
                                    Society Point
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/newsbulletin" exact>
                                    News Bulletin
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/studentspoint" exact>
                                    Students' Point
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/quickinfo" exact>
                                    Quick Info
                                </NavLink>
                            </li>
                            <NavLink activeStyle={{ color: "white" }} style={style} to="/archives" exact>
                                Archives
                            </NavLink>
                        </ul>
                    </div>
                </nav>

            </div >
            <div className="nav405">
                <nav class="navbar  navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div className='mainc'>

                        <div className="btn">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown4"
                                aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown4">

                        <ul class=" navbar-nav ml-auto">
                            <li class="nav-item active ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/" exact>
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/studentprofile" exact>
                                    Student Profile
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/events" exact>
                                    Events(TSG)
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/societypoint" exact>
                                    Society Point
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/newsbulletin" exact>
                                    News Bulletin
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/studentspoint" exact>
                                    Students' Point
                                </NavLink>
                            </li>
                            <li class="nav-item ml-auto">
                                <NavLink activeStyle={{ color: "white" }} style={style} to="/quickinfo" exact>
                                    Quick Info
                                </NavLink>
                            </li>
                            <NavLink activeStyle={{ color: "white" }} style={style} to="/archives" exact>
                                Archives
                            </NavLink>
                        </ul>
                    </div>
                </nav>

            </div>
        </div >


    );
}
export default Navbar;