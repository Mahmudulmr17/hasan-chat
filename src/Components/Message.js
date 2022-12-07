import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/8283967/pexels-photo-8283967.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/8283967/pexels-photo-8283967.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
    </div>
  );
};

export default Message;
