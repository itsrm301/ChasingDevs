import React from 'react'
import  Button  from 'react-bootstrap/Button';
import "./Gc.css"
import "bootstrap/dist/css/bootstrap.min.css";

function GeneralChamp() {
    const arr = [];
    for (let i = 2021; i >= 2000; i--) {
        arr.push(i);
    }


    return (
        <div className="gc">
            <h1>INTER IIT MEET</h1>

            {arr.map((ele) => {
                return (<div className='gc'>
                    <h1>{ele}</h1>
                    <div className='gc_rank'>
                        <div className='gc_rank_img'>
                            <img src='image/Second_rank.png' alt='#'></img>
                            <h2>IIT 2</h2>
                        </div>
                        <div className='gc_rank_img'>
                            <img src='image/First_rank.png' alt='#'></img>
                            <h2>IIT 1</h2>
                        </div>
                        <div className='gc_rank_img'>
                            <img src='image/Third_rank.png' alt='#'></img>
                            <h2>IIT 3</h2>
                        </div>
                    </div>
                    <div className="d-grid gap-2">
                    <Button variant="outline-secondary"><a style={{textDecoration : 'none',color:'white'}} href='https://docs.google.com/document/d/1lXUwN1y57ylZXh1TYmCMGH0jPEy-gOnfwcZPdTHBQko/edit?usp=sharing'>FULL REPORT</a></Button>{' '}

                    </div>
                </div>)
            })}


        </div>
    )
}

export default GeneralChamp
