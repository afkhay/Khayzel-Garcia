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
        <a href="https://www.facebook.com/khyzl.grc28">🐱</a>
        <a href="https://www.instagram.com/khyzlgrc/">💼</a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmmBbKGvdvLbBmrFbxmRtVQCKcgxbWdHzxjNLQWZwfFMDHzxBFLLjVXlpdbcHCBrsjXBjs">📷</a>
      </div>
    </aside>
  );
};

export default Sidebar;