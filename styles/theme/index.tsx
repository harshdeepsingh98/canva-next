// styles/theme.ts
import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    // Main brand colors
    primary: '#e95d4e',
    secondary: '#f1f1f1',
    accent: '#4A90E2', // Add additional accent colors as needed

    // Background colors
    background: '#fff',
    footerBackground: '#e95d4e',
    headerBackground: '#f1f1f1',
    sidebarBackground: '#333333', // Add more as needed

    // Text colors
    textPrimary: '#000000',
    textSecondary: '#666666',
    textLight: '#ffffff',

    // Border colors
    borderPrimary: '#dddddd',
    borderSecondary: '#cccccc',

    // States (e.g., for buttons or alerts)
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',

    // Hover, active, and disabled states
    hoverPrimary: '#d44a3d',
    activePrimary: '#c43a2e',
    disabled: '#e0e0e0'
  }
}
