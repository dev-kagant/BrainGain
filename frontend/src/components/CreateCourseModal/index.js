import React, { useState, useSelector } from 'react';
import { Modal } from '../../context/Modal';
import CreateCourse from './CreateCourse';

function CreateCourseModal({ isLoaded }) {
    const [courseModal, setCourseModal] = useState(false);

    return (
        <>
            <div onClick={() => setCourseModal(true)} className="button">Make Flashycards</div>
            {courseModal && (
                <Modal onClose={() => setCourseModal(false)}>
                    <CreateCourse isLoaded={isLoaded} />
                </Modal>
            )}
        </>
    );
}

export default CreateCourseModal;
