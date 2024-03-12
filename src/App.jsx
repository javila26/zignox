import { useState } from "react";
import { MESSAGES } from "./messages";
import Message from "./components/Message";
import Header from "./components/Header";
import "./App.css";

let count = 0;
const defaultMessage = [
  {
    message_text: "conversation ended",
  },
];
function App() {
  const [messages, setMessages] = useState([]);

  function handleClick() {
    setMessages((prevMessages) => {
      if (typeof MESSAGES[count] !== "undefined") {
        const newMessage = [...prevMessages, MESSAGES[count]];
        count = count + 1;
        return newMessage;
      }
    });
  }

  return (
    <>
      <div className="message-box">
        <Header />
        <ul className="messages">
          {messages.map((message) => (
            <Message key={message.id} text={message.message_text} />
          ))}
        </ul>
        <section>
          <input placeholder="Type a message" autoComplete="off" type="text" />
          <button onClick={handleClick}>Send</button>
        </section>
      </div>
    </>
  );
}

export default App;
