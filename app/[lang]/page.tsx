import Layout from "@/components/layout";
import GlassBackground from "@/components/GlassBackground";
import { getDictionary } from "./dictionaries";
import Image from "next/image";
import Link from "next/link";

export default async function Home(props: { params: Promise<{ lang: "ua" | "ru" | "en" }> }) {
  const { lang } = await props.params; // 👈 обов’язково чекаємо params
  const dict = await getDictionary(lang);

  return (
    <Layout lang={lang} dict={dict}>
      {/* 👇 Ефект скла */}
      <GlassBackground />

       {/* 🏁 HERO SLIDER */}
<section className="relative w-full h-screen flex items-center justify overflow-hidden border-b-4 border-primary">
  {/* Анімований фон */}
  <div className="absolute inset-0 animate-slide bg-cover bg-center bg-no-repeat"></div>

  {/* Напівпрозора затемнююча підкладка */}
  <div className="absolute inset-0 bg-black/60 z-10 "></div>

  {/* Контент поверх */}
  <div className="relative z-20 text-center text-white px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg border-b-4 border-primary  pb-2">
      Пригон авто з США, Європи та Китаю
    </h1>
    <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-gray-200">
      Імпорт авто під ключ — швидко, прозоро, вигідно.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={`/${lang}/calculator`}
        className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all"
      >
        🚘 Розрахувати вартість
      </a>
      <a
        href={`/${lang}/contact`}
        className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
      >
        📞 Замовити консультацію
      </a>
    </div>
  </div>
</section>
      {/* Основний контент */}
      <br>
      </br>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Переваги */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card">
          <h2 className="text-xl font-semibold mb-4 text-primary">{dict.advantages.title}</h2>
          <ul className="list-disc list-outside space-y-4 text-left text-muted-foreground">
            {(dict.advantages.items as { title: string; description: string }[]).map((item, index) => (
              <li key={index}>
                <h3 className="font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Як це працює */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card">
          <h2 className="text-xl font-semibold mb-4 text-primary">{dict.howItWorks.title}</h2>
          <ul className="list-disc list-outside text-left space-y-4 text-muted-foreground">
            {(dict.howItWorks.steps as { title: string; description: string }[]).map((step, index) => (
              <li key={index}>
                <h3 className="font-semibold">{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Послуги */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card">
          <h2 className="text-xl font-semibold mb-4 text-primary">{dict.services.title}</h2>
          <ul className="list-disc list-outside text-left space-y-2 text-muted-foreground">
            {(dict.services.items as { title: string; description: string }[]).map((service, index) => (
              <li key={index}>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">{dict.cta.title}</h2>
          <p className="text-muted-foreground mb-6">{dict.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              {dict.cta.buttons.calculate}
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              {dict.cta.buttons.contact}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
// Головна сторінка з ефектом скла, що підтримує мультимовність.
