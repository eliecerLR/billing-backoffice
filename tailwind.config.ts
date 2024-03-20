import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/home/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'original-cyan': '#C5FFF8',
      'dark-background': '#16252F',
      'monoc-cyan': {
        100: '#b8ffff',
        200: '#a9ffff',
        300: '#9afcf9',
        400: '#8bedea',
        500: '#7cdedb',
        600: '#6dd0cd',
        700: '#5fc1bf',
        800: '#5FC1BF',
      },
      'original-sky': '#96EFFF',
      'original-blue': '#5FBDFF',
      'original-purple': '#7b66ff',
      'original-gray': '#D3D3D3',
      'original-bone': '#F6F6F6',
      'original-dark-blue': '#001C2E',
      'input-error': '#E75A5A',
      'graph-bar': '#D1820D',
      'graph-variant': '#8BD122',
      // light mode
      tremor: {
        brand: {
          faint: colors.blue[50],
          muted: colors.blue[200],
          subtle: colors.blue[400],
          DEFAULT: colors.blue[500],
          emphasis: colors.blue[700],
          inverted: colors.white,
        },
        background: {
          muted: colors.gray[50],
          subtle: colors.gray[100],
          DEFAULT: colors.white,
          emphasis: colors.gray[700],
        },
        border: {
          DEFAULT: '#F6F6F6',
        },
        ring: {
          DEFAULT: colors.gray[200],
        },
        content: {
          subtle: '#F6F6F6',
          DEFAULT: '#F6F6F6',
          emphasis: '#F6F6F6',
          strong: '#F6F6F6',
          inverted: '#F6F6F6',
        },
      },
      // dark mode
      'dark-tremor': {
        brand: {
          faint: '#0B1229',
          muted: colors.blue[950],
          subtle: colors.blue[800],
          DEFAULT: colors.blue[500],
          emphasis: colors.blue[400],
          inverted: colors.blue[950],
        },
        background: {
          muted: '#131A2B',
          subtle: colors.red,
          DEFAULT: colors.gray[900],
          emphasis: colors.gray[300],
        },
        border: {
          DEFAULT: '#ffffff30',
        },
        ring: {
          DEFAULT: colors.gray[800],
        },
        content: {
          subtle: '#F6F6F6',
          DEFAULT: '#F6F6F6',
          emphasis: '#F6F6F6',
          strong: '#F6F6F6',
          inverted: '#F6F6F6',
        },
      },
    },
    extend: {
      fontFamily: {
        custom: ['Afacad'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
