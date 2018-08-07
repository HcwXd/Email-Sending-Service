import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Landing = () => <h2> Landing </h2>;
const SurveyNew = () => <h2> SurveyNew </h2>;

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
                        <Route path="/survey" component={SurveyNew} />
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
