Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Flag = function Flag(_ref) {
    var country = _ref.country;
    var size = _ref.size;
    return _react2["default"].createElement("img", {
        className: "flag",
        src: "http://flagpedia.net/data/flags/" + String(size) + "/" + String(country) + ".png",
        alt: country
    });
};

Flag.propTypes = {
    country: _react.PropTypes.string.isRequired,
    size: _react.PropTypes.string.isRequired
};

exports["default"] = Flag;