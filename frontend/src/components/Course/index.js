import React from "react";
import "./course.css";

function Course() {
    return (
        <div>
            <div>
                <div>
                    <h2>'CourseName'</h2>
                    <div>Icon</div>
                </div>
                <div>
                    <h3>Flashcard maker: 'userName' <br /> 'DecksTotal' Decks - 'CardTotal' Cards</h3>
                    <h2>Adaptive flashcards that help you learn <br /> faster using spaced repetition</h2>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h1>'CourseName' Flashcards</h1>
                        <h3>Tags: "tagsListed"</h3>
                    </div>
                    <div>Button to add to userCourses</div>
                </div>
                <div>
                    <h2>Description</h2>
                    <p>This pack was created from the iOS BrainGain App</p>
                    <h2>Decks In This Class ('totaldecks')</h2>
                    <div>
                        <ul>
                            <p>Map over 'courseDecks'</p>
                            <li>
                                <div>'DeckName'</div>
                                <div>'TotalCards' Cards</div>
                                <div>View Deck Arrow Link</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course;
