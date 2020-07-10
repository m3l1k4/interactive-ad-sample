import React from 'react'
import { Link } from 'react-router-dom'
import './Plane.scss'



export default function Plane({ handleHover }, { handleScore }) {

    handleHover = (event) => { console.log("potato") }
   

    return (

        <div>
            <h1>hello</h1>

            <div onMouseOver={scoreCalc} className="sky">

                <div className="score">
                    <p>{scoreCalc}</p>
                </div>
                <div className="sky__cloud  sky__goodA">
                    <img className="sky__cloud-img" src='../assets/gcloud.png' alt="cloud"></img>

                </div>
                <div className="sky__cloud  sky__badA">
                    <img onMouseOver={handleHover} className="sky__cloud-img" src='../assets/thunder.png' alt="cloud"></img>
                </div>


                <div className="sky__cloud  sky__goodB">
                    <img className="sky__cloud-img" src='../assets/gcloud.png' alt="cloud"></img>

                </div>
                <div className="sky__cloud  sky__badB">
                    <img onMouseOver={handleHover} className="sky__cloud-img" src='../assets/thunder.png' alt="cloud"></img>
                </div>

                <div className="sky__cloud  sky__goodC">
                    <img className="sky__cloud-img" src='../assets/gcloud.png' alt="cloud"></img>

                </div>
                <div className="sky__cloud  sky__badC">
                    <img onMouseOver={handleHover} className="sky__cloud-img" src='../assets/thunder.png' alt="cloud"></img>
                </div>





            </div>



        </div>

    )

}

export function scoreCalc(){

    let score= String(new Date().getTime());
    console.log(score)
    return score;

}