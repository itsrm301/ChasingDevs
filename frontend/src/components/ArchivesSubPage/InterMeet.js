import React from 'react'
import { Button } from 'bootstrap';
import BasicTable from './Table'
import { gclist } from './Gclist';


import "./InterMeet.css"

function InterMeet() {

    return (
        <div className='inter'>
            {gclist.map((ele) => {
                // console.log(ele);
               
              return(<BasicTable gc={ele} />)
            })}
            
        </div>
    )
}

export default InterMeet
