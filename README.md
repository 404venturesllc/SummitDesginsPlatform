# Summit Designs Platform

A modern, responsive website built with React, TypeScript, and Tailwind CSS. This project was created using Figma Make and features a beautiful landing page for Summit Designs' booking and automation services.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations using Framer Motion
- **Multiple Pages**: 
  - Landing page with hero section
  - Portfolio showcase
  - Contact form
  - Testimonials section
- **Interactive Components**: 
  - Mobile navigation menu
  - Animated sections with scroll effects
  - Demo cards for testing features
  - Benefit cards highlighting key features

## 🛠️ Tech Stack

- **React 18.3.1**: Modern React with hooks
- **TypeScript 5.3.3**: Type-safe development
- **Vite 6.3.5**: Fast build tool and dev server
- **Tailwind CSS 4.0**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
SummitDesignsPlatform/
├── src/
│   ├── assets/          # Image assets
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── figma/      # Figma-generated components
│   │   └── ...         # Page-specific components
│   ├── imports/        # SVG path data
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Compiled Tailwind styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Key Components

- **ResponsiveLanding**: Main landing page with hero, features, and integrations
- **PortfolioPage**: Showcase of work and projects
- **ContactPage**: Contact form for inquiries
- **TestimonialsSection**: Customer testimonials
- **BenefitCards**: Feature highlights with animations
- **DemoCards**: Interactive demo sections

## 🔧 Configuration

The project uses:
- **Vite** for bundling and dev server (configured in `vite.config.ts`)
- **TypeScript** for type checking (configured in `tsconfig.json`)
- **Tailwind CSS** for styling (configured in `src/styles/globals.css`)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Custom XL: > 1330px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

Private project - All rights reserved.

## 👤 Contact

For inquiries about Summit Designs, visit the contact page or email through the website.
