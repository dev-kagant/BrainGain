import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./search.css";

function Search(props) {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchCourses, setSearchCourses] = useState([]);
    useEffect(() => {
        // const courses = await fetch("/api/courses")
    }, [searchValue])


    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {       //fetch request with search value
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <div>
            <form>
                <i>search icon</i>
                <input value={searchValue}
                    onChange={handleSearchInputChanges}
                    type="text"
                    placeholder="e.g. MCAT, pharma, bar exam, Spanish, Series 7" />
                <input onClick={callSearchFunction} type="submit" value="SEARCH" />
            </form>
            <div>
                <div>
                    <h1>Category List</h1>
                    <p>Browse over 1 million flashcard classes created by top students, professors, publishers, and experts, spanning the world's body of "learnable" knowledge.</p>
                </div>
                <div>
                    <ul>
                        <p>map over all categories</p>
                        <li>
                            <h3>'CategoryName'</h3>
                            <ul>
                                <p>Map over all sub-categories</p>
                                <li>
                                    <NavLink to="/courses/subCategoryId">To all courses under that subcategory</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Search;
