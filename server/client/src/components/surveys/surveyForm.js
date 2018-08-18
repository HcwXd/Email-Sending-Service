import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import surveyField from './surveyField';
const FIELDS = [
    {
        label: 'Campaign Title',
        name: 'title',
    },
    {
        label: 'Subject Line',
        name: 'subject',
    },
    {
        label: 'Email Body',
        name: 'body',
    },
    {
        label: 'Recipient List',
        name: 'recipients',
    },
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return `<Field
                        key={name}
                        label={label}
                        type="text"
                        name={name}
                        component={surveyField}
                    />`;
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}
function validate(values) {
    const errors = {};
    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });

    return errors;
}
export default reduxForm({
    validate,
    form: 'surveyForm',
})(SurveyForm);
