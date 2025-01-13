import { NavLink, Outlet } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={s.headerNav}>
      <nav className={s.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navigation;