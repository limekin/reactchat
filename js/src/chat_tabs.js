import React from 'react';

class ChatTabs extends React.Component {

    constructor(props) {
        super(props)

        // Binders.
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    /*-----
     * When a tab is clicked, make it active by placing active class.
     * Also update the appropriate content shown in the chat.
     *----
     */
    handleTabClick(e) {
        this.props.handleTabClick(e);
    }

    render() {
        return (
            <div className='tabs'>
                <div className={'tab ' + (this.props.activeTab == 'Contacts' ? 'active' : '')}
                    onClick={this.handleTabClick}>
                    Contacts
                </div>
                <div className={'tab ' + (this.props.activeTab == 'IM' ? 'active' : '') }
                    onClick={this.handleTabClick}>
                    IM
                </div>
            </div>
        )
    }
}

module.exports.ChatTabs = ChatTabs;