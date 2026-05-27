import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function IconOverview() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function IconCreate() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

function Sidebar() {
  const location = useLocation();

  function isActive(path: string) {
    return location.pathname.startsWith("/" + path);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4476ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div className="sidebar-logo-text">
            <span className="sidebar-logo-name">DevKarriere</span>
            <span className="sidebar-logo-sub">Nutzerverwaltung</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <p className="sidebar-section-label">MENÜ</p>

        <Link to="/overview">
          <button
            className={
              isActive("overview")
                ? "sidebar-btn sidebar-btn--active"
                : "sidebar-btn"
            }
          >
            <span className="sidebar-btn-icon">
              <IconOverview />
            </span>
            <span>Übersicht</span>
          </button>
        </Link>

        <Link to="/create">
          <button
            className={
              isActive("create")
                ? "sidebar-btn sidebar-btn--active"
                : "sidebar-btn"
            }
          >
            <span className="sidebar-btn-icon">
              <IconCreate />
            </span>
            <span>Erstellen</span>
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
