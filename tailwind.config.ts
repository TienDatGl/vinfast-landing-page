import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config'
import sfTypography from '@storefront-ui/typography'

export default <Config>{
  presets: [tailwindConfig],
  plugins: [sfTypography],
  content: ['./**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  css: '~/assets/css/tailwind.css',
  corePlugins: {
    transitionProperty: true,
    transitionDuration: true,
    transitionTimingFunction: true,
    transitionDelay: true,
  },
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      bayon: ['Bayon', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    },
    colors: {
      transparent: 'transparent',
      blue: {
        main: '#0064FD',
        second: '#1C274C',
        link: '#2E58A6',
        bg: '#D9EBFF',
        sale: '#003CB4',
        attr: '#3A88FF',
        1: '#DBE7FF',
        2: '#203E74',
        3: '#0A54C5',
        4: '#3A7FE1',
        5: '#0032A6',
        6: '#DCEAFF',
        7: '#EBF7FF',
        8: '#0256FF'
      },
      gray: {
        main: '#64748B',
        attr: '#CAD0D9',
        secondary: '#F1F1F1'
      },
      white: {
        main: '#ffffff'
      },
      black: {
        main: '#140900',
        secondary: '#000',
        attr: '#3C3C3C'
      }
    }
  }
}
