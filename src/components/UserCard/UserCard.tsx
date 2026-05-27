import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/User";
import "./UserCard.css";

type UserCardProps = { user: User };

function IconCalendar() {
  return (
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
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function IconMail() {
  return (
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconAddress() {
  return (
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
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconPhone() {
  return (
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 5.55 5.55l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconWeb() {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function IconTrash() {
  return (
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
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function UserCard({ user }: UserCardProps) {
  const { removeUser } = useContext(UserContext);

  function handleDelete(event: React.MouseEvent) {
    event.preventDefault();
    const confirmed = window.confirm(`Nutzer "${user.name}" wirklich löschen?`);
    if (confirmed) removeUser(user.id);
  }

  function formatDate(dateString: string): string {
    if (!dateString) return "–";
    return new Date(dateString).toLocaleDateString("de-DE");
  }

  return (
    <div className="usercard">
      <div className="usercard-header">
        <img
          src={`https://randomuser.me/api/portraits/men/${Math.floor((user.id * 7) % 99) + 1}.jpg`}
          alt={user.name}
          className="usercard-avatar"
        />
        <div className="usercard-identity">
          <div className="usercard-name">{user.name}</div>
          <div className="usercard-gender">{user.gender || "–"}</div>
          <div className="usercard-dob">
            <span className="usercard-icon">
              <IconCalendar />
            </span>
            {formatDate(user.dob)}
          </div>
        </div>
        <button className="usercard-delete" onClick={handleDelete}>
          <IconTrash />
        </button>
      </div>

      <div className="usercard-divider" />

      <div className="usercard-grid">
        <div className="usercard-cell">
          <span className="usercard-cell-label">
            <span className="usercard-icon">
              <IconMail />
            </span>
            E-Mail
          </span>
          <span className="usercard-cell-value">{user.email}</span>
        </div>

        <div className="usercard-cell">
          <span className="usercard-cell-label">
            <span className="usercard-icon">
              <IconPhone />
            </span>
            Telefon
          </span>
          <span className="usercard-cell-value">{user.phone}</span>
        </div>

        <div className="usercard-cell usercard-cell--full">
          <span className="usercard-cell-label">
            <span className="usercard-icon">
              <IconAddress />
            </span>
            Adresse
          </span>
          <span className="usercard-cell-value">{user.address}</span>
        </div>

        <div className="usercard-cell usercard-cell--full">
          <span className="usercard-cell-label">
            <span className="usercard-icon">
              <IconWeb />
            </span>
            Webseite
          </span>
          <span className="usercard-cell-value">{user.web}</span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
