import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import surveyField from './surveyField';

class SurveyForm extends Component {
    renderFields() {
        return `
        <div>
            <Field
                type="text"
                name="surveyTitle"
                component={surveyField}
            />
        </div>
        `;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values)}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm',
})(SurveyForm);
