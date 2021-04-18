import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height='100vh'
            userName='gunjan'
            userSecret='123456'
            projectID='a8563bf7-3f9c-4118-977a-a05ccb95125a'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
};


export default App;