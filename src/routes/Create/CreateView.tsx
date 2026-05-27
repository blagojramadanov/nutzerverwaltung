import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../../types/User";
import { UserContext } from "../../context/UserContext";
import UserForm from "../../components/UserForm/UserForm";

function CreateView() {
  const { addUser } = useContext(UserContext);

  const navigate = useNavigate();

  function handleNewUser(user: User) {
    addUser(user);
    alert("Nutzer wurde hinzugefügt! ✅");
    navigate("/overview");
  }

  return <UserForm user={undefined} onSubmit={handleNewUser} />;
}

export default CreateView;
