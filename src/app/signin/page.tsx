export default function SignInPage() {
  return (
    <section className="space-y-6 max-w-md">
      <h1 className="text-3xl font-semibold tracking-tight">Sign in</h1>
      <p className="text-zinc-600">Authentication coming soon. Use email or Google once configured.</p>
      <form className="grid gap-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="you@example.com" />
        </div>
        <button className="rounded-md bg-[--brand] px-4 py-2 text-white w-fit" type="button">Continue</button>
      </form>
      <button className="rounded-md border px-4 py-2 w-fit" type="button">Continue with Google</button>
    </section>
  );
}


