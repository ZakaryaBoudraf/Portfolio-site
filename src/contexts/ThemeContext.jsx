import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  default: {
    name: 'default',
    colors: {
      dark: '#424242',
      light: '#E8E8E8',
      orange: '#FC5230',
      white: '#F5F5F5'
    }
  },
  forest: {
    name: 'forest',
    colors: {
      dark: '#040c06',
      light: '#eeffcc',
      orange: '#89a257',
      white: '#bedc7f'
    }
  },
  sunset: {
    name: 'sunset',
    colors: {
      dark: '#7c3f58',
      light: '#fff6d3',
      orange: '#f9a875',
      white: '#eb6b6f'
    }
  },
  ocean: {
    name: 'ocean',
    colors: {
      dark: '#622e4c',
      light: '#8be5ff',
      orange: '#7550e8',
      white: '#608fcf'
    }
  },
  vintage: {
    name: 'vintage',
    colors: {
      dark: '#2c2137',
      light: '#edb4a1',
      orange: '#764462',
      white: '#a96868'
    }
  },
  monochrome: {
    name: 'monochrome',
    colors: {
      dark: '#000000',
      light: '#ffffff',
      orange: '#676767',
      white: '#b6b6b6'
    }
  },
  neon: {
    name: 'neon',
    colors: {
      dark: '#0b0630',
      light: '#f8e3c4',
      orange: '#cc3495',
      white: '#6b1fb1'
    }
  },
  aqua: {
    name: 'aqua',
    colors: {
      dark: '#002b59',
      light: '#9ff4e5',
      orange: '#005f8c',
      white: '#00b9be'
    }
  },
  lavender: {
    name: 'lavender',
    colors: {
      dark: '#2d162c',
      light: '#9775a6',
      orange: '#412752',
      white: '#683a68'
    }
  },
  warm: {
    name: 'warm',
    colors: {
      dark: '#181010',
      light: '#ffefff',
      orange: '#84739c',
      white: '#f7b58c'
    }
  },
  midnight: {
    name: 'midnight',
    colors: {
      dark: '#1a2129',
      light: '#713141',
      orange: '#312137',
      white: '#512839'
    }
  },
  contrast: {
    name: 'contrast',
    colors: {
      dark: '#151640',
      light: '#e6f2ef',
      orange: '#3f6d9e',
      white: '#f783b0'
    }
  },
  bold: {
    name: 'bold',
    colors: {
      dark: '#ffffff',
      light: '#060608',
      orange: '#f42e1f',
      white: '#2f256b'
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const themeKeys = Object.keys(themes);
  const getRandomTheme = () => {
    return themeKeys[Math.floor(Math.random() * themeKeys.length)];
  };
  const [currentTheme, setCurrentTheme] = useState(getRandomTheme());

  // Initialize CSS custom properties on mount
  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;
    root.style.setProperty('--color-dark', theme.colors.dark);
    root.style.setProperty('--color-light', theme.colors.light);
    root.style.setProperty('--color-orange', theme.colors.orange);
    root.style.setProperty('--color-white', theme.colors.white);
  }, [currentTheme]);

  const cycleTheme = () => {
    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    const nextTheme = themeKeys[nextIndex];
    setCurrentTheme(nextTheme);
  };

  const setTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    currentTheme,
    theme: themes[currentTheme],
    cycleTheme,
    setTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};