import React from 'react';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar text-white">
            <ul className="list-unstyled">
                <li className="nav-link">
                    <a href="#services">
                        <i className='bx bxs-server icon'></i>
                        <span className="text nav-text">DB's List</span>
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#about">
                        <i className='bx bxs-info-circle icon'></i>
                        <span className="text nav-text">About</span>
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#contact">
                        <i className='bx bxs-contact icon'></i>
                        <span className="text nav-text">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
