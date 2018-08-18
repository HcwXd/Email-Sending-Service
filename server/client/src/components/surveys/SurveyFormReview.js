import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel }) => {
    const reviewFields = _.map(formFields, (name, label) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });
    return (
        <div>
            <h5>Plz Confirm</h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat" onclick={onCancel}>
                Back
            </button>
        </div>
    );
};

function mapStateToProps() {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
