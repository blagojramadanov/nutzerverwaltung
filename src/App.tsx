import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useUserList } from "./hooks/useUserList";
import Root from "./routes/Root";
import Overview from "./routes/Overview/Overview";
import CreateView from "./routes/Create/CreateView";
import EditView from "./routes/Edit/EditView";
import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Navigate to="/overview" replace /> },
        { path: "overview", element: <Overview /> },
        { path: "create", element: <CreateView /> },
        { path: "edit/:id", element: <EditView /> },
      ],
    },
  ],
  { basename: "/nutzerverwaltung" },
);

function App() {
  const { users, addUser, removeUser, updateUser } = useUserList();
  return (
    <UserContext.Provider value={{ users, addUser, removeUser, updateUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
