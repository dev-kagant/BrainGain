import { fetch } from "./csrf.js";

const SET_COURSE = "courses/setCourse";
const CREATE_COURSE = "courses/:userId/course"
const GET_COURSES = "courses/getCourses";
const REMOVE_COURSE = "courses/removeCourse"

// Action creator that produces object
const setCourse = (course) => {
    return {
        type: SET_COURSE,
        course: course,
    };
};

const addCourse = (course) => {
    return {
        type: CREATE_COURSE,
        course,
    }
}
// Action creator that produces a function
// thunk action
export const getAllCourse = (ID) => {                            //CALLED INSIDE OF COMPONENTS
    return async (dispatch) => {
        // You interact with your server.
        const response = await fetch(`/api/courses/${ID}`);
        dispatch(                                        //will eventually return an Object
            setCourse(response.data.bands)
        );
    };
};

export const addingCourse = (course) => async (dispatch) => {
    const { userId, courseName, description, subCategoryId } = course;

    const response = await fetch('/api/courses/userId/course', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            courseName,
            description,
            subCategoryId
        }),
    });
    dispatch(addCourse(response.data.course))
    return response;
}

// export const fetchCourses = () => {
//     return async (dispatch) => {
//         // You interact with your server.
//         const response = await fetch("/api/bands");
//         dispatch(
//             setBands(response.data.bands)
//         );
//     };
// };

const initialState = [];

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_COURSE:
            newState = action.courses;
            return newState;
        case CREATE_COURSE:
            newState = state.push(action.type)
            return newState;
        default:
            return state;
    }
}

export default reducer;
