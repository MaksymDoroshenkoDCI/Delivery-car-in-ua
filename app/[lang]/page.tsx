import Layout from "@/components/layout";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "ua" | "ru" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <Layout lang={lang} dict={dict} fullWidth>
      {/* HERO — відео на всю ширину */}
      <section className="relative w-full h-[calc(100vh-4.5rem)] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/dh3eueciv/video/upload/v1787055913/2026-08-18_14.11.06_rrmuue.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* Затемнення для читабельності */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

        {/* Контент */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide">
              🚀 Імпорт авто під ключ
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-2xl">
              Пригон авто з{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                США, Європи та Китаю
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 text-gray-200/90 leading-relaxed">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${lang}/calculator`}
                className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                🚘 {dict.cta.buttons.calculate}
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                📞 {dict.cta.buttons.contact}
              </a>
            </div>
          </div>
        </div>

        {/* Індикатор прокрутки */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* Решта контенту — у контейнері */}
      <div className="container mx-auto px-4 py-20">
        {/* Картки */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="group relative p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-200">
            <h2 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-primary/10 text-lg">✨</span>
              {dict.advantages.title}
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-4 text-left text-muted-foreground">
              {(dict.advantages.items as { title: string; description: string }[]).map((item, index) => (
                <li key={index}>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-200">
            <h2 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-primary/10 text-lg">⚙️</span>
              {dict.howItWorks.title}
            </h2>
            <ul className="list-disc list-outside pl-4 text-left space-y-4 text-muted-foreground">
              {(dict.howItWorks.steps as { title: string; description: string }[]).map((step, index) => (
                <li key={index}>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-200">
            <h2 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-primary/10 text-lg">🛠️</span>
              {dict.services.title}
            </h2>
            <ul className="list-disc list-outside pl-4 text-left space-y-2 text-muted-foreground">
              {(dict.services.items as { title: string; description: string }[]).map((service, index) => (
                <li key={index}>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p>{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 text-center">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 border border-border shadow-lg">
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.cta.title}</h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">{dict.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`/${lang}/calculator`}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {dict.cta.buttons.calculate}
                </a>
                <a
                  href={`/${lang}/contact`}
                  className="border border-primary/60 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {dict.cta.buttons.contact}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
