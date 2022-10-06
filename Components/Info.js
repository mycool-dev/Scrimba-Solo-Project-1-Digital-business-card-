import React from 'react'
export default function Info(){
    return(
    <div className="Info">
        <img src="./image/graduation.jpeg" className="graduation-pic"/> 
        <div className="contact">
        <h2>Michael Edie</h2>
        <h3>Frontend Developer</h3>
        <a href="https://miycool.com" className="website">www.miycool.com </a>
        <div className="buttons">
        <button className="button-1"> <img src="./image/Mail.png" width="16px"/><span>Email</span></button>
        <button className="button-2"> <img src="./image/linkedin.png" width="16px"/><span>LinkedIn</span></button>
        </div>
        </div>
    </div>
    )
}