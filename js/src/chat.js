import React from 'react';
import {ChatHeader} from './chat_header.js';
import {ChatTabs} from './chat_tabs.js';
import {ChatContacts} from './chat_contacts.js';  
import {ChatIm} from './chat_im.js';  

class Chat extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            contacts: [],
            selectedContact: {},
            activeTab: 'IM',
            messages: []
        }
        
        // Binds.
        this.updateSelectedContact = this.updateSelectedContact.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.addMessage = this.addMessage.bind(this);
        socket.on('new_message', function(data) {
            this.state.messages.push(data);
            this.setState({
                messages: this.state.messages
            }); 
            console.log(this.state.messages);
        }.bind(this));
    }

    componentDidMount() {

        // Get the contacts for the user.
        fetch('/api/contacts.php')
            .then(function(response) {
                return response.json()})
            .then( function(data) {
                this.setState({
                    contacts: data
                });
                this.setState({});
            }.bind(this))
    }

    /*-----------------
     * Updates the selected contact. It shows the converssation tab and
     * fetched the chat history.
     */
    updateSelectedContact(newContact) {
        
        this.setState({
            selectedContact: newContact,
            activeTab: 'IM'
        })
    }

    /*-------------
     * Handles the click on tab.
     */
    handleTabClick(e) {
        if(e.target.innerHTML.trim() == this.state.activeTab) return;

        this.setState({
            activeTab: e.target.innerHTML.trim()
        })
    }

    addMessage(newMessage) {
        this.state.messages.push(newMessage);
        this.setState({
            messages: this.state.messages
        })
    }

    render() {
        /*---
         * Decide the component to show based on the actiev tab.
         *---
         */
        let activeComponent = <ChatIm selectedContact={this.state.selectedContact} 
            messages={this.state.messages}
            addMessage={this.addMessage} />
        if(this.state.activeTab == 'Contacts')
            activeComponent = <ChatContacts contacts={this.state.contacts}
                 updateSelectedContact={this.updateSelectedContact} />;

        return (
            <div>
                <ChatHeader/>
                <ChatTabs activeTab={this.state.activeTab} handleTabClick={this.handleTabClick} />
                {activeComponent}
            </div>
        );
    }
}

module.exports.Chat = Chat;