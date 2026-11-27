-- Run this SQL in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.destinations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  region text,
  description text,
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.vehicles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  passenger_capacity integer,
  luggage_capacity integer,
  features text[],
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.itineraries (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  duration text,
  destinations text[],
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.travel_notes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  phone text not null,
  email text,
  arrival_date date,
  duration text,
  travelers text,
  pickup text,
  destinations text,
  notes text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.quotations (
  id uuid primary key default gen_random_uuid(),
  inquiry_id uuid references public.inquiries(id) on delete set null,
  amount_lkr numeric(12,2),
  details text,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  title text,
  image_url text not null,
  category text,
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  setting_key text unique not null,
  setting_value jsonb not null default '{}'::jsonb
);

alter table public.destinations enable row level security;
alter table public.vehicles enable row level security;
alter table public.itineraries enable row level security;
alter table public.travel_notes enable row level security;
alter table public.inquiries enable row level security;
alter table public.quotations enable row level security;
alter table public.gallery enable row level security;
alter table public.site_settings enable row level security;

-- Public visitors can read published tourism content.
create policy "Public read destinations" on public.destinations for select using (true);
create policy "Public read vehicles" on public.vehicles for select using (true);
create policy "Public read itineraries" on public.itineraries for select using (true);
create policy "Public read travel notes" on public.travel_notes for select using (true);
create policy "Public read gallery" on public.gallery for select using (true);
create policy "Public read site settings" on public.site_settings for select using (true);

-- Only authenticated users can manage website content.
create policy "Admins manage destinations" on public.destinations for all to authenticated using (true) with check (true);
create policy "Admins manage vehicles" on public.vehicles for all to authenticated using (true) with check (true);
create policy "Admins manage itineraries" on public.itineraries for all to authenticated using (true) with check (true);
create policy "Admins manage travel notes" on public.travel_notes for all to authenticated using (true) with check (true);
create policy "Admins manage inquiries" on public.inquiries for all to authenticated using (true) with check (true);
create policy "Admins manage quotations" on public.quotations for all to authenticated using (true) with check (true);
create policy "Admins manage gallery" on public.gallery for all to authenticated using (true) with check (true);
create policy "Admins manage site settings" on public.site_settings for all to authenticated using (true) with check (true);

-- Note: For a production launch, restrict authenticated access to a dedicated admin role.
-- Never expose a Supabase service-role key in browser code.
