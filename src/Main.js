import React, { PropTypes } from 'react';

const Hello = ({ name }) => (
    <h1>Hello {name}!</h1>
);

Hello.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Hello;
