'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chat_header = require('./chat_header.js');

var _chat_tabs = require('./chat_tabs.js');

var _chat_contacts = require('./chat_contacts.js');

var _chat_im = require('./chat_im.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_React$Component) {
    _inherits(Chat, _React$Component);

    function Chat(props) {
        _classCallCheck(this, Chat);

        var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

        _this.state = {
            contacts: [],
            selectedContact: {},
            activeTab: 'IM',
            messages: []
        };

        // Binds.
        _this.updateSelectedContact = _this.updateSelectedContact.bind(_this);
        _this.handleTabClick = _this.handleTabClick.bind(_this);
        socket.on('new_message', function (data) {
            this.state.messages.push(data.message);
            this.setState({
                messages: this.state.messages
            });
            console.log(this.state.messages);
        }.bind(_this));
        return _this;
    }

    _createClass(Chat, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            // Get the contacts for the user.
            fetch('/api/contacts.php').then(function (response) {
                return response.json();
            }).then(function (data) {
                this.setState({
                    contacts: data
                });
                this.setState({});
            }.bind(this));
        }

        /*-----------------
         * Updates the selected contact. It shows the converssation tab and
         * fetched the chat history.
         */

    }, {
        key: 'updateSelectedContact',
        value: function updateSelectedContact(newContact) {

            this.setState({
                selectedContact: newContact,
                activeTab: 'IM'
            });
        }

        /*-------------
         * Handles the click on tab.
         */

    }, {
        key: 'handleTabClick',
        value: function handleTabClick(e) {
            if (e.target.innerHTML.trim() == this.state.activeTab) return;

            this.setState({
                activeTab: e.target.innerHTML.trim()
            });
        }
    }, {
        key: 'addMessage',
        value: function addMessage() {}
    }, {
        key: 'render',
        value: function render() {
            /*---
             * Decide the component to show based on the actiev tab.
             *---
             */
            var activeComponent = _react2.default.createElement(_chat_im.ChatIm, { selectedContact: this.state.selectedContact,
                messages: this.state.messages });
            if (this.state.activeTab == 'Contacts') activeComponent = _react2.default.createElement(_chat_contacts.ChatContacts, { contacts: this.state.contacts,
                updateSelectedContact: this.updateSelectedContact });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_chat_header.ChatHeader, null),
                _react2.default.createElement(_chat_tabs.ChatTabs, { activeTab: this.state.activeTab, handleTabClick: this.handleTabClick }),
                activeComponent
            );
        }
    }]);

    return Chat;
}(_react2.default.Component);

module.exports.Chat = Chat;