import React, { useContext } from 'react';
import { FaMicrophoneAlt, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="btn btn-ghost normal-case text-xl"><FaMicrophoneAlt></FaMicrophoneAlt><h3>7Music</h3></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/instructor">Instructors</Link>
            </li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/secret">Secret</Link></li>
            <button className="btn">
              <FaShoppingCart></FaShoppingCart>
              <div className="badge badge-secondary">+99</div>
            </button>
          </>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
            <span>{user?.displayName}</span>

            <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
          </> : <>
            <li><Link to="/login">Login</Link></li>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;



//<span>{user?.photoURL}</span>
//<li><Link to="/instructor">Instructors</Link></li>