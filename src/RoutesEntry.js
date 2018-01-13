/**
 *
 * Description
 *
 * @package        TLSignal Client
 * @category       Source
 * @author         Michael Akanji <matscode@gmail.com>
 * @date           2017-10-24
 *
 */
import React                        from 'react';
import { Switch, Route }            from 'react-router';
import { BrowserRouter as Router }  from 'react-router-dom';

/**
 * Import all page components here
 */
import SignIn       from './Pages/SignIn';
import SignUp       from './Pages/SignUp';
import Dashboard    from './Pages/Dashboard';
import Admin        from './Pages/Admin';
import Features     from './Pages/Features';
import NotFound     from "./Pages/NotFound";

/**
 * All RoutesEntry go here.
 * Don't forget to import the components(Pages) above after adding new route.
 */
function RoutesEntry (props) {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/sign-up" exact component={SignUp} />
                <Route path="/features" exact component={Features} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/admin" exact component={Admin} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default RoutesEntry;