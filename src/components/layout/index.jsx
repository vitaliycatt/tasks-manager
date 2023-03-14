import { Outlet, NavLink } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <nav className="flex justify-center p-3 bg-teal-200	mb-10">
        <ul className="flex">
          <li className="mr-5">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 font-bold"
                  : "font-medium"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 font-bold"
                  : "font-medium"
              }
              to="/tasks"
            >
              Tasks
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};
