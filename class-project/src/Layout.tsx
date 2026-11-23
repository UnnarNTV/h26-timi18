import { NavLink, Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Heim</NavLink>
        <NavLink to="/about">Um okkur</NavLink>
        <NavLink to="/products">Vörur</NavLink>
        <NavLink to="/categories">Flokkar</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
