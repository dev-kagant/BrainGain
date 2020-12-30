import React from "react"
import './usercourses.css'

function UserCourses() {

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
            </div>
        </div>
    )
}

export default UserCourses;
