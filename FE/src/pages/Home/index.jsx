import './style.css'

function Home() {
  return (
    <>
    <section id="home" className="hero">
        <div className="hero-background">
            <div className="hero-particles"></div>
            <div className="hero-gradient"></div>
        </div>
        
        <div className="hero-content">
            <h1 className="hero-title">PLC247</h1>
            <p className="hero-subtitle">Sənaye Avtomatlaşdırması</p>
            <p className="hero-description">PLC proqramlaşdırma, HMI dizayn və sənaye avtomatlaşdırma həlləri</p>
            
            <div className="hero-buttons">
                <a href="#features" className="btn-primary">
                    Başlayın
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <a href="#articles" className="btn-secondary">Daha çox</a>
            </div>

            <div className="search-container">
                <div className="search-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                    </svg>
                </div>
                <input type="text" placeholder="Axtarış edin..." className="search-input"/>
            </div>
        </div>

        <div className="stats">
            <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Tamamlanmış Layihə</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Müştəri</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Dəstək</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">İl Təcrübə</div>
            </div>
        </div>
    </section>

    <section id="features" className="features">
        <div className="features-container">
            <h2 className="features-title">Xidmətlər</h2>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon feature-icon-blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    </div>
                    <h3 className="feature-title">PLC Proqramlaşdırma</h3>
                    <p className="feature-description">Siemens, Allen Bradley, Mitsubishi və digər PLC markalarına dəstək</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon feature-icon-green">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                    </div>
                    <h3 className="feature-title">HMI Dizayn</h3>
                    <p className="feature-description">İnteraktiv və istifadəçi dostu HMI interfeyslərinin yaradılması</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon feature-icon-purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3 className="feature-title">SCADA Sistemləri</h3>
                    <p className="feature-description">Böyük miqyaslı sənaye sistemləri üçün SCADA həlləri</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon feature-icon-red">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3 6h18M8 10v6M16 10v6"></path>
                        </svg>
                    </div>
                    <h3 className="feature-title">Texniki Dəstək</h3>
                    <p className="feature-description">24/7 texniki dəstək və məsləhət xidmətləri</p>
                </div>
            </div>
        </div>
    </section>

    <section id="articles" className="latest-posts">
        <div className="latest-posts-container">
            <div className="latest-posts-header">
                <h2 className="latest-posts-title">Son Məqalələr</h2>
                <button className="view-all-btn">
                    Hamısını gör
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
            
            <div className="posts-grid">
                <div className="post-card">
                    <div className="post-image">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                    </div>
                    <div className="post-content">
                        <div className="post-header">
                            <span className="post-category post-category-article">Məqalə</span>
                            <div className="post-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                        </div>
                        <h3 className="post-title">Siemens S7-1200 PLC Proqramlaşdırması</h3>
                        <p className="post-date">2024-01-15</p>
                    </div>
                </div>
                
                <div className="post-card">
                    <div className="post-image">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                    </div>
                    <div className="post-content">
                        <div className="post-header">
                            <span className="post-category post-category-video">Video</span>
                            <div className="post-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                        </div>
                        <h3 className="post-title">HMI Dizayn Əsasları</h3>
                        <p className="post-date">2024-01-10</p>
                    </div>
                </div>
                
                <div className="post-card">
                    <div className="post-image">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                    </div>
                    <div className="post-content">
                        <div className="post-header">
                            <span className="post-category post-category-manual">Manual</span>
                            <div className="post-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                        </div>
                        <h3 className="post-title">SCADA Sistemləri Manual</h3>
                        <p className="post-date">2024-01-05</p>
                    </div>
                </div>
                
                <div className="post-card">
                    <div className="post-image">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </div>
                    <div className="post-content">
                        <div className="post-header">
                            <span className="post-category post-category-download">Yüklənmə</span>
                            <div className="post-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                        </div>
                        <h3 className="post-title">PLC Proqramlaşdırma Kitabı</h3>
                        <p className="post-date">2024-01-01</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home