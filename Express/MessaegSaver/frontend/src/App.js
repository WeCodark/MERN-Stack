import React, { useState } from "react";
import axios from "axios";

import "./App.css";
function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSave = async () => {
    try {
      const res = await axios.post("http://localhost:5000/save", { message });
      setResponse(res.data);
      setMessage("");
    } catch (error) {
      setResponse("Error saving message");
    }
  };


  return (
    <div className="app-container">
      <h1>Message Saver:</h1>
      <textarea
        className="message-input"
        row="4"
        cols="40"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message here"
      />
      <br />

      <button className="save-button" onClick={handleSave}>Save Message</button>
      <p className="response-message">{response}</p>
    </div>
  )

}

export default App;