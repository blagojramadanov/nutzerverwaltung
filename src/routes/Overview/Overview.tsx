import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import UserCard from "../../components/UserCard/UserCard";
import "./Overview.css";

function IconUsers() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconPlus() {
  return (
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
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function Overview() {
  const { users } = useContext(UserContext);

  return (
    <div className="overview">
      <div className="overview-header">
        <div className="overview-header-left">
          <span className="overview-header-icon">
            <IconUsers />
          </span>
          <div>
            <h1 className="overview-title">Nutzerverwaltung</h1>
            <p className="overview-subtitle">{users.length} Nutzer gesamt</p>
          </div>
        </div>
        <Link to="/create">
          <button className="overview-add-btn">
            <IconPlus />
            Neuer Nutzer
          </button>
        </Link>
      </div>

      {users.length === 0 && (
        <div className="overview-empty">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2e2e42"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <p className="overview-empty-text">Noch keine Nutzer vorhanden.</p>
          <p className="overview-empty-sub">
            Klicke auf <strong>Neuer Nutzer</strong> um loszulegen.
          </p>
        </div>
      )}

      <div className="overview-grid">
        {users.map((user) => (
          <Link to={`/edit/${user.id}`} key={user.id}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Overview;
