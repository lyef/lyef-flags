Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Flag = function Flag(_ref) {
    var country = _ref.country,
        size = _ref.size;
    return _react2['default'].createElement('img', {
        className: 'flag',
        src: 'http://flagpedia.net/data/flags/' + String(size) + '/' + String(country) + '.png',
        alt: country
    });
};

Flag.propTypes = {
    country: _propTypes2['default'].string.isRequired,
    size: _propTypes2['default'].string.isRequired
};

exports['default'] = Flag;