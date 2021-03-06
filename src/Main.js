import React from 'react';
import PropTypes from 'prop-types';

const Flag = ({ country, size }) => (
    <img
        className="flag"
        src={`http://flagpedia.net/data/flags/${size}/${country}.png`}
        alt={country}
    />
);

Flag.propTypes = {
    country: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
};

export default Flag;
