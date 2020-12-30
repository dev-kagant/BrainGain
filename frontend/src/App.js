import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import UserPage from "./components/UserPage";
import UserCourses from "./components/UserCourses"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
          <Route path="/" exact>
            <Navigation isLoaded={isLoaded} />
            <HomePage />
            <Footer />
          </Route>
          <Route path="/user">
            <Navigation isLoaded={isLoaded} />
            <UserPage />
            <Footer />
          </Route>
          <Route path="/courses">
            <UserCourses />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
