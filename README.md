## SlavaNutry

Base e-commerce en Next.js (App Router) pour complements alimentaires.

### 1) Installer les dependances

```bash
npm install
```

### 2) Configurer Supabase

Copier `.env.local.example` en `.env.local` puis renseigner:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3) Lancer en local

```bash
npm run dev
```

Ouvrir `http://localhost:3000`.

### 4) Deploy sur Vercel

- Push du repo sur GitHub
- Import du projet dans Vercel
- Ajouter les memes variables d'environnement Supabase dans Vercel
- Deploy

### 5) Initialiser la base Supabase

- Ouvrir l'editor SQL Supabase
- Executer le script [supabase/init.sql](C:/Users/hp/Documents/Codex/salvanuty/supabase/init.sql)

### 6) Tester la connexion

- Lancer `npm run dev`
- Ouvrir `http://localhost:3000/api/supabase-check`
