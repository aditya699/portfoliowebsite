# Aditya Bhatt — Portfolio Website

Personal portfolio built with React, Vite, and Tailwind CSS. A single-page site showcasing products, AI research, experience, and content.

**Live:** [aiwalaaditya.com](https://aiwalaaditya.com)

## Tech Stack

| Layer | Stack |
|-------|-------|
| Framework | React 18, Vite 6 |
| Styling | Tailwind CSS 3.4, custom design system |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Instrument Serif + DM Sans (Google Fonts) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx              # Root layout — assembles all sections
├── main.jsx             # React DOM entry point
├── index.css            # Tailwind imports + base styles
└── components/
    ├── Navbar.jsx       # Fixed nav with scroll-triggered blur
    ├── Hero.jsx         # Landing section with CTAs
    ├── About.jsx        # Bio, education, awards, certifications
    ├── Products.jsx     # 9 project cards with status badges
    ├── Experience.jsx   # Career timeline (McCormick, Neenopal)
    ├── Research.jsx     # AI research projects and focus areas
    ├── Blog.jsx         # SurveyAgent product deep-dive
    ├── Content.jsx      # YouTube, courses, blog links
    ├── Connect.jsx      # Contact + social links
    └── Footer.jsx       # Navigation links and copyright
```

## Design System

**Colors:** Cream (`#FAF7F2`) background, brown (`#2D2016`) text, gold (`#C4956A`) accents, white cards with subtle borders (`#E8E0D4`).

**Typography:** Instrument Serif for headings, DM Sans for body text.

**Patterns:** Rounded cards with hover shadows, gold icon containers, status badges, staggered Framer Motion entrance animations.

## Deployment

The site builds to a static `dist/` folder. Deploy anywhere that serves static files:

```bash
npm run build
# Upload dist/ to Vercel, Netlify, GitHub Pages, etc.
```

## License

MIT
