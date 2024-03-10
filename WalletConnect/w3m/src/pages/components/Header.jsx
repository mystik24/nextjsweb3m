import React from 'react';
// Importing the CSS file

const Header = () => {
    return (
        <div className="header">
            <div className="logo">DeFi Lab</div>
            <div className="navigation">
                <button className="nav-button">Button 1</button>
                <button className="nav-button">Button 2</button>
                <div className="hamburger-menu">☰</div>
            </div>
        </div>
    );
};

export default Header;
