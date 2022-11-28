module.exports = {
  content: ['./src/**/*.{css,html,js,ts,tsx}'], // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#0096FF',
        panel: '#2A2C30',
        darkPanel: '#1F2124',
        fieldBorder: '#3F4347',
        fieldBg: '#2A2C30',
        panelItem: '#303337',
        textBtn: '#2A2C30',
        panelBorder: '#3F4347',
        panelInactiveItem: '#959698',
        panelActive: '#4C4D50',
      },
      spacing: {
        sidebar: '16.25rem',
        4.5: '1.125rem',
        exportTool: '47rem',
      },
      borderRadius: {
        btn: '50px',
      },
      fontSize: {
        xxs: '.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
}
