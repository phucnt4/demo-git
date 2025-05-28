import React from 'react';

export default function Navbar() {
    const navLinks = [
        { label: 'Home', href: '/', icon: 'fa-home' },
        { label: 'Orchids', href: '/orchids', icon: 'fa-leaf' },
        { label: 'Gallery', href: '/gallery', icon: 'fa-images' },
        { label: 'About', href: '/about', icon: 'fa-info-circle' },
        { label: 'Contact', href: '/contact', icon: 'fa-envelope' }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top" style={{ backgroundColor: 'var(--light-color)' }}>
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <i className="fas fa-seedling me-2" style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}></i>
                    <span className="fw-bold" style={{ color: 'var(--primary-color)' }}>Orchid Gallery</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navLinks.map((link) => (
                            <li className="nav-item mx-1" key={link.href}>
                                <a 
                                    className="nav-link d-flex align-items-center" 
                                    href={link.href}
                                    style={{ 
                                        transition: 'var(--transition)',
                                        borderRadius: '5px',
                                        padding: '0.5rem 1rem'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--secondary-color)';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '';
                                        e.currentTarget.style.color = '';
                                    }}
                                >
                                    <i className={`fas ${link.icon} me-2`}></i>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <form className="d-flex position-relative" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search orchids..."
                            aria-label="Search"
                            style={{ 
                                borderRadius: '20px',
                                paddingLeft: '2.5rem',
                                borderColor: 'var(--secondary-color)',
                                transition: 'var(--transition)'
                            }}
                            onFocus={(e) => {
                                e.target.style.boxShadow = '0 0 0 0.25rem rgba(160, 193, 167, 0.25)';
                                e.target.style.borderColor = 'var(--primary-color)';
                            }}
                            onBlur={(e) => {
                                e.target.style.boxShadow = '';
                                e.target.style.borderColor = 'var(--secondary-color)';
                            }}
                        />
                        <i className="fas fa-search position-absolute" 
                           style={{ left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-color)' }}></i>
                        <button 
                            className="btn btn-outline-primary" 
                            type="submit"
                            style={{ borderRadius: '20px' }}
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
