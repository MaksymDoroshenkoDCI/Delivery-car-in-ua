import Layout from "@/components/layout";
import GlassBackground from "@/components/GlassBackground";
import { getDictionary } from "./dictionaries";

export default async function Home(props: { params: Promise<{ lang: "ua" | "ru" | "en" }> }) {
  const { lang } = await props.params; // 👈 обов’язково чекаємо params
  const dict = await getDictionary(lang);

  return (
    <Layout lang={lang} dict={dict}>
      {/* 👇 Ефект скла */}
      <GlassBackground />

      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-600">
          Delivery Car in UA
        </h1>
        <p className="text-lg max-w-xl mx-auto text-black">{dict.hero.subtitle}</p>
      </section>

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