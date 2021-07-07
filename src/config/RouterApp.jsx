import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../screen/Home";
import Contact from "../screen/Contact";
import About from "../screen/About";
import Profile from "../screen/Profile";

const RouterApp = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/:username" component={Profile} />
                </Switch>
            </Router>
        </div>
    );
}


export default RouterApp;