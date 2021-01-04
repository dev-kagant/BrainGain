import { fetch } from "./csrf.js";

const SET_COURSE = "courses/setCourse";
const CREATE_COURSE = "courses/:userId/course"
const GET_COURSE = "courses/getCourses";
const REMOVE_COURSE = "courses/removeCourse"

// Action creator that produces object
const getCourse = (course) => {
    return {
        type: GET_COURSE,
        course: course,
    };
};

const addCourse = (course) => {
    return {
        type: CREATE_COURSE,
        course
    }
}
// Action creator that produces a function
// thunk action
export const getACourse = (courseId) => {                            //CALLED INSIDE OF COMPONENTS
    return async (dispatch) => {                            // You interact with your server.
        const response = await fetch(`/api/courses/${courseId}`);
        //will eventually return an Object
        return dispatch(getCourse(response.data));
    };
};


export const addingCourse = (course) => async (dispatch) => {
    const { userId, courseName, description } = course;
    const response = await fetch(`/api/courses/${userId}/course`, {
        method: 'POST',
        body: JSON.stringify({
            name: courseName,
            description
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
        case GET_COURSE:
            newState = Object.assign({}, state, { course: action.course });
            return newState;
        case CREATE_COURSE:
            newState = state.push(action.course)
            return newState;
        default:
            return state;
    }
}

export default reducer;
