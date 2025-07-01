import React from "react";

const Sidebar = () => {
  const tabs = [
  { id: "about", label: "ABOUT", link: "/about" },
  { id: "experiences", label: "EXPERIENCES", link: "/experiences" },
  { id: "activities", label: "ACTIVITIES", link: "/activities" },
];

  return (
    <aside className="sidebar">
      <div className="intro">
        <h1>Khayzel Garcia</h1>
        <h2>2025 Portfolio</h2>
        <p>I am a Computer Engineering student seeking meaningful experiences all while challenging the stereotype of a male-dominated technological industry.</p>

        <nav>
          <ul className="tab-list">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <a href={tab.link} className={`tab-link ${window.location.pathname.includes(tab.link) ? "active" : ""}`}>
                  <span className="line" />
                  <span className="tab-text">{tab.label}</span>
                  </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="socials">
        <div className="tooltip">
          <a href="https://www.facebook.com/khyzl.grc28" target="_blank" rel="noopener noreferrer">
          <img src="/socmeds/facebook.png" alt="Facebook" />
          <span className="tooltip-text">Facebook</span>
          </a>
        </div>
        <div className="tooltip">
          <a href="https://www.instagram.com/khyzlgrc/" target="_blank" rel="noopener noreferrer">
          <img src="/socmeds/instagram.png" alt="Instagram" />
          <span className="tooltip-text">Instagram</span>
          </a>
        </div>
        <div className="tooltip">
          <a href="mailto:khyzlgrc@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/socmeds/email.png" alt="Email" />
          <span className="tooltip-text">Email</span>
          </a>
        </div>
        <div className="tooltip">
          <a href="https://www.hostinger.com/tutorials/web-developer-portfolio/" target="_blank" rel="noopener noreferrer">
          <img src="/socmeds/note.png" alt="Note" />
          <span className="tooltip-text">This portfolio's design is inspired by Brittany Chiang's website.</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;