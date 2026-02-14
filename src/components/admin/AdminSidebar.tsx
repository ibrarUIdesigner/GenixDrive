import React from "react";
import ab1 from "../../assets/ab1.jpg";
import { Home, Map, Gauge, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const isDashboard = location.pathname.endsWith("/admin/dashboard");
  const isMyTrips = location.pathname.endsWith("/admin/my-trips");
  const isSettings = location.pathname.endsWith("/admin/settings");
  return (
    <aside className="bg-white md:h-screen md:sticky md:top-0 p-6 md:p-8 border-r border-gray-100 md:col-span-2">
      <div className="flex flex-col items-center gap-2 border-b border-gray-100 pb-10">
        <img src={ab1} alt="" className="w-20 h-20 rounded-full object-cover" />
        <p className="text-sm font-semibold text-gray-900">Michael White</p>
        <a href="#" className="text-primary text-xs">
          Profile
        </a>
      </div>
      <nav className="mt-8 space-y-3">
        <Link
          to="/admin/dashboard"
          className={`relative flex items-center gap-3 rounded-lg px-3 py-2 ${
            isDashboard
              ? "text-secondary"
              : "text-gray-700 hover:text-secondary"
          }`}
        >
          {isDashboard && (
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-10 bg-primary rounded-full"></span>
          )}
          <Home className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link
          to="/admin/my-trips"
          className={`relative flex items-center gap-3 rounded-lg px-3 py-2 ${
            isMyTrips ? "text-secondary" : "text-gray-700 hover:text-secondary"
          }`}
        >
          {isMyTrips && (
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-10 bg-primary rounded-full"></span>
          )}
          <Map className="w-5 h-5" />
          <span>My Trips</span>
        </Link>
        <a
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:text-secondary"
          href="#"
        >
          <Gauge className="w-5 h-5" />
          <span>Driving Score</span>
        </a>
        <Link
          to="/admin/settings"
          className={`relative flex items-center gap-3 rounded-lg px-3 py-2 ${
            isSettings ? "text-secondary" : "text-gray-700 hover:text-secondary"
          }`}
        >
          {isSettings && (
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-10 bg-primary rounded-full"></span>
          )}
          <Settings className="w-5 h-5" />
          <span>Setting</span>
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
