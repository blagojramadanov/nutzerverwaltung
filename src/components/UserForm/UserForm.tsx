import { useFormInput } from "../../hooks/useFormInput";
import { Gender } from "../../types/User";
import type { User } from "../../types/User";
import "./UserForm.css";

function IconUser() {
  return (
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
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconCalendar() {
  return (
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconGender() {
  return (
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
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="8" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="9" y1="19" x2="15" y2="19" />
    </svg>
  );
}

function IconMail() {
  return (
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconAddress() {
  return (
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
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPhone() {
  return (
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 5.55 5.55l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconWeb() {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconSave() {
  return (
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
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

type UserFormProps = {
  user: User | undefined;
  onSubmit: (user: User) => void;
};

function UserForm({ user, onSubmit }: UserFormProps) {
  const nameField = useFormInput(user?.name ?? "", true);
  const dobField = useFormInput(user?.dob ?? "", true);
  const genderField = useFormInput(user?.gender ?? "", true);
  const emailField = useFormInput(user?.email ?? "", true);
  const addressField = useFormInput(user?.address ?? "", true);
  const phoneField = useFormInput(user?.phone ?? "", true);
  const webField = useFormInput(user?.web ?? "", true);

  function toGender(value: string): Gender {
    if (value === "Männlich") return Gender.MALE;
    if (value === "Weiblich") return Gender.FEMALE;
    if (value === "Divers") return Gender.OTHER;
    return Gender.NONE;
  }

  function handleSubmit() {
    const isNameValid = nameField.checkIfValid(nameField.value);
    const isDobValid = dobField.checkIfValid(dobField.value);
    const isGenderValid = genderField.checkIfValid(genderField.value);
    const isEmailValid = emailField.checkIfValid(emailField.value);
    const isAddressValid = addressField.checkIfValid(addressField.value);
    const isPhoneValid = phoneField.checkIfValid(phoneField.value);
    const isWebValid = webField.checkIfValid(webField.value);

    const allValid =
      isNameValid &&
      isDobValid &&
      isGenderValid &&
      isEmailValid &&
      isAddressValid &&
      isPhoneValid &&
      isWebValid;

    if (!allValid) {
      alert("Bitte alle Felder ausfüllen!");
      return;
    }

    const submittedUser: User = {
      id: user?.id ?? Math.random(),
      name: nameField.value,
      dob: dobField.value,
      gender: toGender(genderField.value),
      email: emailField.value,
      address: addressField.value,
      phone: phoneField.value,
      web: webField.value,
    };

    onSubmit(submittedUser);
  }

  return (
    <div className="userform">
      <h2 className="userform-title">
        {user ? "Nutzer bearbeiten" : "Neuer Nutzer"}
      </h2>

      <div className="field">
        <label className="field-label">
          <span className="field-icon">
            <IconUser />
          </span>
          Name
        </label>
        <input
          type="text"
          value={nameField.value}
          onChange={nameField.handleChange}
          placeholder="Max Mustermann"
          className={nameField.error.isError ? "input input--error" : "input"}
        />
        {nameField.error.isError && (
          <span className="error-text">{nameField.error.errorMessage}</span>
        )}
      </div>

      <div className="field">
        <label className="field-label">
          <span className="field-icon">
            <IconCalendar />
          </span>
          Geburtsdatum
        </label>
        <input
          type="date"
          value={dobField.value}
          onChange={dobField.handleChange}
          className={dobField.error.isError ? "input input--error" : "input"}
        />
        {dobField.error.isError && (
          <span className="error-text">{dobField.error.errorMessage}</span>
        )}
      </div>

      <div className="field">
        <label className="field-label">
          <span className="field-icon">
            <IconGender />
          </span>
          Geschlecht
        </label>
        <select
          value={genderField.value}
          onChange={genderField.handleChange}
          className={genderField.error.isError ? "input input--error" : "input"}
        >
          <option value="">– Bitte wählen –</option>
          <option value="Männlich">Männlich</option>
          <option value="Weiblich">Weiblich</option>
          <option value="Divers">Divers</option>
        </select>
        {genderField.error.isError && (
          <span className="error-text">{genderField.error.errorMessage}</span>
        )}
      </div>

      <div className="field">
        <label className="field-label">
          <span className="field-icon">
            <IconMail />
          </span>
          E-Mail
        </label>
        <input
          type="text"
          value={emailField.value}
          onChange={emailField.handleChange}
          placeholder="max@beispiel.de"
          className={emailField.error.isError ? "input input--error" : "input"}
        />
        {emailField.error.isError && (
          <span className="error-text">{emailField.error.errorMessage}</span>
        )}
      </div>

      <div className="field">
        <label className="field-label">
          <span className="field-icon">
            <IconAddress />
          </span>
          Adresse
        </label>
        <input
          type="text"
          value={addressField.value}
          onChange={addressField.handleChange}
          placeholder="Musterstraße 1, 12345 Berlin"
          className={
            addressField.error.isError ? "input input--error" : "input"
          }
        />
        {addressField.error.isError && (
          <span className="error-text">{addressField.error.errorMessage}</span>
        )}
      </div>

      <div className="field">
        <label className="field-label">
          <span className="field-icon">
            <IconPhone />
          </span>
          Telefon
        </label>
        <input
          type="text"
          value={phoneField.value}
          onChange={phoneField.handleChange}
          placeholder="+49 123 456789"
          className={phoneField.error.isError ? "input input--error" : "input"}
        />
        {phoneField.error.isError && (
          <span className="error-text">{phoneField.error.errorMessage}</span>
        )}
      </div>

      <div className="field">
        <label className="field-label">
          <span className="field-icon">
            <IconWeb />
          </span>
          Webseite
        </label>
        <input
          type="text"
          value={webField.value}
          onChange={webField.handleChange}
          placeholder="www.beispiel.de"
          className={webField.error.isError ? "input input--error" : "input"}
        />
        {webField.error.isError && (
          <span className="error-text">{webField.error.errorMessage}</span>
        )}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        <IconSave />
        Speichern
      </button>
    </div>
  );
}

export default UserForm;
