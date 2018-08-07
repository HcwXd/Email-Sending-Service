import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Landing = () => <h2> Landing </h2>;
const SurveyNew = () => <h2> SurveyNew </h2>;

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Landing} />
                        <Route path="/survey" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
