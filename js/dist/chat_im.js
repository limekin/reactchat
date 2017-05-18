"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatIm = function (_React$Component) {
    _inherits(ChatIm, _React$Component);

    function ChatIm(props) {
        _classCallCheck(this, ChatIm);

        var _this = _possibleConstructorReturn(this, (ChatIm.__proto__ || Object.getPrototypeOf(ChatIm)).call(this, props));

        _this.state = {
            timestamp: null,
            message: ""
        };

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleSendClick = _this.handleSendClick.bind(_this);
        return _this;
    }

    _createClass(ChatIm, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "handleInputChange",
        value: function handleInputChange(e) {
            console.log(e.target.value);
            this.setState({
                message: e.target.value
            });
        }
    }, {
        key: "handleSendClick",
        value: function handleSendClick(e) {
            var newMessage = {
                recipientId: this.props.selectedContact.id,
                message: this.state.message,
                senderId: window.userId,
                timestamp: new Date().getTime(),
                senderName: "Aju"
            };
            socket.emit("send_message", newMessage);
            this.props.addMessage(newMessage);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "im" },
                _react2.default.createElement(
                    "div",
                    { className: "header" },
                    "Conversation with ",
                    this.props.selectedContact.name
                ),
                _react2.default.createElement(
                    "div",
                    { className: "messages" },
                    this.props.messages.map(function (message, index) {
                        return _react2.default.createElement(
                            "div",
                            { key: index, className: message.senderId == window.userId ? 'message self' : 'message' },
                            message.senderId != window.userId && _react2.default.createElement(
                                "div",
                                { className: "name" },
                                message.senderName
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "content" },
                                message.message
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "time" },
                                new Date(message.timestamp).getHours() + ":" + new Date(message.timestamp).getMinutes()
                            )
                        );
                    }),
                    _react2.default.createElement(
                        "div",
                        { key: 1000, className: "message self" },
                        _react2.default.createElement(
                            "div",
                            { className: "content" },
                            "Hello there, how are you ?"
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "time" },
                            "11:45 am"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { key: 1001, className: "message" },
                        _react2.default.createElement(
                            "div",
                            { className: "name" },
                            "Jerry"
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "content" },
                            "What's up ? It's been a while. How is your work going on in the company ? Hope you are doing well I think it's really cool that shit."
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "time" },
                            "12:00 am"
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "message-input" },
                    _react2.default.createElement("input", { value: this.state.message, onChange: this.handleInputChange,
                        placeholder: "Type your message here.", type: "text" }),
                    _react2.default.createElement(
                        "button",
                        { onClick: this.handleSendClick },
                        "Send"
                    )
                )
            );
        }
    }]);

    return ChatIm;
}(_react2.default.Component);

module.exports.ChatIm = ChatIm;