# Pre Primary School Website

A modern, responsive website built with React (Vite) and Tailwind CSS for a pre-primary school.

## Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Fast Development**: Vite for ultra-fast HMR and builds
- **React Components**: Modular, reusable component structure
- **Sections**:
  - Header with navigation
  - Hero banner with call-to-action
  - About section with features
  - Program offerings (Playgroup, Nursery, Lower KG, Upper KG)
  - Photo gallery
  - Contact form
  - Footer

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Programs.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

All dependencies are already installed. If you need to reinstall:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Customization

- **Colors**: Edit Tailwind config in `tailwind.config.js`
- **School Info**: Update school name, address, and contact details in components
- **Images**: Replace placeholder divs in About and Gallery with actual images
- **Content**: Edit component text directly in `src/components/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm audit fix` - Fix security vulnerabilities (if needed)

## Next Steps

1. Replace placeholder content with your school's actual information
2. Add real images to the About and Gallery sections
3. Configure contact form to send emails (currently shows alert)
4. Customize colors and branding
5. Deploy to hosting platform

## Technologies Used

- React 18
- Vite 5
- Tailwind CSS 3
- JavaScript (not TypeScript)

## License

MIT
