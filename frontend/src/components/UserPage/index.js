import React from 'react';
import { Route, Switch, NavLink, useParams } from "react-router-dom";
import Studying from "./Components/Studying";
import Created from "./Components/Created";
import './userpage.css';

function UserPage() {

    const { userId } = useParams();
    console.log(userId)

    return (
        <div>
            <div>
                <div>
                    <h1>'Username'</h1>
                    <h3>Professional</h3>
                </div>
                <div>
                    <h2>'card counter'</h2>
                    <h3>Cards In My Classes</h3>
                </div>
                <div>
                    <h2>'cards studied counter'</h2>
                    <h3>Total Cards Studied</h3>
                </div>
                <div>
                    <h2>'Decks Counter'</h2>
                    <h3>Decks Created</h3>
                </div>
            </div>
            <div>
                <h3>About 'Username'</h3>
                <h5>Brainscape User since 'createdAt.year'</h5>
                <h5>Earth Dweller since <p>some time before 'createdAt.year'</p></h5>
                <h5>Home Base: <p>Here, there, and everywhere</p></h5>
                <button>Contact User</button>
            </div>
            <div>
                <NavLink to="/user/userId/studying">Courses Studying</NavLink>
                <NavLink to="/user/userId/created">Courses Created</NavLink>
            </div>
            <div>
                <Switch>
                    <Route
                        path="/user/userId/studying"
                        render={() => <Studying />}>
                    </Route>
                    <Route
                        path="/user/userId/created"
                        render={() => <Created />}>
                    </Route>
                </Switch>
            </div>
        </div >
    )
}

export default UserPage;
