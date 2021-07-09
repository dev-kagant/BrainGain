import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateCourseModal from '../CreateCourseModal';
import LoginFormModal from '../LoginFormModal';
import bored from './CSS/bored.jpg';
import braids from './CSS/braids.jpg';
import study from './CSS/study.jpg';
import study1 from './CSS/study1.jpg';
import groupstudy from './CSS/groupstudy.jpg';
import pencilchower from './CSS/pencilchower.jpg';
import './home.css';


const Home = ({ isLoaded }) => {
    // const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        // pic.style.background = ``
        backgroundImageChange();
    }, [])


    const handleSearchCourse = () => { };


    const backgroundImageChange = async () => {
        const image1 = `url(${study1}) center/cover`
        const image2 = `url(${bored}) center/cover`
        const image3 = `url(${study}) center/cover`
        const image4 = `url(${braids}) center/cover`
        const image5 = `url(${groupstudy}) center/cover`
        const image6 = `url(${pencilchower}) center/cover`

        const pic = document.getElementById('pic')
        pic.style.background = image1
        let currentIndex = 1;

        setInterval(() => {
            const imageArray = [image1, image2, image3, image4, image5, image6];

            pic.style = `background: ${imageArray[currentIndex]}; animation: 3s ease-in both running fadein;`

            if (currentIndex >= imageArray.length) {
                currentIndex = 0
            }
            currentIndex++;
        }, 6000);
    };

    const handleMakeFlashcards = () => {

        console.log('inside handleMakeFlashcards')
    }


    let courseCreate;

    if (sessionUser) {
        courseCreate = (
            < CreateCourseModal isLoaded={isLoaded} />)
    } else {
        courseCreate = (
            <LoginFormModal />)
    }

    if(!study1){
        return
    }

    return (
        <div className="main" id="pic" >
            <div className="main-caption">
                <h1 className="h1">Need to study <br /> Study smart?</h1>
                <h3 className="h3">Flashycards may be the way!</h3>
                <div className="button-container">
                    <div className="home-button lb1">{courseCreate}</div>
                </div>
                    {/* <button onClick={handleMakeCourse} type="button" className="landing-button lb1">Make Flashcards</button>
                    <button onClick={handleSearchCourse} type="button" className="landing-button lb2">Search Flashcards</button> */}
            </div>
        </div >
    )
}

export default Home;
