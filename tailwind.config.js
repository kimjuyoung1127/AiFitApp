/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... (darkMode, content 등 다른 설정들)
  theme: {
    container: {
      // ...
    },
    extend: {
      // ... (keyframes, animation 등 shadcn/ui 기본 설정)
    },
  },
  plugins: [
    require("tailwindcss-animate") // <--- 이 부분이 있는지 확인하고 없다면 추가!
  ],
} 