import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Outlet />
    </div>
  );
}
