import React from 'react';
import { Route, Switch } from "react-router-dom";
import './userpage.css';

function UserPage() {



    // let userToggle;
    // if (sessionUser) {
    //     sessionLinks = (
    //         <ProfileButton user={sessionUser} />
    //     );
    // } else {
    //     sessionLinks = (
    //         <>
    //             <LoginFormModal />
    //             <SignupFormModal />
    //         </>
    //     );
    // }

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
                <h5>Earth Dweller since <n>some time before 'createdAt.year'</n></h5>
                <h5>Home Base: <n>Here, there, and everywhere</n></h5>
                <button>Contact User</button>
            </div>
            <div>
                <h2 onClick="">Courses Studying ('Number of Courses')</h2>
                <h2 onClick="">Courses Created ('Number of Courses Created')</h2>
                <div>
                    <div>Map over 'UserCourses'</div>
                    <div>Map over 'Course with user.id'</div>
                </div>
            </div>
        </div >
    )
}

export default UserPage;
