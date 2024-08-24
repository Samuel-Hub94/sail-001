import React from 'react';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src="/path/to/logo.png" // Replace with actual logo path
      alt="Logo"
      style={{ height: '32px' }}
    />
  </div>
);

const NavigationLinks = () => (
  <nav style={{ display: 'flex', justifyContent: 'center', flexGrow: 1, gap: '20px' }}>
    {['Home', 'Catalog', 'Recipes', 'Stockist', 'Contact'].map((link, index) => (
      <a key={index} href="#" style={{ color: '#4A5568', textDecoration: 'none' }}>
        {link}
      </a>
    ))}
  </nav>
);

const IconButton = ({ children }) => (
  <button style={{ color: '#718096', backgroundColor: 'transparent', border: 'none' }}>
    {children}
  </button>
);

const IconsSection = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <IconButton>
      <svg style={{ height: '20px', width: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </IconButton>
    <IconButton>
      <svg style={{ height: '20px', width: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.121 17.804A5 5 0 018 15h8a5 5 0 013.879 2.804M9 7h6m-6 4h6"
        />
      </svg>
    </IconButton>
    <IconButton>
      <svg style={{ height: '20px', width: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.6 3M7 13h10l4-8H5.4M7 13l1.6 8H15m4 0h-1M7 13l1-5"
        />
      </svg>
    </IconButton>
  </div>
);

function Header() {
  return (
    <header style={{ backgroundColor: '#FFFFFF', padding: '16px', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <Logo />
        <NavigationLinks />
        <IconsSection />
      </div>
    </header>
  );
}

export default Header;
