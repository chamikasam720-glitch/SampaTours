# Sampa Tours – Hello Sri Lanka

A Next.js + Tailwind + Supabase starter website for Sampa Tours.

## Included
- Responsive tourism landing page
- Sri Lankan destination cards and suggested routes
- Private vehicle and driver service sections
- Custom quotation form that opens WhatsApp with a prepared message
- Floating WhatsApp contact button
- Basic Supabase-authenticated admin page to add/delete destinations
- Supabase schema for destinations, vehicles, itineraries, travel notes, inquiries, quotations, gallery and settings

## 1. Requirements
Install Node.js 20 or later.

## 2. Install
```bash
npm install
```

## 3. Configure Supabase
1. Create a project at https://supabase.com.
2. Open the SQL Editor and run `supabase/schema.sql`.
3. In Supabase Authentication, create an administrator user.
4. Copy `.env.example` to `.env.local`.
5. Add your Supabase Project URL and anon/public key.

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Do not put the Supabase service-role key in a `NEXT_PUBLIC_` variable or browser code.

## 4. Run locally
```bash
npm run dev
```
Open http://localhost:3000.
Admin page: http://localhost:3000/admin

## 5. WhatsApp
The current WhatsApp destination is configured as `94765402575` (+94 76 540 2575) in `app/page.tsx`.
Change the `WA` constant if the business number changes.

## Important before production
- Replace the sample Unsplash image URLs with your own licensed business photographs.
- Update the sample destination descriptions and routes.
- The inquiry form currently opens WhatsApp; it does not store customer details in Supabase.
- The admin page currently manages destinations only. Extend it for vehicles, itineraries, notes, gallery and quotations.
- Restrict authenticated database access to a dedicated admin role before launch. The starter SQL policies allow any authenticated account to manage content and are not sufficient for a public production system.
- Add a privacy policy, terms, real business contact email and verified business information.
- Test the WhatsApp link on mobile and desktop.
- Configure a production domain and deploy to Vercel.

## Project structure
```text
app/
  admin/page.tsx
  globals.css
  layout.tsx
  page.tsx
lib/
  supabase.ts
supabase/
  schema.sql
```
