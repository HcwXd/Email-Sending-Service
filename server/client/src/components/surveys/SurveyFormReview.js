import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel }) => {
    return (
        <div>
            <h5>Plz Confirm</h5>
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
