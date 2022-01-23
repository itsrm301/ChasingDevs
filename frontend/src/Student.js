import MultiActionAreaCard from './components/MultiActionCard';
import CarouselComponent from './components/Carousel';
import list from './components/listOfDepInfo';
import React,{useEffect} from 'react'
import Aos from "aos"
import "./Student.css"

function Student() {

    useEffect(()=>{
    Aos.init({duration:1000})

    },)

    return (
        <div className="student">
            <div className='student_title'>
                <h1>STUDENT'S POINT</h1>
            </div>
            <div className="student_headerTop">
                <h1>FIRST YEAR</h1>
                <div className="student_header">
                    <MultiActionAreaCard
                        title="Physics Semester"
                        img="https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?cs=srgb&dl=pexels-jeshootscom-714698.jpg&fm=jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur quia, eaque ex exercitationem, eveniet quos natus autem iste, vitae tempora impedit doloribus perspiciatis voluptatem temporibus corrupti dolorem enim voluptatibus!"
                        link="https://docs.google.com/document/d/1C8ZvdjPRMM-Zpp4_bpBQx6_QJJqfYm3iyMyfQ8aJZ2U/edit?usp=sharing"
                    />
                    <MultiActionAreaCard
                        title="Chemistry Sem"
                        img="https://images.pexels.com/photos/8325710/pexels-photo-8325710.jpeg?cs=srgb&dl=pexels-kindel-media-8325710.jpg&fm=jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur quia, eaque ex exercitationem, eveniet quos natus autem iste, vitae tempora impedit doloribus perspiciatis voluptatem temporibus corrupti dolorem enim voluptatibus!"
                        link="https://docs.google.com/document/d/1C8ZvdjPRMM-Zpp4_bpBQx6_QJJqfYm3iyMyfQ8aJZ2U/edit?usp=sharing"
                    />
                </div>
            </div>


            <div className="student_second">
                <CarouselComponent list={list} year="SECOND YEAR" color="dark" />
            </div>
            <div className="student_third">
                <CarouselComponent list={list} year="THIRD YEAR" color="white" />

            </div>
            <div className="student_fourth">
                <CarouselComponent list={list} year="FOURTH YEAR" color="dark" />

            </div>
            <div className="student_fifth">
                <CarouselComponent list={list} year="FIFTH YEAR" color="white" />

            </div>
            <div className="student_questionBot" data-aos="fade-up">
                <h1>PREVIOUS YEAR PAPERS</h1>
                <div className="student_question">
                    <MultiActionAreaCard 
                        title="Previous Year Papers"
                        link="https://qp.metakgp.org/"
                        img="https://images.pexels.com/photos/239548/pexels-photo-239548.jpeg?cs=srgb&dl=pexels-pew-nguyen-239548.jpg&fm=jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur quia, eaque ex exercitationem, eveniet quos natus autem iste, vitae tempora impedit doloribus perspiciatis voluptatem temporibus corrupti dolorem enim voluptatibus!"
                    />
                </div>

            </div>
        </div>
    )
}

export default Student

