# Journey-Makers Travel Agency Website

## Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the environment variables in `.env` with your actual values:
- `VITE_API_URL`: Your API endpoint
- `VITE_FACEBOOK_APP_ID`: Your Facebook App ID
- `VITE_GOOGLE_ANALYTICS_ID`: Your Google Analytics ID
- `VITE_CONTACT_EMAIL`: Contact email address
- `VITE_CONTACT_PHONE`: Contact phone number
- `VITE_WHATSAPP_NUMBER`: WhatsApp contact number

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```