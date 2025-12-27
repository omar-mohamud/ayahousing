export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact / Support</h1>
      <p className="text-zinc-600 max-w-2xl">
        Reach out for inquiries, partnerships, or support. We’ll get back to you by email.
      </p>
      <form className="grid gap-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="mt-1 w-full rounded-md border px-3 py-2" name="name" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" name="email" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="mt-1 w-full rounded-md border px-3 py-2" name="message" rows={5} required />
        </div>
        <button className="rounded-md bg-[--brand] px-4 py-2 text-white w-fit" type="submit">Send</button>
      </form>
      <div className="text-sm text-zinc-600">
        <p>Phone: +234-000-0000</p>
        <p>Office: Lagos, Nigeria</p>
      </div>
    </section>
  );
}


