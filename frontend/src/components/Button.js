import React from 'react'
import './Button.css'
export default function Button(props) {
    return (
        <div className="quickinfo_button">
            <button class="button-57" role="button"><span class="text">{props.text}</span><span>Click to visit the link</span></button>
      
        </div>
    )
}
