import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import * as courseActions from "../../store/courses";
import './CreateCourse.css'


function CreateCourse({ isLoaded }) {
    const dispatch = useDispatch();
    const [courseName, setCourseName] = useState("");
    const [description, setDescription] = useState("");
    const [course, setCourse] = useState({});
    const [errors, setErrors] = useState([]);
    const userId = useSelector(state => state.session.user.id);

    // const categories = useSelector(state => state.category)

    const handleSubmit = (course) => {
        if (userId > 0) {
            setErrors([]);
            return dispatch(courseActions.addingCourse({ userId, courseName, description }))
                .then((res) => {
                    return setCourse(res.json())
                })
                .catch(
                    (res) => {
                        if (res.data && res.data.errors) setErrors(res.data.errors);
                    }
                );
            // setCourse(res.json())
        }
    };

    const redirectingCourse = async (e) => {
        e.preventDefault();
        let result = await handleSubmit({ userId, courseName, description });
        // let course = JSON.stringify(result);
        // console.log('maybe something', result)
        // return (<NavLink to={`/course/${course.id}`} />)
    }

    return (
        <div>
            <h1>Make some Flashycards</h1>
            <h4>Start by creating a course!!!</h4>
            <form onSubmit={redirectingCourse}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>

                <label>
                    Name of Course...
                <input
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Short description of what this course is about
                <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                {/* <label>
                Select a category
                <Dropdown
                    title="Select Category"
                    list={categories}
                />
            </label> */}
                <button type="submit" className="buttonstyle">Create Course</button>
            </form>
        </div>
    )
}

export default CreateCourse;


// () => setCourseModal(false)}
