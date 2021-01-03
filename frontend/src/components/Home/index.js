import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateCourse from '../CreateCourseModal';
import LoginForm from '../LoginFormModal';
import { Modal } from '../../context/Modal';
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
    const [courseModal, setCourseModal] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        backgroundImageChange();
    }, [])

    const handleMakeCourse = () => {
        // if (sessionUser) {
        //     <LoginFormModal />
        // } else {
        //     <CreateCourseModal />
        // }

        // let response = dispatch(createNewCourse)
    };

    const handleSearchCourse = () => { };


    const backgroundImageChange = async () => {
        const image1 = `url(${study1}) center/cover`
        const image2 = `url(${bored}) center/cover`
        const image3 = `url(${study}) center/cover`
        const image4 = `url(${braids}) center/cover`
        const image5 = `url(${groupstudy}) center/cover`
        const image6 = `url(${pencilchower}) center/cover`

        const pic = document.getElementById('pic')
        console.log("does it work")


        let currentIndex = 1;


        setInterval(() => {
            const imageArray = [image1, image2, image3, image4, image5, image6];

            pic.style.animation = `10s infinite normal fadeIn`
            pic.style.background = imageArray[currentIndex]

            currentIndex++;

            if (currentIndex >= imageArray.length) {
                currentIndex = 0
            }
        }, 10000);
    };

    let courseCreate;

    const handleMakeFlashcards = () => {
        if (sessionUser) {
            return (
                <>
                    <div onClick={() => setCourseModal(true)} className="button">Make Flashcards</div>
                    {courseModal && (
                        <Modal onClose={() => setCourseModal(false)}>
                            <CreateCourse />
                        </Modal>
                    )}
                </>
            )
        } else {
            return (
                <>
                    <div onClick={() => setShowModal(true)}>Make Flashcards</div>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <LoginForm />
                        </Modal>
                    )}
                </>
            )
        }
    }

    return (
        <div className="page-grid-2" id="pic">
            <div className="main">
                <h1 className="h1">Need to <br /> study hard?</h1>
                <h3 className="h3">Flashcards may be the way!</h3>
                <div className="button-container">
                    <button onClick={handleMakeFlashcards}>Make Flashcards</button>
                    {/* {courseCreate} */}
                    {/* <button onClick={handleMakeCourse} type="button" className="landing-button lb1">Make Flashcards</button>
                    <button onClick={handleSearchCourse} type="button" className="landing-button lb2">Search Flashcards</button> */}
                </div>
            </div>
        </div >
    )
}

export default Home;
