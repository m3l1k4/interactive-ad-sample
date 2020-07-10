import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Game.scss';

import Plane from '../Plane'

export default function Game() {
    return (
        <div className="Game">
            <h1 className="Game__title">Game</h1>

            <Plane />

            <div className="Game__body" >
                <p className="Game__body--text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classic</p>
                {/* <img className="Game__body--img" src="../assets/browsing.jpg" alt="logo" /> */}
            </div>


        </div>
    )
}
