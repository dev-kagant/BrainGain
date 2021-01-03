import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import './home.css';


const Home = () => {

    const handleMakeDeck = () => { };

    const handleSearchDecks = () => { };

    const backgroundImageChange = () => {
        const image1 = "url(../../CSS/study1.jpg) center/cover";
        const image2 = "url(../../CSS/bored.jpg) center/cover";
        const image3 = "url(../../CSS/study.jpg) center/cover";
        const image4 = "url(../../CSS/braids.jpg) center/cover";
        const image5 = "url(../../CSS/groupstudy.jpg) center/cover";
        const image6 = "url(../../CSS/pencilchower.jpg) center/cover";

        let backgroundImage = document.body.style.pic;
        let currentIndex = 0;

        const interval = setInterval(() => {
            const imageArray = [image1, image2, image3, image4, image5, image6];

            document.body.style.pic = imageArray[currentIndex];
            currentIndex++;

            if (!currentIndex || currentIndex >= imageArray.length) {
                currentIndex = 0
            }
        }, 2000);
    };

    return (
        <div className="page-grid-2 pic">
            <div className="main" onLoad={backgroundImageChange}>
                <h1 className="h1">Need to <br /> study hard?</h1>
                <h3 className="h3">Flashcards may be the way!</h3>
                <div className="button-container">
                    <button onClick={handleMakeDeck} type="button" className="landing-button lb1">Make Flashcards</button>
                    <button onClick={handleSearchDecks} type="button" className="landing-button lb2">Search Flashcards</button>
                </div>
            </div>
        </div >
    )
}

export default Home;
