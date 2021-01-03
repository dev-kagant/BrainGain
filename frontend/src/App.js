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
import Dashboard from "./components/Dashboard";
import Course from "./components/Course";
import Cards from "./components/Cards";
import Search from "./components/Search";

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
          <Route path="/user/:userId">
            <Navigation isLoaded={isLoaded} />
            <UserPage />
            <Footer />
          </Route>
          <Route path="/dashboard/:userId">
            <Dashboard />
          </Route>
          <Route path="/course/:courseId/:deckId">
            <Navigation isLoaded={isLoaded} />
            <Cards />
            <Footer />
          </Route>
          <Route path="/course/:courseId">
            <Navigation isLoaded={isLoaded} />
            <Course />
            <Footer />
          </Route>
          <Route path="/search">
            <Navigation isLoaded={isLoaded} />
            <Search />
            <Footer />
          </Route>
        </Switch>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default App;
