import type { Config } from 'tailwindcss'

import { heroui } from '@heroui/react'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/*.html', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],

  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: 'rgb(16, 117, 110)',

            background: '#ffffff',
            foreground: '#11181C',
          },
        },
        dark: {
          layout: {},
          colors: {},
        },
      },
      layout: {
        dividerWeight: '1px',
        disabledOpacity: 0.5,
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem',
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem',
        },
        radius: {
          small: '6px',
          medium: '10px',
          large: '12px',
        },
        borderWidth: {
          small: '1px',
          medium: '1px',
          large: '2px',
        },
      },
    }),
  ],
}

export default config
