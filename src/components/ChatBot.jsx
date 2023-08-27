import ChatBot from "react-simple-chatbot";
import steps from "./Steps";

const Chat = () => {
  return <ChatBot steps={steps} headerTitle="My Portfolio Chatbot" />;
};

export default Chat;
