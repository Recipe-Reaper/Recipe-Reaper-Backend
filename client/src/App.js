import { useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function sendLoginRequest(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/login", {username, password})
    }

    return (
	<div id="wrapper">
	    <h1>Image goes here.</h1>
	    <form onSubmit={sendLoginRequest}>
            <label for="username">Username:</label>
            <input type="input" 
                value={username} onChange = {(e) => setUsername(e.target.value)}
                name="username" id="username" />
            <br/>
			<br/>
            <label for="password">Password:</label>
            <input type="input" 
                value={password} onChange={(e) => setPassword(e.target.value)} 
                name="password" id="password" />
            <br/>
			<br/>
            <input type="submit" value="Log In" />
        </form>
	</div>
  );
}

export default App;
