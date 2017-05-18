<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
        <link href='css/chat.css' rel='stylesheet'>

        <!-- Livereload. -->
        <script src='http://localhost:5000/livereload.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.1/socket.io.js'>
        </script>

    </head>
    <body>

        <h1>Hello</h1>
        <p>This is a chat application written in react and php.</p>
        <button class='chat-button'>Chat</button>

        <!--
        <div id='chat'>
            <div class='header'>
                Chat
            </div>
            <div class='contacts'>
                <div class='contact'>
                    <span class='online'></span>
                    <span class='name'>Kevin Jayanthan</span> 
                </div>
                <div class='contact'>
                    <span class='online'></span>
                    <span class='name offline'>Ajay Shibu</span>
                </div>
                <div class='contact'>
                    <span class='online'></span>
                    <span class='name'>Matt Le Blanc</span>
                </div>
                <div class='contact'>
                    <span class='online'></span>
                    <span class='name'>Dinoop Dileep</span>
                </div>
                <div class='contact'>
                    <span class='online'></span>
                    <span class='name'>Mithun Hari</span>
                </div>
                <div class='contact'>
                    <span class='online'></span>
                    <span class='name'>Biju Sunadaran</span>
                </div>
                <div class='contact'>
                    <span class='online'></span>
                    <span class='name'>Dinoop Dileep</span>
                </div>
            </div>
            <div class='conversation'>
                <div class='header'>
                    Chat with Kevin
                </div>
                <div class='content'>
                    <div class='message me'>
                        <span class='name'>Kevin</span>: 
                        <span class='message'>
                            Hello, are you there ?
                        </span>
                    </div>
                    <div class='message me'>
                        <span class='name'>Kevin</span>: 
                        <span class='message'>
                            Hello, are you there ?
                        </span>
                    </div>
                    <div class='message user'>
                        <span class='name'>You</span>: 
                        <span class='message'>
                            Hello, are you there ?
                        </span>
                    </div>
                    <div class='message user'>
                        <span class='name'>You</span>: 
                        <span class='message'>
                            Hello, are you there ?
                        </span>
                    </div>
                    <div class='message user'>
                        <span class='name'>You</span>: 
                        <span class='message'>
                            Hello, are you there ?
                        </span>
                    </div>
                    <div class='message user'>
                        <span class='name'>You</span>: 
                        <span class='message'>
                            Hello, are you there ? I'm lookin for buying your phone, so I need to know more details on <it class=""></it>'
                        </span>
                    </div>
                    <div class='message me'>
                        <span class='name'>You</span>: 
                        <span class='message'>
                            Hello, are you there ?
                        </span>
                    </div>
                    <div class='message me'>
                        <span class='name'>You</span>: 
                        <span class='message'>
                            Hello, are you there ?
                        </span>
                    </div>
                    <div class='message user'>
                        <span class='name'>You</span>: 
                        <span class='message'>
                            Hello, are you there ?
                        </span>
                    </div>
                    <div class='message me'>
                        <span class='name'>You</span>: 
                        <span class='message'>
                            Hello, are you there ?
                        </span>
                    </div>
                </div>
                <input class='send'>
            </div>
            
        </div>
        -->
        <div id='chat'></div>
    
        <script>
            var socket = io.connect('http://localhost:9000');
            
            function getReady(userId) {
                socket.emit("user_ready", {
                    userId: userId
                });
                window.userId = userId;
            }

            function boot(userId, rId) {    
                var socket = io.connect('http://localhost:9000');
                
                socket.emit("send_message", {
                    userId: rId,
                    message: "Hello !"
                }); 
                socket.on("new_message", function(data) {
                    console.log(data);
                })
            }

            function sendMessage(userId) {
                socket.emit("send_message", {
                    userId: userId,
                    message: "Hello !"
                });
            }

            
        </script>
                <script src='/js/index.js'></script>

    </body>
</html>