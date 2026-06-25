import { useState } from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";

function TopBar() {
  return (
    <div className="chat-top-bar">
      <div className="chat-meta-overlay">
        <span className="chat-meta-title">Odysseus Chat</span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}

function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <div className="welcome-name">
        <svg className="welcome-boat" viewBox="0 0 32 32">
          <path d="M16 4L16 22L6 22Z" fill="currentColor" />
          <path d="M16 8L16 22L24 22Z" fill="currentColor" opacity="0.6" />
          <path
            d="M4 24Q10 20 16 24Q22 28 28 24"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        Odysseus
      </div>
      <div className="welcome-sub">
        Type <span className="setup-link">/setup</span> to get started.
      </div>
      <div className="welcome-tip">
        Add an AI endpoint from Settings in the sidebar, or paste an
        endpoint/API key into the chat.
      </div>
      <button
        className="nobody-btn"
        title="Enable Nobody mode — no memory, no history saved"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span>Nobody</span>
      </button>
    </div>
  );
}

function ChatInput() {
  const [mode, setMode] = useState<"agent" | "chat">("chat");

  return (
    <div className="chat-input-area">
      <div className="chatBox">
        <div className="chat-input-top">
          <textarea
            className="chat-textarea"
            placeholder="Message Odysseus..."
            rows={1}
          />
          <button className="model-select-btn">
            Select model
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
        <div className="chat-input-bottom">
          <div className="chat-input-left">
            <button className="input-icon-btn" title="Expand">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <button className="input-icon-btn" title="Search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="10" cy="10" r="7" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
          <div className="chat-input-right">
            <div
              className={`mode-toggle ${mode === "chat" ? "mode-chat" : ""}`}
            >
              <button
                className={`mode-toggle-btn ${mode === "agent" ? "active" : ""}`}
                onClick={() => setMode("agent")}
              >
                Agent
              </button>
              <button
                className={`mode-toggle-btn ${mode === "chat" ? "active" : ""}`}
                onClick={() => setMode("chat")}
              >
                Chat
              </button>
            </div>
            <button className="send-btn" title="Send">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="mainbody">
        <TopBar />
        <WelcomeScreen />
        <ChatInput />
      </main>
    </div>
  );
}

export default App;
