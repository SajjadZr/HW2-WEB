# Paint — A Minimalist Interactive Drawing Board

A component-based paint app built with React, TypeScript, and Vite. This project showcases a clean UI for drawing basic shapes (circle, square, triangle) on a canvas, featuring modular components, responsive design, and a scalable architecture.

---

## Features

-  Drawing Board with shape placement 
-  Shape Selector Sidebar (circle, square, triangle) 
-  Click to Place feature 
-  Shape Counter to track number of shapes on canvas 
-  Component-based architecture with modular styles 
-  Fast Dev Server via Vite 


---

## Project Structure

```
paint/
│
├── public/                  # Static assets (SVG icons)
├── src/
│   ├── App/
│   │   ├── Board/           # Drawing board area
│   │   ├── Sidebar/         # Shape selection sidebar
│   │   ├── Header/          # Top header section
│   │   ├── Counter/         # Component showing shape count
│   │   ├── BoardItem/       # Rendered shapes on board
│   │   ├── styles.module.css
│   │   └── configs.ts       # Configuration for shape types
│   ├── global.css           # Global styling
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts
├── index.html               # Main HTML file
├── package.json             # Project metadata and scripts
├── tsconfig*.json           # TypeScript configurations
└── vite.config.ts           # Vite configuration
```

---

##  How It Works

1. User selects a shape from the Sidebar. 
2. Shape is stored in internal state. 
3. User clicks on the Board area to place the shape. 
4. The shape is rendered with proper styles using BoardItem. 
5. The Counter component updates the number of shapes on board. 

---

## Getting Started

### Prerequisites

- Node.js 
- npm (or yarn/pnpm)

### Installation

```bash
git clone https://github.com/SajjadZr/HW2-WEB
cd paint
npm install
```

### Development

```bash
npm run dev
```

Runs the app in development mode at [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
```

Bundles the app for production.

### Preview Production Build

```bash
npm run preview
```

---


## Dependencies

- React — UI library 
- TypeScript — Static typing 
- Vite — Fast build tool 
- CSS Modules — Scoped styling 
