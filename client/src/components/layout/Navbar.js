import { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { logout, user, isAuthenticated, loadUser } = authContext;
  const { clearContacts } = contactContext;
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  const onClick = () => {
    logout();
    clearContacts();
  };
  const authLinks = (
    <Fragment>
      <li>Hello, {user && user.name}</li>
      <li>
        <a href='#!' onClick={onClick}>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "ContactKeeper",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
