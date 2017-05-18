'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatTabs = function (_React$Component) {
    _inherits(ChatTabs, _React$Component);

    function ChatTabs(props) {
        _classCallCheck(this, ChatTabs);

        // Binders.
        var _this = _possibleConstructorReturn(this, (ChatTabs.__proto__ || Object.getPrototypeOf(ChatTabs)).call(this, props));

        _this.handleTabClick = _this.handleTabClick.bind(_this);
        return _this;
    }

    /*-----
     * When a tab is clicked, make it active by placing active class.
     * Also update the appropriate content shown in the chat.
     *----
     */


    _createClass(ChatTabs, [{
        key: 'handleTabClick',
        value: function handleTabClick(e) {
            this.props.handleTabClick(e);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'tabs' },
                _react2.default.createElement(
                    'div',
                    { className: 'tab ' + (this.props.activeTab == 'Contacts' ? 'active' : ''),
                        onClick: this.handleTabClick },
                    'Contacts'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'tab ' + (this.props.activeTab == 'IM' ? 'active' : ''),
                        onClick: this.handleTabClick },
                    'IM'
                )
            );
        }
    }]);

    return ChatTabs;
}(_react2.default.Component);

module.exports.ChatTabs = ChatTabs;