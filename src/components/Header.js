import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export const Header = () => {
    const { user, profile, cart } = useSelector(state => state.userReducer);
    const { token } = user;

    const cartCount = () => {
        return Array.isArray(cart) ? cart.length : 0;
    };

    const renderLoginProfile = () => {
        if (token) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item" style={{ backgroundColor: '#97C885', width: 90, borderRadius: 50 }}>
                        <Link to="/cart" className="btn-lg nav-link text-white">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="ml-3" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{cartCount()}</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="btn-lg nav-link text-white">
                            <i className="fas fa-user"></i>
                            <span className="ml-1">Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <span className="navbar-text text-white ml-2">
                            {profile ? `Welcome, ${profile.name}` : 'Welcome'}
                        </span>
                    </li>
                </ul>
            );

        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/Cart" className="btn-lg nav-link text-warning">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="btn-lg nav-link text-white">
                            <i className="fas fa-user"></i>
                            <span className="ml-1">Login</span>
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light border-bottom" style={{ backgroundColor: '#61AB4F' }}>
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">Online Shopping</Link>
                <button className="navbar-toggler btn-lg" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <i className="fa fa-bars" aria-hidden="true" style={{ backgroundColor: '#4DA052', color: '#FFF' }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                    </ul>
                    {renderLoginProfile()}
                </div>
            </div>
        </nav>
    );
}
