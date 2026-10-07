# 🐻 TunnelBear Animated Login Studio

> Delightful interactive bear animation tracking email character inputs and password peeking built with React 19, TypeScript, and Tailwind CSS.

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Curator: Arham Eskafi](https://img.shields.io/badge/Curator-Arham%20Eskafi-f97316?style=flat-square)](https://arham.dev)
[![Walk Cook Live](https://img.shields.io/badge/Nomad%20Journey-Walk%20Cook%20Live-red?style=flat-square&logo=youtube&logoColor=white)](https://youtube.com/@walkcooklive)

---

## 💡 Overview

Inspired by the beloved TunnelBear VPN authentication UI, this interactive login studio transforms standard authentication into a memorable micro-interaction:
- **Email Watching**: The bear smoothly turns his head following your typing cursor across 21 discrete sprite frames as your email address grows.
- **Password Shy Eyes**: The bear covers his eyes with his paws when the password field is focused.
- **Password Peek Toggle**: Click "👁️ Show" and the bear peeks through his paws!
- **Celebration Success**: Submitting displays a warm welcome state with sign-out / reset controls.

---

## ✨ Features

- 🐻 **27 High-Resolution Sprite Frames**: Preloaded smoothly without flicker or layout shifts.
- 👁️ **Interactive Password Peek**: Toggle password visibility to see the bear peek through his paws.
- ⚡ **React 19 & Vite 6**: Lightning-fast Hot Module Replacement (HMR) and optimized tree-shaken production bundles.
- 🎨 **Tailwind CSS Styling**: Custom TunnelBear brand palette (`#cce08b`), responsive card layout, and smooth transitions.
- 🚀 **Zero-Dependency Static Preview**: Run `npm start` to serve the production build on port 3000 using Node's standard library.
- 🧪 **Native Test Suite**: Automated verification of sprite frame assets and build output with `node:test`.

---

## 🚀 Quickstart

### 1. Clone & Install
```bash
git clone https://github.com/aeskafi/tunnel-bear-login.git
cd tunnel-bear-login
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser to interact with the bear.

### 3. Production Build & Static Preview
```bash
npm run build
npm start
# Serves the built app on http://localhost:3000
```

---

## 📂 Project Structure

```
tunnel-bear-login/
├── src/
│   ├── assets/img/            # 21 watch_bear + 6 hide_bear PNG frames
│   ├── components/
│   │   ├── BearAvatar.tsx     # Frame renderer with preloaded caching
│   │   ├── Input.tsx          # Styled input with focus styling
│   │   └── LoginForm.tsx      # Main form, state machine & peek toggle
│   ├── hooks/
│   │   ├── useBearImages.ts   # Asset loader
│   │   └── useBearAnimation.ts# Head tracking & peek state hook
│   ├── app.tsx                # Page wrapper with branding & credits
│   └── main.tsx               # React 19 root
├── __tests__/                 # Native Node.js test suite
├── server.js                  # Zero-dependency static server
└── index.html                 # App shell with preloaded sprites
```

---

## 🧪 Testing

Run the automated asset and build integrity test suite:

```bash
npm test
```

---

## 👤 Author & Credits

- **Original UI Concept**: Inspired by TunnelBear VPN & [Addy Osmani](https://github.com/addyosmani).
- **Modernized & Curated by**: **Arham Eskafi** ([ارحام اسکافی](https://arham.dev)), Rapid MVP Specialist & Tech Nomad.
  - 🌐 Website: [arham.dev](https://arham.dev)
  - 🎥 Tech Nomad Overland Journey: [Walk Cook Live on YouTube](https://youtube.com/@walkcooklive)
  - 🐙 GitHub: [@aeskafi](https://github.com/aeskafi)

---

## 📜 License

[MIT](LICENSE) © 2026 Arham Eskafi
