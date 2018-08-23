import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div className="red-text" style={{ marginBottom: '20px', marginTop: '5px' }}>
            <label>{label}</label>
            <input {...input} />
            {touched && error}
        </div>
    );
};
