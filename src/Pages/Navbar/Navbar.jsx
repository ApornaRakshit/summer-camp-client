import React from 'react';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="btn btn-ghost normal-case text-xl"><FaMicrophoneAlt></FaMicrophoneAlt><h3>7Music</h3></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/instructor">Instructors</Link></li>
      <li><Link to="/classes">Classes</Link></li>
      <li><Link to="/instructor">Instructors</Link></li>
      
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;