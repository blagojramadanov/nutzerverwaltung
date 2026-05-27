import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Root.css";

function Root() {
  return (
    <div className="layout">
      <div className="layout-sidebar">
        <Sidebar />
      </div>

      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
