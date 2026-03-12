import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] dark:bg-background relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <Outlet />
    </div>
  );
}
