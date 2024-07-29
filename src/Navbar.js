import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        My Little Library
      </Link>
      <ul>
        <CustomLink to="/Home">Home</CustomLink>
        <CustomLink to="/BookSearch">Book search</CustomLink>
        <CustomLink to="/IveRead">I've read</CustomLink>
        <CustomLink to="/ImReading">I'm reading</CustomLink>
        <CustomLink to="/IWantToRead">I want to read</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
