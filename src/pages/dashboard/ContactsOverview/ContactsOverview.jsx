import "./ContactsOverview.css";
function ContactsOverview() {
  return (
    <>
      <div className="contacts-overview">
        <div className="contacts-left-section">
          <h3>Workspace</h3>
          <div className="the-curator">
            <img src="/images/png/workspace-curator.png" alt="curator img" />
            <div className="curator-title">
              <span>The Curator</span>
              <p>Premium Plan</p>
            </div>
          </div>
          <div className="curator-imkoniyatlar">
            <div className="curator-imkoniyatlar">
              <div className="curator-imkoniyat">
                <img
                  src="/images/png/workspace-messages.png"
                  alt="messages icon"
                />
                <span>Messages</span>
              </div>
              <div className="curator-imkoniyat">
                <img src="/images/png/workspace-channels.png" alt="icon" />
                <span>Channels</span>
              </div>
              <div className="curator-imkoniyat">
                <img src="/images/png/workspace-contacts.png" alt="icon" />
                <span>Contacts</span>
              </div>
              <div className="curator-imkoniyat">
                <img src="/images/png/workspace-files.png" alt="icon" />
                <span>Files</span>
              </div>
              <div className="curator-imkoniyat">
                <img src="/images/png/workspace-settings.png" alt="icon" />
                <span>Settings</span>
              </div>
            </div>
          </div>
          <div className="curator-storage">
            <span>STORAGE</span>
            <div className="storage-div">
              <div className="storage-progress"></div>
            </div>
            <p>15.2 GB / 20 GB used</p>
          </div>
        </div>
        <div className="contacts-right-section">
          <div className="contacts-right-nav">
            <input type="text" placeholder="contacts" required />
            <div className="three-elements">
              <button>
                <img src="/images/svg/qongiroqcha.svg" alt="icon" />
              </button>
              <button>
                <img src="/images/png/workspace-help.png" alt="icon" />
              </button>
              <button>
                <img src="/images/svg/+.svg" alt="icon" />
                <span>Add Contact</span>
              </button>
            </div>
          </div>
          <div className="contacts-main">
            <h2>Directory</h2>
            <div className="contact collaborators">
              <p>Manage your professional network and collaborators.</p>
              <div className="two-btns">
                <button>All Contacts</button>
                <button>Recently Added</button>
              </div>
            </div>
            <div className="contacts">
              <div className="contact">
                <img src="/images/svg/uchnuqta.svg" alt="" />
                <img
                  src="/images/jpeg/julian-rossi.jpg"
                  alt="person"
                  width={80}
                  height={80}
                />
                <span>Julian Rossi</span>
                <p>Lead Architect • Milan</p>
                <div className="message-and-video">
                  <button>
                    <img src="/images/svg/message-icon.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/svg/video-icon.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="contact">
                <img src="/images/svg/uchnuqta.svg" alt="" />
                <img
                  src="/images/jpeg/elena-vance.jpg"
                  alt="person"
                  width={80}
                  height={80}
                />
                <span>Elena Vance</span>
                <p>Product Strategist • London</p>
                <div className="message-and-video">
                  <button>
                    <img src="/images/svg/message-icon.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/svg/video-icon.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="contact">
                <img src="/images/svg/uchnuqta.svg" alt="" />
                <img
                  src="/images/jpeg/elena-vance.jpg"
                  alt="person"
                  width={80}
                  height={80}
                />
                <span>Marcus Thorne</span>
                <p>Brand Identity • Brooklyn</p>
                <div className="message-and-video">
                  <button>
                    <img src="/images/svg/message-icon.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/svg/video-icon.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="contact">
                <img src="/images/svg/uchnuqta.svg" alt="" />
                <img
                  src="/images/jpeg/elena-vance.jpg"
                  alt="person"
                  width={80}
                  height={80}
                />
                <span>Sarah Chen</span>
                <p>Senior Developer • Tokyo</p>
                <div className="message-and-video">
                  <button>
                    <img src="/images/svg/message-icon.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/svg/video-icon.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactsOverview;
