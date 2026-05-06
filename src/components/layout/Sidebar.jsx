import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "My Projects", path: "/projects", icon: "📁" },
    { name: "Recent Projects", path: "/recent-projects", icon: "🕒" },
    { name: "Requests", path: "/requests", icon: "📧" },
    { name: "Proposals", path: "/proposals", icon: "📄" },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="font-bold text-2xl text-primary-navy flex items-center gap-2">
          <span className="text-3xl">🤖</span>
          PropoAI
        </h2>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <div className="w-10 h-10 bg-primary-navy rounded-full flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">Admin User</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}