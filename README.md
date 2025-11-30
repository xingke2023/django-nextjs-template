# Django + React Full-Stack Template

A modern full-stack web application template with Django backend and React frontend.

## Tech Stack

### Backend
- **Django 5.2.8** - Python web framework
- **Django REST Framework** - API toolkit
- **django-cors-headers** - CORS handling

### Frontend
- **React 19.2** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Icon library

## Project Structure

```
template_django/
├── backend/                # Django backend
│   ├── config/            # Django project settings
│   ├── api/               # API application
│   └── manage.py          # Django management script
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── lib/          # Utility functions
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   └── vite.config.js    # Vite configuration
└── README.md
```

## Getting Started

### Prerequisites
- Python 3.12+
- Node.js 24+
- Miniconda (for Python package management)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Run migrations:
```bash
python manage.py migrate
```

3. Start the Django development server (port 8069):
```bash
python manage.py runserver 8069
```

The API will be available at `http://localhost:8069/api/`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the Vite development server (port 3112):
```bash
npm run dev
```

The frontend will be available at `http://localhost:3112`

## API Endpoints

- `GET /api/hello/` - Returns a hello message
- `GET /api/test/` - Test endpoint for GET requests
- `POST /api/test/` - Test endpoint for POST requests

## Features

- **CORS configured** - Frontend and backend communicate seamlessly
- **REST API** - Django REST Framework for API development
- **Modern UI** - shadcn/ui components with Tailwind CSS
- **Hot Module Replacement** - Fast development with Vite
- **Responsive Design** - Mobile-first approach with Tailwind

## Development

### Backend
- Add new API endpoints in `backend/api/views.py`
- Register URLs in `backend/api/urls.py`
- Configure settings in `backend/config/settings.py`

### Frontend
- Add components in `frontend/src/components/`
- Use shadcn/ui components from `@/components/ui/`
- Tailwind CSS classes are available globally

## Ports Configuration

- **Backend**: 8069 (Django)
- **Frontend**: 3112 (Vite)

These can be changed in:
- Backend: `python manage.py runserver <port>`
- Frontend: `vite.config.js` server configuration

## License

MIT
