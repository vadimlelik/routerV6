import { NavLink, Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");
const styleSetcColor = ({ isActive }) => ({
  color: isActive ? "brown" : "white",
});

const Layout = () => {
  return (
    <>
      <header className="App-header">
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/posts" style={styleSetcColor}>
          Blog
        </NavLink>
        {/* <NavLink to="/about" className={setActive}>
          About
        </NavLink> */}
        <CustomLink to="/about">About </CustomLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container"> 2022</footer>
    </>
  );
};

export default Layout;
