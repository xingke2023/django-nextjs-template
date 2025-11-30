# Next.js SSR Frontend with Django Backend

A modern full-stack web application with Next.js Server-Side Rendering (SSR) frontend and Django backend.

## Tech Stack

### Frontend
- **Next.js 16.0.5** - React framework with SSR/SSG
- **React 19.2.0** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Turbopack** - Fast bundler

### Features
- ✅ **Server-Side Rendering (SSR)** - Pages rendered on the server for better SEO
- ✅ **Client-Side Interactions** - Dynamic data fetching in the browser
- ✅ **API Integration** - Seamless connection with Django backend
- ✅ **Modern UI** - shadcn/ui components with Tailwind CSS
- ✅ **TypeScript** - Type-safe development

## Project Structure

```
frontend-ssr/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # Home page (SSR)
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── api-test-client.tsx  # Client component
│   └── lib/             # Utility functions
└── public/              # Static assets
```

## Getting Started

### Prerequisites
- Node.js 20+
- Django backend running on port 8069

### Installation

Dependencies are already installed. If needed:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at:
- Local: `http://localhost:3112`
- Network: `http://0.0.0.0:3112` (accessible remotely)

### Build for Production

```bash
npm run build
npm start
```

## SSR vs Client-Side Rendering

### Server-Side Rendering (SSR)
- Data fetched on the server before page render
- Better SEO and initial page load
- See `page.tsx` - uses `async function` and `fetch` at component level

### Client-Side Rendering (CSR)
- Data fetched in the browser after page load
- Interactive and dynamic
- See `api-test-client.tsx` - uses `'use client'` directive and `useState`

## API Integration

The frontend connects to Django backend at `http://localhost:8069/api/`

### Endpoints Used:
- `GET /api/hello/` - Simple hello message
- `GET /api/test/` - Test GET endpoint
- `POST /api/test/` - Test POST endpoint

## Configuration

### Port Configuration
Edit `package.json` to change port:
```json
"dev": "next dev -p 3112 -H 0.0.0.0"
```

### API URL
For production, update API URLs in:
- `src/app/page.tsx` (SSR)
- `src/components/api-test-client.tsx` (Client-side)

## shadcn/ui Components

Add more components:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

Available components are configured in `components.json`

## Environment Variables

Create `.env.local` for environment-specific config:
```
NEXT_PUBLIC_API_URL=http://localhost:8069
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## License

MIT
