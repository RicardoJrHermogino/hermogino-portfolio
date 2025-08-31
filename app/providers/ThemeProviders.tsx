// app/providers/ThemeProviders.tsx
"use client";

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeModeProvider, useThemeMode, getTheme } from '../theme/theme';

// Inner component that uses the theme context
const MUIThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

// Main providers wrapper
export const ThemeProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeModeProvider>
      <MUIThemeProvider>
        {children}
      </MUIThemeProvider>
    </ThemeModeProvider>
  );
};