import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/">Rooms</Link>
        </h1>
        <h1>
          <Link to="/">Gallery</Link>
        </h1>
        <h1>
          <Link to="/">Rewievs</Link>
        </h1>
        <h1>
          <Link to="/">Service</Link>
        </h1>
        <h1>
          <Link to="/">Rewievs</Link>
        </h1>
      </ul>
    </nav>
  );
};

export default Navbar;
