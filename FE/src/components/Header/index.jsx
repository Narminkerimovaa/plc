import './style.css'

function Header() {
  return (
    <header className="header" id="header">
        <div className="header-container">
            <a href="#home" className="logo">
                <div className="logo-icon">P</div>
                <span className="logo-text">PLC247</span>
            </a>

            <nav className="nav" id="nav">
                <a href="#home" className="nav-link">Ana Səhifə</a>
                <a href="#articles" className="nav-link">Məqalələr</a>
                <a href="#downloads" className="nav-link">Yüklənmələr</a>
                <a href="#manuals" className="nav-link">Manual PDF</a>
                <a href="#videos" className="nav-link">Video Dərslər</a>
                <a href="#contact" className="nav-link">Əlaqə</a>
            </nav>

            <div className="controls">
                <select className="language-select" id="languageSelect">
                    <option value="az">AZ</option>
                    <option value="en">EN</option>
                </select>

                <button className="theme-toggle" id="themeToggle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="5"></circle>
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                    </svg>
                </button>

                <button className="mobile-menu-btn" id="mobileMenuBtn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div className="mobile-menu" id="mobileMenu">
                <nav className="mobile-nav">
                    <a href="#home" className="nav-link">Ana Səhifə</a>
                    <a href="#articles" className="nav-link">Məqalələr</a>
                    <a href="#downloads" className="nav-link">Yüklənmələr</a>
                    <a href="#manuals" className="nav-link">Manual PDF</a>
                    <a href="#videos" className="nav-link">Video Dərslər</a>
                    <a href="#contact" className="nav-link">Əlaqə</a>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header