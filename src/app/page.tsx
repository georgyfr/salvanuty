import { supabase } from "@/lib/supabase";

type Product = {
  id: string;
  name: string;
  benefit: string | null;
  price: number;
};

export default async function Home() {
  const fallbackProducts = [
    { id: "1", name: "Omega 3 Pure", benefit: "Coeur & concentration", price: 24.9 },
    { id: "2", name: "Magnesium+ B6", benefit: "Energie & recuperation", price: 18.5 },
    { id: "3", name: "Immuno Zinc C", benefit: "Defense immunitaire", price: 21 },
  ];

  const { data, error } = await supabase
    .from("products")
    .select("id, name, benefit, price")
    .order("created_at", { ascending: false })
    .limit(3);

  const products: Product[] =
    data && data.length > 0 ? (data as Product[]) : fallbackProducts;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
      <header className="mb-10 flex items-center justify-between rounded-3xl border border-emerald-900/10 bg-[var(--surface)] px-6 py-4 shadow-sm">
        <p className="font-display text-2xl text-[var(--primary)]">SlavaNutry</p>
        <button className="rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--primary-contrast)]">
          Mon panier (0)
        </button>
      </header>

      <main className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
        <section className="rounded-3xl border border-emerald-900/10 bg-[var(--surface)] p-8 shadow-sm">
          <p className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-900">
            Nouvelle collection
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
            Complements alimentaires premium pour votre quotidien.
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-emerald-900/75">
            Des formules propres, des ingredients traces, et une experience
            simple pour commander vos routines sante.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white">
              Decouvrir les produits
            </button>
            <button className="rounded-full border border-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary)]">
              Voir les packs
            </button>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-900/10 bg-[var(--surface)] p-8 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-[var(--primary)]">
            Best-sellers
          </h2>
          <div className="space-y-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="rounded-2xl border border-emerald-900/10 p-4"
              >
                <p className="text-sm font-semibold text-[var(--primary)]">
                  {product.name}
                </p>
                <p className="text-sm text-emerald-900/70">
                  {product.benefit ?? "Complement alimentaire premium"}
                </p>
                <p className="mt-2 font-bold text-[var(--accent)]">
                  {product.price.toFixed(2)} EUR
                </p>
              </article>
            ))}
          </div>
          {error ? (
            <p className="mt-3 text-xs text-amber-700">
              Connexion Supabase detectee mais table/policies a finaliser.
            </p>
          ) : null}
        </section>
      </main>

      <section className="mt-8 rounded-3xl border border-emerald-900/10 bg-[var(--surface)] p-8 shadow-sm">
        <h3 className="font-display text-3xl text-[var(--primary)]">
          Prêt pour Vercel + Supabase
        </h3>
        <p className="mt-3 text-sm leading-7 text-emerald-900/75">
          Frontend Next.js connecte a Supabase. Prochaine etape: commandes,
          profils clients et authentification.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-900">
            Next.js App Router
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-900">
            Deploy Vercel
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-900">
            Supabase DB + Auth
          </span>
        </div>
      </section>
    </div>
  );
}
