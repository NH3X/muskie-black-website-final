# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn start          # Development server at http://localhost:3000
yarn build          # Production build to ./build/
yarn test           # Run tests in watch mode
yarn test --watchAll=false  # Run tests once (CI mode)
```

## Architecture

This is a React 18 single-page marketing website for Muskie Black, built with Create React App and styled with Tailwind CSS 3.

### Tech Stack
- React 18 with createRoot API
- React Router 6 (Routes/Route syntax)
- Tailwind CSS 3 (migrated from Bootstrap 4)
- SCSS for legacy styles (`theme.scss`)
- react-hook-form for form validation
- @emailjs/browser for contact form submissions
- framer-motion available for animations

### Project Structure
- `src/pages/muskie/Index1.js` - Main landing page component, assembles all sections
- `src/pages/muskie/section.js` - Hero section
- `src/components/` - Reusable components organized by feature:
  - `Navbar/` - Navigation with scroll-based styling
  - `About/`, `Service/`, `Mission/`, `Contact/` - Page sections (fully migrated)
  - `Features/`, `Pricing/`, `Client/`, `Counter/`, `Subscribe/` - Stubbed placeholder components
  - `Footer/` - Footer with links
  - `common/` - Shared components like SectionTitle

### Styling Approach
- Use Tailwind utility classes for new code
- Custom colors defined in `tailwind.config.js`: `primary` (dark), `secondary` (light)
- Legacy SCSS in `theme.scss` and Material Design Icons via `materialdesignicons.min.css`

### Environment Variables
Contact form requires EmailJS credentials in `.env`:
```
REACT_APP_CONTACT_EMAIL_SERVICE_ID=your_service_id
REACT_APP_CONTACT_EMAIL_TEMPLATE_ID=your_template_id
REACT_APP_CONTACT_EMAIL_USER_ID=your_user_id
```

### Component Patterns
- Most components are functional components with hooks
- `Index1.js` is still a class component managing navigation state and scroll behavior
- Use `useNavigate`, `useParams`, `useLocation` hooks instead of `withRouter` HOC
