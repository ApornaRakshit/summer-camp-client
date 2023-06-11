import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaHome, FaShoppingCart, FaWallet, FaUniversity, FaChalkboardTeacher } from 'react-icons/fa';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-base-200">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart
                            <span className="badge badge-secondary">+{cart?.length || 0}
                            </span>
                        </NavLink>
                    </li>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider"></div>
                    </div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/instructor"><FaChalkboardTeacher></FaChalkboardTeacher>Instructors</NavLink></li>
                    <li><NavLink to="/classes"><FaUniversity></FaUniversity>Classes</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;