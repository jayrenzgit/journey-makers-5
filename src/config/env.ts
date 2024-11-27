interface EnvConfig {
  apiUrl: string;
  facebookAppId: string;
  googleAnalyticsId: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
}

export const env: EnvConfig = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  facebookAppId: import.meta.env.VITE_FACEBOOK_APP_ID || '',
  googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'info@journey-makers.com',
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || '+971508571089',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '971508571089',
};