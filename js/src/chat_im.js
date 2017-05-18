import React from 'react';

class ChatIm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timestamp: null,
            message: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSendClick = this.handleSendClick.bind(this);
    }

    componentDidMount() {
       
    }

    handleInputChange(e) {
        console.log(e.target.value);
        this.setState({
            message: e.target.value
        })
    }

    handleSendClick(e) {
        let newMessage = {
            recipientId: this.props.selectedContact.id,
            message: this.state.message,
            senderId: window.userId,
            timestamp: new Date().getTime(),
            senderName: "Aju"
        }
        socket.emit("send_message", newMessage)
        this.props.addMessage(newMessage);
    }

    render() {
        return (
            <div className='im'>
                <div className='header'>
                    Conversation with {this.props.selectedContact.name}
                </div>
                <div className='messages'>
                    
                    {this.props.messages.map( (message, index) => 
                        <div key={index} className={message.senderId == window.userId ? 'message self' : 'message'}>
                            { message.senderId != window.userId &&
                                <div className='name'>
                                    {message.senderName}
                                </div>
                            }
                            <div className='content'>
                                {message.message}
                            </div>
                            <div className='time'>
                                { new Date(message.timestamp).getHours() + ":" + new Date(message.timestamp).getMinutes()}
                            </div>
                        </div>
                    )}

                    <div key={1000} className='message self'>
                        <div className='content'>
                            Hello there, how are you ?
                        </div>
                        <div className='time'>
                            11:45 am
                        </div>
                    </div>
                    <div key={1001} className='message'>
                        <div className='name'>
                            Jerry
                        </div>
                        <div className='content'>
                            What's up ? It's been a while. How is your work going on in the company ?
                            Hope you are doing well I think it's really cool that shit.
                        </div>
                        <div className='time'>
                            12:00 am
                        </div>
                    </div>
                </div>
                <div className='message-input'>
                    <input value={this.state.message} onChange={this.handleInputChange}
                        placeholder='Type your message here.' type='text'/>
                    <button onClick={this.handleSendClick} >Send</button>   
                </div>
            </div>
        )
    }
}

module.exports.ChatIm = ChatIm;