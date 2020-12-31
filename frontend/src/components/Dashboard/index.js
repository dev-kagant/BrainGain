import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import About from "./Components/About";
import Decks from "./Components/Decks";
import './usercourses.css'

function Dashboard() {

    return (
        <div>
            <div className="sidebar">
                <div>
                    <div>Home Icon</div>
                    <div>
                        <h3>'Username'</h3>
                        <h5>'total cards studied'</h5>
                        <h5>'Decks Created'</h5>
                    </div>
                    <div>Account management icon</div>
                </div>
                <div>
                    <h2>My Classes</h2>
                    <h2>Add Course</h2>
                    <h2>Search Course</h2>
                </div>
                <div>
                    <div>Map over courses</div>
                    <div>Create New Course</div>
                    <div>Find Course</div>
                </div>
            </div>
            <div className="courses-main">
                <div className="main-deck-header">
                    <div>Icon</div>
                    <div>
                        <h1>'Deck Name'</h1>
                        <div>
                            <h3>Creator: 'DeckCreator'</h3>
                            <h4>'total study' of 'total cards' unique cards studied</h4>
                        </div>
                        <div>click to study icon</div>
                    </div>
                    <div>Progress Meter Icon</div>
                </div>
                <div>
                    <NavLink to="/dashboard/deckId/about">About</NavLink>
                    <NavLink to="/dashboard/deckId/decks">Decks</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route
                            path="/dashboard/deckId/decks"
                            render={() => <Decks />}>
                        </Route>
                        <Route
                            path="/dashboard/deckId/about"
                            render={() => <About />}>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
