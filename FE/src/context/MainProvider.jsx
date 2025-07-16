import { createContext, useContext, useState, useEffect } from 'react';

// App Context
const AppContext = createContext();

// App Provider component
export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('az');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <AppContext.Provider value={{
      darkMode,
      language,
      currentPage,
      setCurrentPage,
      toggleTheme,
      changeLanguage
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Translations
export const translations = {
  az: {
    title: "PLC247",
    subtitle: "Sənaye Avtomatlaşdırması",
    description: "PLC proqramlaşdırma, HMI dizayn və sənaye avtomatlaşdırma həlləri",
    home: "Ana Səhifə",
    articles: "Məqalələr",
    downloads: "Yüklənmələr",
    manuals: "Manual PDF",
    videos: "Video Dərslər",
    contact: "Əlaqə",
    search: "Axtarış edin...",
    getStarted: "Başlayın",
    learnMore: "Daha çox",
    features: "Xidmətlər",
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
    video: "Video",
    download: "Yüklə",
    readMore: "Daha çox oxu",
    watchVideo: "Videoya bax",
    stats: {
      articles: "Məqalələr",
      downloads: "Yüklənmələr",
      videos: "Video Dərslər",
      users: "İstifadəçi"
    },
    footerText: "© 2024 PLC247. Bütün hüquqlar qorunur."
  },
  en: {
    title: "PLC247",
    subtitle: "Industrial Automation",
    description: "PLC programming, HMI design and industrial automation solutions",
    home: "Home",
    articles: "Articles",
    downloads: "Downloads",
    manuals: "Manual PDF",
    videos: "Video Tutorials",
    contact: "Contact",
    search: "Search...",
    getStarted: "Get Started",
    learnMore: "Learn More",
    features: "Services",
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
    video: "Video",
    download: "Download",
    readMore: "Read More",
    watchVideo: "Watch Video",
    stats: {
      articles: "Articles",
      downloads: "Downloads",
      videos: "Video Tutorials",
      users: "Users"
    },
    footerText: "© 2024 PLC247. All rights reserved."
  }
};