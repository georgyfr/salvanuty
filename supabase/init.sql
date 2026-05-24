create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  benefit text,
  price numeric(10,2) not null check (price >= 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.products enable row level security;

drop policy if exists "public can read active products" on public.products;
create policy "public can read active products"
on public.products
for select
to anon, authenticated
using (is_active = true);

drop policy if exists "admins can insert products" on public.products;
create policy "admins can insert products"
on public.products
for insert
to authenticated
with check ((auth.jwt() ->> 'role') = 'admin');

drop policy if exists "admins can update products" on public.products;
create policy "admins can update products"
on public.products
for update
to authenticated
using ((auth.jwt() ->> 'role') = 'admin')
with check ((auth.jwt() ->> 'role') = 'admin');

drop policy if exists "admins can delete products" on public.products;
create policy "admins can delete products"
on public.products
for delete
to authenticated
using ((auth.jwt() ->> 'role') = 'admin');

insert into public.products (name, benefit, price, is_active)
values
  ('Omega 3 Pure', 'Coeur & concentration', 24.90, true),
  ('Magnesium+ B6', 'Energie & recuperation', 18.50, true),
  ('Immuno Zinc C', 'Defense immunitaire', 21.00, true)
on conflict do nothing;
