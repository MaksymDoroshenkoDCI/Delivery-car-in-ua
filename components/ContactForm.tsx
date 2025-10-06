"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

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

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg mx-auto p-6 rounded-2xl shadow-md">
      <label>
        <div className="font-medium">Ім’я</div>
        <input name="name" required className="w-full border rounded px-3 py-2" />
      </label>

      <label>
        <div className="font-medium">Email</div>
        <input name="email" type="email" required className="w-full border rounded px-3 py-2" />
      </label>

      <label>
        <div className="font-medium">Повідомлення</div>
        <textarea name="message" rows={4} required className="w-full border rounded px-3 py-2" />
      </label>

      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        {status === "loading" ? "Відправлення..." : "Надіслати"}
      </button>

      {status === "success" && <p className="text-green-600">✅ Повідомлення успішно надіслано!</p>}
      {status === "error" && <p className="text-red-600">❌ Сталася помилка. Спробуйте пізніше.</p>}
    </form>
  );
}
// Форма зворотного зв'язку з обробкою станів (завантаження, успіх, помилка).