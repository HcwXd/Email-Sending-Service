import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div className="fixed-action-btn">
                <Link to="/survey/new" className="btn-floating btn-large red">
                    <i className="materialize-icons">add</i>
                </Link>
            </div>
        </div>
    );
};