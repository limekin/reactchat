import React from 'react';

class ChatContacts extends React.Component {

    constructor(props) {
        super(props)

        console.log(props.contacts);
    }

    render() {
        console.log(this.props.contacts);
        return (
            <div className='user-contacts'>
                {this.props.contacts.map( (contact) => 
                    <Contact contact={contact} 
                        updateSelectedContact={this.props.updateSelectedContact} />
                )}
            </div>
        );      
    }

}

/*-----------------
 * This is a small component helps keep things simple.
 */
class Contact extends React.Component {

    constructor(props) {
        super(props)

        this.handleContactClick = this.handleContactClick.bind(this);
    }

    handleContactClick(e) {
        this.props.updateSelectedContact(this.props.contact)
    }

    render() {
        return (
            <div className='contact' onClick={this.handleContactClick}>
                {this.props.contact.name}
            </div>
        );
    }
}

module.exports.ChatContacts = ChatContacts;