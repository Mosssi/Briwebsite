import Contact from "@/components/Contact";

export const metadata = { title: "Contacts — Brianna" };

export default function ContactsPage() {
  return (
    <main className="mx-auto max-w-[1000px] px-6 py-12">
      <h1 className="mb-3 font-mono text-4xl font-semibold text-white">
        <span className="text-accent">/</span>Let&apos;s Connect
      </h1>
      <p className="mb-12 text-lg text-gray-400">
        Have a project, a role, or just want to say hi? Drop me a line.
      </p>
      <Contact />
    </main>
  );
}