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
    navigate("/overview");
  }

  return (
    <div style={{ padding: "2rem" }}>
      <UserForm user={undefined} onSubmit={handleNewUser} />
    </div>
  );
}

export default CreateView;
