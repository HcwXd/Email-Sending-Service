import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class Survey extends Component {
    state = { showFormReview: false };
    renderContent() {
        if (this.state.showFormReview) {
            console.log('SurveyFormReview');
            return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />;
        }
        console.log('SurveyForm');
        return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
    }

    render() {
        return (
            <div>
                <h1>New Survey</h1>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({ form: 'surveyForm' })(Survey);
