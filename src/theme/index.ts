export const colors = {
  primary: {
    light: '#E3F2FD',
    main: '#2196F3',
    dark: '#1976D2',
  },
  secondary: {
    main: '#4CAF50',
    light: '#81C784',
    dark: '#388E3C',
  },
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
    gradient: ['#1e3c72', '#2a5298'],
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#999999',
    white: '#FFFFFF',
  },
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  error: {
    main: '#F44336',
    light: '#E57373',
    dark: '#D32F2F',
  },
  success: {
    main: '#4CAF50',
    light: '#81C784',
    dark: '#388E3C',
  },
  warning: {
    main: '#FFC107',
    light: '#FFD54F',
    dark: '#FFA000',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: '700' as const,
  },
  h2: {
    fontSize: 28,
    fontWeight: '600' as const,
  },
  h3: {
    fontSize: 24,
    fontWeight: '600' as const,
  },
  h4: {
    fontSize: 22,
    fontWeight: '600' as const,
  },
  h5: {
    fontSize: 20,
    fontWeight: '500' as const,
  },
  h6: {
    fontSize: 18,
    fontWeight: '500' as const,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '500' as const,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '500' as const,
  },
  body1: {
    fontSize: 16,
    fontWeight: '400' as const,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
  },
};

export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
};

export const theme = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
}; 