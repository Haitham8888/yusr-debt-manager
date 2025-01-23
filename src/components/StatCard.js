import React from 'react';
import PropTypes from 'prop-types';
import './StatCard.css'; // Assuming you have a CSS file for styling

const StatCard = ({ title, value }) => {
    return (
        <div className="stat-card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

StatCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default StatCard;