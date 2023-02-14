import React, { useState } from "react";
import { Link } from "react-router-dom";
import envelopIcon from "../../../Assets/images/Icons-PNG/envelop-white.PNG";

const Chat = () => {
  const [openChatBox, setOpenChatBox] = useState(false);
  const [openChatList, setOpenChatList] = useState(false);
  const showChatBox = () => {
    setOpenChatBox(!openChatBox);
  };
  const showChatList = () => {
    setOpenChatList(!openChatList);
  };
  return (
    <div className="chat-wrap">
      <div
        className={`chat-box ${openChatBox ? "open" : ""}`}
        onClick={showChatBox}
      >
        <div className="box-inner-wrapper">
          <div className="chat-box--header">
            <div className="avatar">{/* <img src={} alt="" /> */}</div>
            <div className="text">
              <h5>
                <Link to="/">
                  Hasham
                  <small>@hasham_900</small>
                </Link>
              </h5>
            </div>
          </div>
          <div className="chat-box--content">
            <div className="sender">
              <div className="pro-img"></div>
              <div className="pro-txt">
                <small>@hasham_900</small>
                <p>Hi, How Are You?</p>
              </div>
            </div>
            <div className="reciver">
              <div className="pro-img"></div>
              <div className="pro-txt">
                <small>@hasham_900</small>
                <p>Hi, How Are You?</p>
              </div>
            </div>
            <div className="sender">
              <div className="pro-img"></div>
              <div className="pro-txt">
                <small>@hasham_900</small>
                <p>Hi, How Are You?</p>
              </div>
            </div>
            <div className="reciver">
              <div className="pro-img"></div>
              <div className="pro-txt">
                <small>@hasham_900</small>
                <p>Hi, How Are You?</p>
              </div>
            </div>
            <div className="sender">
              <div className="pro-img"></div>
              <div className="pro-txt">
                <small>@hasham_900</small>
                <p>Hi, How Are You?</p>
              </div>
            </div>
            <div className="reciver">
              <div className="pro-img"></div>
              <div className="pro-txt">
                <small>@hasham_900</small>
                <p>Hi, How Are You?</p>
              </div>
            </div>
            <div className="sender">
              <div className="pro-img"></div>
              <div className="pro-txt">
                <small>@hasham_900</small>
                <p>Hi, How Are You?</p>
              </div>
            </div>
            <div className="reciver">
              <div className="pro-img"></div>
              <div className="pro-txt">
                <small>@hasham_900</small>
                <p>Hi, How Are You?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`chat-list-box ${openChatList ? "open" : ""}`}
        onClick={showChatList}
      >
        <div className="list-inner-wrapper">
          <div className="chat-list--header">
            <img src={envelopIcon} alt="icon" />
            Chats
          </div>
          <div className="chat-list--content">
            <div className="chat-person">
              <div className="content--wrap">
                <div className="person-img"></div>
                <div className="person-txt">
                  <p>Hasham</p>
                  <small>@hasham_900</small>
                </div>
              </div>
              <div className="dot online"></div>
            </div>
            <div className="chat-person">
              <div className="content--wrap">
                <div className="person-img"></div>
                <div className="person-txt">
                  <p>Hasham</p>
                  <small>@hasham_900</small>
                </div>
              </div>
              <div className="dot online"></div>
            </div>
            <div className="chat-person">
              <div className="content--wrap">
                <div className="person-img"></div>
                <div className="person-txt">
                  <p>Hasham</p>
                  <small>@hasham_900</small>
                </div>
              </div>
              <div className="dot offline"></div>
            </div>
            <div className="chat-person">
              <div className="content--wrap">
                <div className="person-img"></div>
                <div className="person-txt">
                  <p>Hasham</p>
                  <small>@hasham_900</small>
                </div>
              </div>
              <div className="dot online"></div>
            </div>
            <div className="chat-person">
              <div className="content--wrap">
                <div className="person-img"></div>
                <div className="person-txt">
                  <p>Hasham</p>
                  <small>@hasham_900</small>
                </div>
              </div>
              <div className="dot offline"></div>
            </div>
            <div className="chat-person">
              <div className="content--wrap">
                <div className="person-img"></div>
                <div className="person-txt">
                  <p>Hasham</p>
                  <small>@hasham_900</small>
                </div>
              </div>
              <div className="dot offline"></div>
            </div>
            <div className="chat-person">
              <div className="content--wrap">
                <div className="person-img"></div>
                <div className="person-txt">
                  <p>Hasham</p>
                  <small>@hasham_900</small>
                </div>
              </div>
              <div className="dot online"></div>
            </div>
            <div className="chat-person">
              <div className="content--wrap">
                <div className="person-img"></div>
                <div className="person-txt">
                  <p>Hasham</p>
                  <small>@hasham_900</small>
                </div>
              </div>
              <div className="dot offline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
