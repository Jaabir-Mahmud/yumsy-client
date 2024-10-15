import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      {['Home', 'Our Menu', 'Order Food', 'Secret'].map((route, index) => (
        <li key={index} className=" py-2 text-base font-medium text-white">
          <Link to={route === 'Home' ? '/' : `/${route.toLowerCase().replace(' ', '/')}`}>{route}</Link>
        </li>
      ))}
      <li className="px-4 py-2">
        <Link to="/dashboard/cart">
          <button className="flex items-center btn btn-ghost text-black">
            <FaShoppingCart className="mr-2 text-lg" />
            <span className="badge badge-secondary">+{cart.length}</span>
          </button>
        </Link>
      </li>
      {user ? (
        <li className=" py-2">
          <button onClick={handleLogOut} className="btn btn-ghost text-white">
            Log Out
          </button>
        </li>
      ) : (
        <li className="px-4 py-2">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Yumsy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
