import { useState } from "react"
import axios from 'axios';

const projectID = 'a8563bf7-3f9c-4118-977a-a05ccb95125a';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password};

        try{
            //username | password => chatengine --> give messages

            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
           
            //works out --> logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            
        
        } catch(error) {
            //error ==> try with another credentials
            setError('Oops, incorrect credentials');
        }

        
        
    };


    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );

};

export default LoginForm;