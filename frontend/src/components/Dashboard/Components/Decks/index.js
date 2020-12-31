import React from "react";
import "./decks.css";

function Decks() {
    return (
        <div>
            <div>button to click to study or edit deck</div>
            <h1>Mapping over each deck in course render a list of decks</h1>
            <ul>
                <li>
                    <div>
                        <div>
                            <p>'DeckName'</p>
                            <p>'total studied' of 'total cards in deck' unique cards studied</p>
                        </div>
                        <div>Progress tracker</div>
                    </div>
                    <div>links to view, edit, and study the deck</div>
                </li>
            </ul>
        </div>
    )
}

export default Decks;
