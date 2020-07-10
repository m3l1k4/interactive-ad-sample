import React from 'react'
import { Link } from 'react-router-dom'
import './Plane.scss'



export default function Plane({ handleHover }) {

    handleHover = (event) => { console.log("potato") }

    return (

        <div>
            <h1>hello</h1>

            <div className="sky">
                <div className="sky__good-cloud"> 
                <img className="sky__cloud-img"src='../assets/gcloud.png' alt="cloud"></img>
          
                </div>  
                <div className="sky__bad-cloud">
                                    <img onMouseOver={handleHover} className="sky__cloud-img"src='../assets/thunder.png' alt="cloud"></img>
                </div>
    
            </div>

           

        </div>

    )

}