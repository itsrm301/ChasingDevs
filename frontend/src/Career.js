import React,{useEffect} from 'react'
import "./Career.css"
import MultiActionAreaCard from './components/MultiActionCard'
import Aos from "aos"
import careerList from './components/listOfCareerInfo'
import "aos/dist/aos.css"
import { elementAcceptingRef } from '@mui/utils'

function Career() {

    useEffect(()=>{
        Aos.init({duration:2000});
    })

    return (
        <div className="career">
            <div className='career_title'>
                <h1>CAREER'S POINT</h1>
            </div>
            <h1 class="career_head">LIST OF CAREER OPTIONS</h1>
            {careerList.map((element,index)=>{
                if(index%2===0){
                    return (<>
                        <div className='career_sec'data-aos="fade-right">
                            <div className='career_desc'>
                                <p>{element.description}</p>
                            </div>
                            <div className='career_card'>
                                <MultiActionAreaCard 
                                link={element.link}
                                title={element.title}
                                img={element.img}
                                />
                            </div>
                        </div>
                    </>)
                }
                else{
                    return (<>
                        <div className='career_sec'data-aos="fade-left">
                            <div className='career_desc'>
                                <p>{element.description}</p>
                            </div>
                            <div className='career_card'>
                                <MultiActionAreaCard 
                                link={element.link}
                                title={element.title}
                                img={element.img}
                                />
                            </div>
                        </div>
                    </>)
                }

            })}
        </div>
    )
}

export default Career
