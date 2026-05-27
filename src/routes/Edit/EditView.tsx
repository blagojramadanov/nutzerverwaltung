import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../../types/User";
import { UserContext } from "../../context/UserContext";
import UserForm from "../../components/UserForm/UserForm";

function EditView() {
  const { id } = useParams();
  const { users, updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [editUser, setEditUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const foundUser = users.find((u) => String(u.id) === id);
    setEditUser(foundUser);
  }, [users, id]);

  function handleUpdate(updatedUser: User) {
    updateUser(updatedUser);
    navigate("/overview");
  }

  if (!editUser) {
    return (
      <div style={{ padding: "2rem", color: "#888" }}>
        Nutzer nicht gefunden.
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <UserForm user={editUser} onSubmit={handleUpdate} />
    </div>
  );
}

export default EditView;
