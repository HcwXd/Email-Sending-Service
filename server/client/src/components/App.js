import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const Landing = () => <h2> Landing </h2>;

class App extends React.Component {
    componentWillMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(App);
