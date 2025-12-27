export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">About Us</h1>
      <p className="text-zinc-600 max-w-2xl">
        Aya Housing centralizes property listings, rental management, and maintenance
        services. Our mission is to provide a modern, transparent experience for
        tenants, landlords, buyers, and housing managers.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="font-medium">Mission</h2>
          <p className="text-zinc-600 mt-2">
            Build a reliable platform that streamlines housing operations and improves
            living standards.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-medium">Values</h2>
          <p className="text-zinc-600 mt-2">Trust, transparency, and service excellence.</p>
        </div>
      </div>
    </section>
  );
}


