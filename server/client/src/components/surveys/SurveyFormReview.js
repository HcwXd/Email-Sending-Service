import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
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
            <button className="green darken-3 right btn-flat" onClick={() => submitSurvey(formValues)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps() {
    return { formValues: state.form.surveyForm.values };
}

export default connect(
    mapStateToProps,
    actions
)(withRouter(SurveyFormReview));
