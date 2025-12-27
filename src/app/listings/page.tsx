export default async function ListingsPage({ searchParams }: { searchParams?: Record<string, string | string[] | undefined> }) {
  const params = new URLSearchParams();
  const fields = ["city", "type", "status", "minPrice", "maxPrice", "bedrooms", "page", "pageSize"] as const;
  for (const key of fields) {
    const v = searchParams?.[key];
    if (typeof v === "string" && v.length > 0) params.set(key, v);
  }

  let data: { items: any[]; total: number; page: number; pageSize: number } = { items: [], total: 0, page: 1, pageSize: 12 };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/listings?${params.toString()}`, {
      // Force dynamic on server to allow query usage
      cache: "no-store",
    });
    if (res.ok) {
      data = await res.json();
    }
  } catch {
    // ignore and keep defaults
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Listings</h1>
      <form className="grid gap-4 rounded-lg border p-4 sm:grid-cols-2 lg:grid-cols-4" action="/listings" method="get">
        <input className="rounded-md border px-3 py-2" placeholder="City" name="city" defaultValue={typeof searchParams?.city === "string" ? searchParams?.city : ""} />
        <select className="rounded-md border px-3 py-2" name="type" defaultValue={typeof searchParams?.type === "string" ? searchParams?.type : ""}>
          <option value="">Type</option>
          <option value="rent">Rent</option>
          <option value="sale">Sale</option>
        </select>
        <input className="rounded-md border px-3 py-2" placeholder="Min Price" name="minPrice" defaultValue={typeof searchParams?.minPrice === "string" ? searchParams?.minPrice : ""} />
        <input className="rounded-md border px-3 py-2" placeholder="Max Price" name="maxPrice" defaultValue={typeof searchParams?.maxPrice === "string" ? searchParams?.maxPrice : ""} />
        <select className="rounded-md border px-3 py-2" name="bedrooms" defaultValue={typeof searchParams?.bedrooms === "string" ? searchParams?.bedrooms : ""}>
          <option value="">Bedrooms</option>
          {[1,2,3,4,5].map((n)=> (
            <option key={n} value={n}>{n}+</option>
          ))}
        </select>
        <button className="rounded-md bg-[--brand] px-4 py-2 text-white w-fit" type="submit">Search</button>
      </form>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.items.length === 0 && (
          <div className="col-span-full text-sm text-zinc-600">No properties found or database not connected.</div>
        )}
        {data.items.map((p: any) => (
          <div key={p.id} className="rounded-lg border p-4">
            <div className="aspect-video w-full rounded-md bg-zinc-100" />
            <div className="mt-3">
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-zinc-600">{p.city}{p.bedrooms ? ` • ${p.bedrooms} beds` : ""}</p>
              <p className="mt-1 font-semibold text-[--brand]">{p.currency ?? "USD"} {p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


