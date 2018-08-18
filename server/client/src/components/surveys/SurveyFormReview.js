import React from 'react';

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

export default SurveyFormReview;
