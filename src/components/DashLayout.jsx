import { Outlet } from "react-router";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

function DashLayout() {
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
      </div>
        <DashFooter />
    </>
  );
}

export default DashLayout;
