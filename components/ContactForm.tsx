"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-border/60 bg-background/70 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 max-w-lg mx-auto p-6 md:p-8 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-lg"
    >
      <label className="grid gap-1.5">
        <span className="font-medium text-sm">Ім’я</span>
        <input name="name" required className={inputClass} />
      </label>

      <label className="grid gap-1.5">
        <span className="font-medium text-sm">Email</span>
        <input name="email" type="email" required className={inputClass} />
      </label>

      <label className="grid gap-1.5">
        <span className="font-medium text-sm">Повідомлення</span>
        <textarea name="message" rows={4} required className={inputClass} />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 transition-all duration-200"
      >
        {status === "loading" ? "Відправлення..." : "Надіслати"}
      </button>

      {status === "success" && (
        <p className="text-green-600 dark:text-green-400">✅ Повідомлення успішно надіслано!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 dark:text-red-400">❌ Сталася помилка. Спробуйте пізніше.</p>
      )}
    </form>
  );
}
