import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Competitions from "./pages/Competitions";
import LessonPlans from "./pages/LessonPlans";
import AnnualPlan from "./pages/AnnualPlan";
import Gymnasts from "./pages/Gymnasts";
import NoMatch from "./pages/NoMatch";
import history from "./utils/history";
import { useAuth0 } from "@auth0/auth0-react";
import Landing from './components/Landing';


function App() {
  const { isAuthenticated } = useAuth0();
  
    if (isAuthenticated) {
      return(
        <Router history={history}>
            <Switch>
              <Route path = {["/", "/home"]} exact component={User} />
              <Route path = "/gymnasts" exact component={Gymnasts} />
              <Route path = "/lessonplans" exact component={LessonPlans} />
              <Route path = "/annualplan" exact component={AnnualPlan} />
              <Route path = "/competitions" exact component={Competitions} />
              <Route path = "/user" exact component={User} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      )
    } else {
      return (
        <Landing/>
      )
    }

}

export default App;