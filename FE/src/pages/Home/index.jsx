import React, { createContext, useContext, useState, useEffect } from 'react';
import { Sun, Moon, Globe, BookOpen, Download, Video, FileText, Home, Menu, X, Search, Code, Settings, Users, Award } from 'lucide-react';
import './style.css'

// Theme Context yaradırıq
const ThemeContext = createContext();

// Theme Provider component
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('az');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <ThemeContext.Provider value={{
      darkMode,
      language,
      toggleTheme,
      changeLanguage
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook tema istifadə etmək üçün
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Translations
const translations = {
  az: {
    title: "PLC247 - Sənaye Avtomatlaşdırma Portalı",
    subtitle: "PLC proqramlaşdırma, HMI dizayn və sənaye avtomatlaşdırma həlləri",
    home: "Ana Səhifə",
    articles: "Məqalələr",
    downloads: "Yüklənmələr",
    manuals: "Manual PDF",
    videos: "Video Dərslər",
    contact: "Əlaqə",
    search: "Axtarış...",
    welcomeMessage: "Salam! Bu səhifədə tema və dil sistemi işləyir.",
    currentPage: "Cari səhifə",
    changeTheme: "Temanı dəyiş",
    changeLanguage: "Dili dəyiş",
    features: "Xüsusiyyətlər",
    latestPosts: "Son Məqalələr",
    viewAll: "Hamısını gör",
    plcProgramming: "PLC Proqramlaşdırma",
    plcProgrammingDesc: "Siemens, Allen Bradley, Mitsubishi və digər PLC markalarına dəstək",
    hmiDesign: "HMI Dizayn",
    hmiDesignDesc: "İnteraktiv və istifadəçi dostu HMI interfeyslərinin yaradılması",
    scadaSystems: "SCADA Sistemləri",
    scadaSystemsDesc: "Böyük miqyaslı sənaye sistemləri üçün SCADA həlləri",
    technicalSupport: "Texniki Dəstək",
    technicalSupportDesc: "24/7 texniki dəstək və məsləhət xidmətləri",
    article: "Məqalə",
    manual: "Manual",
    footerText: "© 2024 PLC247. Bütün hüquqlar qorunur."
  },
  en: {
    title: "PLC247 - Industrial Automation Portal",
    subtitle: "PLC programming, HMI design and industrial automation solutions",
    home: "Home",
    articles: "Articles",
    downloads: "Downloads",
    manuals: "Manual PDF",
    videos: "Video Tutorials",
    contact: "Contact",
    search: "Search...",
    welcomeMessage: "Hello! Theme and language system works on this page.",
    currentPage: "Current page",
    changeTheme: "Change theme",
    changeLanguage: "Change language",
    features: "Features",
    latestPosts: "Latest Posts",
    viewAll: "View All",
    plcProgramming: "PLC Programming",
    plcProgrammingDesc: "Support for Siemens, Allen Bradley, Mitsubishi and other PLC brands",
    hmiDesign: "HMI Design",
    hmiDesignDesc: "Creating interactive and user-friendly HMI interfaces",
    scadaSystems: "SCADA Systems",
    scadaSystemsDesc: "SCADA solutions for large-scale industrial systems",
    technicalSupport: "Technical Support",
    technicalSupportDesc: "24/7 technical support and consulting services",
    article: "Article",
    manual: "Manual",
    footerText: "© 2024 PLC247. All rights reserved."
  }
};

// Header component
const Header = () => {
  const { darkMode, language, toggleTheme, changeLanguage } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">P</div>
          <span className="logo-text">PLC247</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav">
          <a href="#" className="nav-link">{t.home}</a>
          <a href="#" className="nav-link">{t.articles}</a>
          <a href="#" className="nav-link">{t.downloads}</a>
          <a href="#" className="nav-link">{t.manuals}</a>
          <a href="#" className="nav-link">{t.videos}</a>
          <a href="#" className="nav-link">{t.contact}</a>
        </nav>

        {/* Controls */}
        <div className="controls">
          {/* Language Selector */}
          <div className="language-selector">
            <select 
              value={language} 
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-select"
            >
              <option value="az">AZ</option>
              <option value="en">EN</option>
            </select>
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="theme-toggle">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <a href="#" className="nav-link">{t.home}</a>
              <a href="#" className="nav-link">{t.articles}</a>
              <a href="#" className="nav-link">{t.downloads}</a>
              <a href="#" className="nav-link">{t.manuals}</a>
              <a href="#" className="nav-link">{t.videos}</a>
              <a href="#" className="nav-link">{t.contact}</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Ana səhifə component
const HomePage = () => {
  const { language } = useTheme();
  const t = translations[language];

  const features = [
    {
      icon: <Code size={24} />,
      title: t.plcProgramming,
      description: t.plcProgrammingDesc,
      color: 'feature-icon-blue'
    },
    {
      icon: <Settings size={24} />,
      title: t.hmiDesign,
      description: t.hmiDesignDesc,
      color: 'feature-icon-green'
    },
    {
      icon: <Users size={24} />,
      title: t.scadaSystems,
      description: t.scadaSystemsDesc,
      color: 'feature-icon-purple'
    },
    {
      icon: <Award size={24} />,
      title: t.technicalSupport,
      description: t.technicalSupportDesc,
      color: 'feature-icon-red'
    }
  ];

  const latestPosts = [
    {
      title: "Siemens TIA Portal v17 Yeniliklər",
      category: t.article,
      categoryClass: "post-category-article",
      date: "2024-01-15",
      icon: <FileText size={16} />
    },
    {
      title: "Allen Bradley PLC Manual",
      category: t.manual,
      categoryClass: "post-category-manual",
      date: "2024-01-14",
      icon: <BookOpen size={16} />
    },
    {
      title: "Mitsubishi GX Works Software",
      category: t.downloads,
      categoryClass: "post-category-download",
      date: "2024-01-13",
      icon: <Download size={16} />
    },
    {
      title: "HMI Dizayn Video Dərsi",
      category: t.videos,
      categoryClass: "post-category-video",
      date: "2024-01-12",
      icon: <Video size={16} />
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">{t.title}</h1>
        <p className="hero-subtitle">{t.subtitle}</p>
        
        {/* Search */}
        <div className="search-container">
          <div style={{ position: 'relative' }}>
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder={t.search}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2 className="features-title">{t.features}</h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className={`feature-icon ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="latest-posts">
        <div className="latest-posts-container">
          <div className="latest-posts-header">
            <h2 className="latest-posts-title">{t.latestPosts}</h2>
            <button className="view-all-btn">{t.viewAll}</button>
          </div>
          
          <div className="posts-grid">
            {latestPosts.map((post, index) => (
              <div key={index} className="post-card">
                <div className="post-header">
                  <span className={`post-category ${post.categoryClass}`}>
                    {post.category}
                  </span>
                  <div className="post-icon">
                    {post.icon}
                  </div>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-date">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <div className="footer-logo-icon">P</div>
            <span className="footer-logo-text">PLC247</span>
          </div>
          <p className="footer-text">{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
};

// Məqalələr səhifəsi
const ArticlesPage = () => {
  const { language } = useTheme();
  const t = translations[language];

  return (
    <div className="container" style={{ padding: '3rem 1rem' }}>
      <div style={{ 
        maxWidth: '64rem', 
        margin: '0 auto', 
        padding: '2rem',
        background: 'var(--color-surface)', 
        borderRadius: 'var(--radius-2xl)',
        border: '1px solid var(--color-border)',
        backdropFilter: 'blur(8px)'
      }}>
        <BookOpen size={64} style={{ margin: '0 auto 1rem', color: 'var(--color-primary)' }} />
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
          {t.currentPage}: {t.articles}
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
          {t.welcomeMessage}
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {['Mitsubishi GX Works', 'Siemens TIA Portal', 'Omron CX-Programmer', 'Allen Bradley Studio 5000'].map((article, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-surface-secondary)',
              border: '1px solid var(--color-border)'
            }}>
              <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{article}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Sample article content...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Yüklənmələr səhifəsi
const DownloadsPage = () => {
  const { language } = useTheme();
  const t = translations[language];

  return (
    <div className="container" style={{ padding: '3rem 1rem' }}>
      <div style={{ 
        maxWidth: '64rem', 
        margin: '0 auto', 
        padding: '2rem',
        background: 'var(--color-surface)', 
        borderRadius: 'var(--radius-2xl)',
        border: '1px solid var(--color-border)',
        backdropFilter: 'blur(8px)'
      }}>
        <Download size={64} style={{ margin: '0 auto 1rem', color: 'var(--color-success)' }} />
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
          {t.currentPage}: {t.downloads}
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
          {t.welcomeMessage}
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['GX Works3 v1.106', 'TIA Portal v17', 'CX-Programmer v9.8', 'Studio 5000 v33'].map((download, index) => (
            <div key={index} style={{
              padding: '1rem',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-surface-secondary)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Download size={24} style={{ color: 'var(--color-success)' }} />
                <span style={{ fontWeight: '500' }}>{download}</span>
              </div>
              <button style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-lg)',
                fontSize: '0.875rem',
                background: 'var(--color-success)',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}>
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Video səhifəsi
const VideosPage = () => {
  const { language } = useTheme();
  const t = translations[language];

  return (
    <div className="container" style={{ padding: '3rem 1rem' }}>
      <div style={{ 
        maxWidth: '64rem', 
        margin: '0 auto', 
        padding: '2rem',
        background: 'var(--color-surface)', 
        borderRadius: 'var(--radius-2xl)',
        border: '1px solid var(--color-border)',
        backdropFilter: 'blur(8px)'
      }}>
        <Video size={64} style={{ margin: '0 auto 1rem', color: 'var(--color-error)' }} />
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
          {t.currentPage}: {t.videos}
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
          {t.welcomeMessage}
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {['PLC Proqramlaşdırma', 'HMI Dizayn', 'SCADA Sistemi', 'Modbus Protokol'].map((video, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-surface-secondary)',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{
                width: '100%',
                height: '8rem',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-background-secondary)'
              }}>
                <Video size={48} style={{ color: 'var(--color-error)' }} />
              </div>
              <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{video}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Video tutorial haqqında...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Əsas App component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'articles':
        return <ArticlesPage />;
      case 'downloads':
        return <DownloadsPage />;
      case 'videos':
        return <VideosPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider>
      <ThemeAwareApp currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {renderPage()}
      </ThemeAwareApp>
    </ThemeProvider>
  );
};

// Theme-aware wrapper component
const ThemeAwareApp = ({ children, currentPage, setCurrentPage }) => {
  const { darkMode, language } = useTheme();
  const t = translations[language];

  return (
    <div className="app">
      <Header />
      
      {/* Page Navigation - Yalnız home səhifəsi deyilsə göstər */}
      {currentPage !== 'home' && (
        <nav className="container" style={{ padding: '1rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {[
              { key: 'home', label: t.home, icon: Home },
              { key: 'articles', label: t.articles, icon: BookOpen },
              { key: 'downloads', label: t.downloads, icon: Download },
              { key: 'videos', label: t.videos, icon: Video }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-lg)',
                  border: 'none',
                  cursor: 'pointer',
                  background: currentPage === key ? 'var(--color-primary)' : 'var(--color-surface-secondary)',
                  color: currentPage === key ? 'white' : 'var(--color-text-secondary)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </nav>
      )}

      {children}
    </div>
  );
};

export default App;