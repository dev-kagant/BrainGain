import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as courseActions from "../../store/courses";
import { useParams } from 'react-router-dom';
import "./course.css";

async function Course() {
    const dispatch = useDispatch();
    const [course, getCourse] = useState({});
    const { courseId } = useParams();

    // const thisCourse = dispatch(courseActions.getACourse(courseId))
    // getCourse(thisCourse)


    useEffect(() => {
        getThisCourse().then((res) => getCourse(res))
    }, [dispatch]);

    const getThisCourse = async () => {
        return dispatch(courseActions.getACourse(courseId))
    }

    // const getCourseCreator = () => {
    //     return dispatch()
    // }


    // console.log('this is course', course.course.courseInfo)
    // const courseName = course.name
    // console.log('this is state', courseName)


    return (
        <div>
            <div>
                <div>
                    <h2>{course.course.courseInfo.name}</h2>
                    <div>Icon</div>
                </div>
                <div>
                    <h3>Flashcard maker: {course.course.creatorInfo.username} <br /> {course.course.courseDecks.length} Decks - 'CardTotal' Cards</h3>
                    <h2>Adaptive flashcards that help you learn <br /> faster using spaced repetition</h2>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h1>{course.course.courseInfo.name} Flashcards</h1>
                        <h3>Tags: "tagsListed"</h3>
                    </div>
                    <div>Button to add to userCourses</div>
                </div>
                <div>
                    <h2>{course.course.courseInfo.description}</h2>
                    <p>This pack was created from the iOS BrainGain App</p>
                    <h2>Decks In This Class ({course.course.courseDecks.length})</h2>
                    <div>
                        <ul>
                            {course.course.courseDecks.map(decks => (
                                <li>
                                    <div>{decks.deckName}</div>
                                    <div>'TotalCards' Cards</div>
                                    <div>View Deck Arrow Link</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course;
