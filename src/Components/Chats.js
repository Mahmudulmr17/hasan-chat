import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src="https://images.pexels.com/photos/8283967/pexels-photo-8283967.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>How are you?</p>
        </div>
      </div>

      <div className="userChat">
        <img src="https://images.pexels.com/photos/8283967/pexels-photo-8283967.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>

      <div className="userChat">
        <img src="https://images.pexels.com/photos/8283967/pexels-photo-8283967.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
