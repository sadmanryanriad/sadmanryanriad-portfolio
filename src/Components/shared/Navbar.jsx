import ThemeButton from "../mini-components/ThemeButton";
import { HashLink } from "react-router-hash-link";
import Container2xl from "../mini-components/Container2xl";

const Navbar = () => {
  const navItems = (
    <>
      <HashLink smooth to={"#about-me"}>
        <li>
          <a>About me</a>
        </li>
      </HashLink>
      <HashLink smooth to={"#skills"}>
        <li>
          <a>Skills</a>
        </li>
      </HashLink>
      <HashLink smooth to={"#services"}>
        <li>
          <a>Services</a>
        </li>
      </HashLink>
      <HashLink smooth to={"#contact-me"}>
        <li>
          <a>Contact-Me</a>
        </li>
      </HashLink>

    </>
  );

  return (
    <>
<Container2xl>
<div className="navbar sticky top-0 z-10  dark:bg-gray-700 dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          {/* <Link to={"/"}>
            <a className="btn btn-ghost normal-case text-2xl">Home</a>
          </Link> */}
        </div>
        <div className="navbar-center hidden font-semibold lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{navItems}</ul>
        </div>
        <div className="navbar-end flex gap-6 md:gap-12 items-center">
          <div className="text-xl sm:text-2xl">
            <ThemeButton></ThemeButton>
          </div>
        </div>
      </div>
</Container2xl>
    </>
  );
};

export default Navbar;
