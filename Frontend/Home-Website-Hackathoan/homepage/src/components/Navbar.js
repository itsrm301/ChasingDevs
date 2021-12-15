import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <div className="defaultnav">
                <div class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Student Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Events(TSG)</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Society Point</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> News Bulletin</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Students' Point</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Quick Info</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Archives</a>
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
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"> Student Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"> Events(TSG)</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Society Point</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"> News Bulletin</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Students' Point</a>
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

                            <li class="nav-item ml-auto"><a class="nav-link" href="#" >Quick Info</a></li>
                            <li class="nav-item ml-auto"><a class="nav-link" href="#" >Archives</a></li>
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
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"> Student Profile</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="#"> Events(TSG)</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="#">Society Point</a>
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
                                <a class="nav-link" href="#"> News Bulletin</a>
                            </li>
                            <li class="nav-item  ml-auto">
                                <a class="nav-link" href="#">Students' Point</a>
                            </li>
                            <li class="nav-item ml-auto"><a class="nav-link" href="#" >Quick Info</a></li>
                            <li class="nav-item ml-auto"><a class="nav-link" href="#" >Archives</a></li>
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
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"> Student Profile</a>
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
                                <a class="nav-link" href="#"> Events(TSG)</a>
                            </li>
                            <li class="nav-item ml-auto">
                                <a class="nav-link" href="#">Society Point</a>
                            </li>
                            <li class="nav-item ml-auto">
                                <a class="nav-link" href="#"> News Bulletin</a>
                            </li>
                            <li class="nav-item ml-auto">
                                <a class="nav-link" href="#">Students' Point</a>
                            </li>
                            <li class="nav-item ml-auto"><a class="nav-link" href="#" >Quick Info</a></li>
                            <li class="nav-item ml-auto"><a class="nav-link" href="#" >Archives</a></li>
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
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item ml-auto">
                                <a class="nav-link" href="#"> Student Profile</a>
                            </li>
                            <li class="nav-item ml-auto">
                                <a class="nav-link" href="#"> Events(TSG)</a>
                            </li>
                            <li class="nav-item ml-auto">
                                <a class="nav-link" href="#">Society Point</a>
                            </li>
                            <li class="nav-item ml-auto">
                                <a class="nav-link" href="#"> News Bulletin</a>
                            </li>
                            <li class="nav-item ml-auto">
                                <a class="nav-link" href="#">Students' Point</a>
                            </li>
                            <li class="nav-item ml-auto"><a class="nav-link" href="#" >Quick Info</a></li>
                            <li class="nav-item ml-auto"><a class="nav-link" href="#" >Archives</a></li>
                        </ul>
                    </div>
                </nav>

            </div>
        </div >


    );
}
export default Navbar;