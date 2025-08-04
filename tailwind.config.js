/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // 🎯 GOLD PALETTE (OPTIMIZED)
      colors: {
        gold: {
          50: '#FFFDE7',  // Lightest
          100: '#FFF9C4',
          200: '#FFEE58',
          300: '#FFD54F',
          400: '#FFC107',   // Primary gold
          500: '#FFB300',  // Your main gold
          600: '#FFA000',
          700: '#FF8F00',
          800: '#FF6F00',   // Deepest
          // 🔥 ADD TRANSPARENT VARIANTS
          '500/10': 'rgba(255, 179, 0, 0.1)',
          '500/20': 'rgba(255, 179, 0, 0.2)',
          '500/30': 'rgba(255, 179, 0, 0.3)',
        },
      },
      fontFamily: {
        // 🎬 CINEMATIC FONT (Bebas Neue = Wide Block Letters)
        cinematic: ['"Bebas Neue"', 'sans-serif'],
        // 🖤 MONO SUBTITLE (Oswald or Rajdhani for a sleek tech feel)
        mono: ['"Rajdhani"', 'sans-serif'],
      },
      // 🌟 TEXT-SHADOW FOR CINEMATIC GLOW
      textShadow: {
        'gold-glow': '0 0 8px rgba(255, 215, 0, 0.7)',
        'white-glow': '0 0 10px rgba(255, 255, 255, 0.8)',
      },
      // 💀 BORDER ERASER UTILITIES
      borderWidth: {
        '0': '0',
        '1': '1px',
        '2': '2px',
      },
      // 🌀 ANIMATIONS (KEPT YOURS)
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        floatingShards: 'float 8s ease-in-out infinite',
        floatingShardsSlow: 'float 14s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    
    // 💣 NUKE ROGUE BORDERS PLUGIN (FIXED)
    function({ addUtilities }) {
      addUtilities({
        '.border-nuke': {
          'border': '0 !important',
          '&::before, &::after': {
            'border': '0 !important',
          },
        },
        '.border-gold-nuke': {
          '--tw-border-opacity': '0 !important',
        },
      })
    },
    // Add textShadow plugin if needed (see note below)
  ],
}