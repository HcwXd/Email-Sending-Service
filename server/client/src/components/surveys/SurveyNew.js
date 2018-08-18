import React, { Component } from 'react';
import SurveyFormReview from './surveyFormReview';

class Survey extends Component {
    state = { showFormReview: false };
    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview />;
        }
        return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
    }

    render() {
        return <div>{this.renderContent}</div>;
    }
}

export default SurveyNew;
