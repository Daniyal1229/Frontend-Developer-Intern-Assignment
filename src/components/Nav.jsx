import { useState } from 'react';
import { FaSearch, FaUser, FaCog, FaChevronDown } from 'react-icons/fa';
import '../styles/Nav.css';

export const Nav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
                <a href="/">Home</a>
                <a href="/orders">Orders</a>
                <a href="/integrations">Integrations</a>
                <div className="dropdown">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        Tracking Page <FaChevronDown />
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <a href="/tracking/page1">Page 1</a>
                            <a href="/tracking/page2">Page 2</a>
                            <a href="/tracking/page3">Page 3</a>
                        </div>
                    )}
                </div>
                <a href="/partner">Partner with Us</a>
            </div>
            <div className={`nav-search ${isMobileMenuOpen ? 'show' : ''}`}>
                <button><FaSearch /></button>
                <input type="text" placeholder="Search..." />
            </div>
            <div className={`nav-icons ${isMobileMenuOpen ? 'show' : ''}`}>
                <button><FaUser /></button>
                <a href="/Account" className='nav-links'>Account</a>
                <button><FaCog /></button>
                <a href="/Account" className='nav-links'>Settings</a>
            </div>
            <div className="nav-mobile-menu">
                <button onClick={toggleMobileMenu}>☰ Menu</button>
            </div>
        </nav>
    );
};