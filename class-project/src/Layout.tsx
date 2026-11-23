import { Link, NavLink, Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Heim</NavLink>
        <NavLink to="/about">Um okkur</NavLink>
        <NavLink to="/products">Vörur</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
