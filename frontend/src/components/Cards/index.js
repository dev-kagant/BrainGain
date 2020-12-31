import React from "react";
import { NavLink } from "react-router-dom"
import "./cards.css";

function Cards() {
    return (
        <div>
            <div>
                <div>
                    <h2>Decks In 'CourseName' Course ('totalDecks')</h2>
                    <div>
                        <ul>
                            <p>Map over the decks in a course</p>
                            <li>
                                <NavLink to="/course/courseId/deckId">'DeckName'</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h1>'CourseName' Flashcards Preview</h1>
                        <h3>'CourseName' - 'DeckName' - Flashcards</h3>
                    </div>
                    <div>Button to add to userCourses</div>
                </div>
                <div>
                    <h2>Flashcards in the 'DeckName' Deck ('totalCards')</h2>
                    <div>
                        <ul>
                            <p>Map over 'courseDecks'</p>
                            <li>
                                <div>
                                    <div>'CardId'</div>
                                    <div>'CardFront'</div>
                                    <div>'CardBack'</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
