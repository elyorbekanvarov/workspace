// src/pages/dashboard/ChatEmptyState/ChatEmptyState.jsx
import { Link, useNavigate } from "react-router-dom";
import "./ChatEmptyState.css";

function ChatEmptyState() {
  const navigate = useNavigate();

  const handleContactsClick = () => {
    navigate("/contacts");
  };

  const handleMessagesClick = () => {
    navigate("/chat");
  };

  return (
    <div className="chat-empty-state">
      <div className="workspace-left">
        <div className="workspace-logo">
          <img src="/images/svg/workspace-logo.svg" alt="workspace logo" />
          <div className="workspace-logo-title">
            <span>Workspace</span>
            <p>The Fluid Workspace</p>
          </div>
        </div>

        <button className="new-message-btn">
          <img src="/images/svg/+.svg" alt="plus" />
          <span>New Message</span>
        </button>

        <div className="workspace-imkoniyatlar">
          <div className="workspace-imkoniyat" onClick={handleMessagesClick}>
            <img src="/images/png/workspace-messages.png" alt="messages icon" />
            <span>Messages</span>
          </div>
          <div className="workspace-imkoniyat">
            <img src="/images/png/workspace-channels.png" alt="icon" />
            <span>Channels</span>
          </div>
          <div className="workspace-imkoniyat" onClick={handleContactsClick}>
            <img src="/images/png/workspace-contacts.png" alt="icon" />
            <span>Contacts</span>
          </div>
          <div className="workspace-imkoniyat">
            <img src="/images/png/workspace-files.png" alt="icon" />
            <span>Files</span>
          </div>
          <div className="workspace-imkoniyat">
            <img src="/images/png/workspace-settings.png" alt="icon" />
            <span>Settings</span>
          </div>
        </div>

        <div className="workspace-side-foot">
          <div className="workspace-foot-imkoniyat">
            <img src="/images/png/workspace-help.png" alt="icon" />
            <span>Help</span>
          </div>
          <div className="workspace-foot-imkoniyat">
            <img src="/images/png/workspace-archive.png" alt="icon" />
            <span>Archive</span>
          </div>
          <div className="workspace-foot-avatar">
            <img src="/images/png/workspace-avatar.png" alt="avatar" />
            <div className="workspace-avatar-title">
              <span>Alex Morgan</span>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="workspace-right">
        <div className="chat-empty-nav">
          <div className="chat-empty-nav-left">
            <h3>The Fluid Workspace</h3>
            <Link to={"/chat"}>Direct</Link>
            <Link to={"/chat"}>Groups</Link>
          </div>
          <div className="chat-empty-nav-right">
            <button className="search-btn">
              <img src="/images/svg/workspace-find.svg" alt="icon" />
            </button>
            <button className="video-btn">
              <img src="/images/svg/workspace-video.svg" alt="icon" />
              <span>Video</span>
            </button>
            <button className="call-btn">
              <img src="/images/svg/workspace-call.svg" alt="icon" />
              <span>Call</span>
            </button>
            <div className="undov-va-uchnuqta">
              <Link to={"/"}>
                <img src="/images/svg/!.svg" alt="icon" />
              </Link>
              <Link to={"/"}>
                <img src="/images/svg/uchnuqta.svg" alt="icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="chat-empty-main">
          <img
            className="chat-empty-left-bgc"
            src="/images/png/chat-empty-bgc-left.png"
            alt="img"
          />
          <img
            className="chat-empty-left-bgc-bottom"
            src="/images/png/chat-empty-bgc-left-bottom.png"
            alt="img"
          />
          <div className="chat-empty-center">
            <img src="/images/png/no-conversations-yet.png" alt="img" />
            <h1>No conversations yet</h1>
            <p>
              Start a new chat to connect with your team and keep the
              collaboration flowing. Your focused workspace is ready when you
              are.
            </p>
            <div className="chat-emtpy-center-btns">
              <button>
                <img src="/images/svg/start-new-chat.svg" alt="icon" />
                <span>Start new chat</span>
              </button>
              <button>
                <img src="/images/svg/explore-channels.svg" alt="icon" />
                <span>Explore channels</span>
              </button>
            </div>
          </div>
          <img
            className="chat-empty-right-bgc"
            src="/images/png/chat-empty-bgc-right.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default ChatEmptyState;
