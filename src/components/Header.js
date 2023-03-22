import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className='flex gap-3 mx-auto justify-between items-center'>
                <div className="logo col-span-2">
                    <h1>Ahlapa.shop</h1>
                </div>
                <div className="search col-span-6">
                    <input type="text" />
                </div>
                <div className="action flex col-span-4 gap-3">
                    <div>
                        compare
                    </div>
                    <div>
                        Favorite
                    </div>
                    <div>
                        Login
                    </div>
                    <div>
                        Cart
                    </div>
                </div>
            </header>
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box space-y-2 menu-compact text-black font-bold mt-3 w-52  p-2 shadow">

                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/store'>Store</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact</Link>
                                </li>
                                <li>
                                    <Link to='/blog'>Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 space-x-2 text-black font-bold ">
                                <select className="select">
                                    <option disabled selected>Pick your favorite Simpson</option>
                                    <option>Category-1</option>
                                    <option>Category-2</option>
                                    <option>Category-3</option>
                                    <option>Category-4</option>
                                    <option>Category-6</option>
                                </select>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Store</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contacts</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <select className="select lg:hidden">
                            <option disabled selected>Pick your favorite Simpson</option>
                            <option>Category-1</option>
                            <option>Category-2</option>
                            <option>Category-3</option>
                            <option>Category-4</option>
                            <option>Category-6</option>
                        </select>
                    </div>

                    {/* Notification */}
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;