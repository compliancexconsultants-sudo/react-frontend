import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const UserChat = () => {
  const { caseId } = useParams();
  console.log(caseId);
  
  const user = JSON.parse(localStorage.getItem("legalhubUser"));
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  // Load messages:
  useEffect(() => {
    const q = query(
      collection(db, "chats", caseId, "messages"),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, [caseId]);

  // Send message
  const sendMessage = async () => {
    if (text.trim() === "") return;

    await addDoc(collection(db, "chats", caseId, "messages"), {
      sender: "user",
      text,
      timestamp: serverTimestamp(),
      userId: user.uid,
      userName: user.name,
    });

    setText("");
  };

  return (
    <Layout>
      <h2>Chat with CA</h2>

      <div className="chat-box">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.sender}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input 
          value={text}
          onChange={(e) => setText(e.target.value)} 
          placeholder="Type message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </Layout>
  );
};

export default UserChat;
