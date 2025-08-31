// app/theme/theme.tsx
"use client";

import { createTheme, PaletteMode } from "@mui/material/styles";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#ffffff" : "#000000", // white for dark mode, black for light mode
    },
    secondary: {
      main: mode === "dark" ? "#a3a3a3" : "#6b7280", // subtle grays
    },
    background: {
      default: mode === "dark" ? "#0a0a0a" : "#ffffff", // page background
      paper: mode === "dark" ? "#111111" : "#f8f9fa",   // cards/drawers background
    },
    text: {
      primary: mode === "dark" ? "#ffffff" : "#1a1a1a", // main text color
      secondary: mode === "dark" ? "#a3a3a3" : "#6b7280", // subtle text
    },
    grey: {
      100: mode === "dark" ? "#1a1a1a" : "#f3f4f6",
      200: mode === "dark" ? "#2a2a2a" : "#e5e7eb",
      300: mode === "dark" ? "#3a3a3a" : "#d1d5db",
      400: mode === "dark" ? "#4a4a4a" : "#9ca3af",
      500: mode === "dark" ? "#6a6a6a" : "#6b7280",
      600: mode === "dark" ? "#8a8a8a" : "#4b5563",
      700: mode === "dark" ? "#aaaaaa" : "#374151",
      800: mode === "dark" ? "#cccccc" : "#1f2937",
      900: mode === "dark" ? "#e5e5e5" : "#111827",
    },
  },
  typography: {
    fontFamily: "var(--font-family, 'Poppins', system-ui, -apple-system, sans-serif)", // Use CSS variable first
    h1: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === "dark" 
            ? "rgba(10, 10, 10, 0.8)" 
            : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Remove all-caps text globally
        },
        contained: {
          backgroundColor: mode === "dark" ? "#ffffff" : "#000000",
          color: mode === "dark" ? "#000000" : "#ffffff",
          "&:hover": {
            backgroundColor: mode === "dark" ? "#e5e5e5" : "#333333",
          },
        },
        outlined: {
          borderColor: mode === "dark" ? "#ffffff" : "#000000",
          color: mode === "dark" ? "#ffffff" : "#000000",
          "&:hover": {
            borderColor: mode === "dark" ? "#e5e5e5" : "#333333",
            backgroundColor: mode === "dark" 
              ? "rgba(255, 255, 255, 0.1)" 
              : "rgba(0, 0, 0, 0.05)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: mode === "dark" 
              ? "rgba(255, 255, 255, 0.1)" 
              : "rgba(0, 0, 0, 0.04)",
          },
        },
      },
    },
  },
});

// Theme context and hook
interface ThemeContextType {
  mode: PaletteMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const [mounted, setMounted] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem('themeMode') as PaletteMode;
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setMode(savedMode);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('themeMode', mode);
    }
  }, [mode, mounted]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};