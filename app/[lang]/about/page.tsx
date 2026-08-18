import Layout from "@/components/layout";
import { getDictionary } from "../dictionaries";
import Link from "next/link";
import { 
  Sparkles, 
  ShieldCheck, 
  DollarSign, 
  Gauge, 
  Search, 
  FileText, 
  Gavel, 
  Ship, 
  FileCheck, 
  Wrench, 
  ArrowRight,
  TrendingUp
} from "lucide-react";

type Lang = "ua" | "ru" | "en";

interface AboutPageProps {
  params: Promise<{ lang: Lang }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Map icon component names based on index or step for rendering
  const whyIcons = [
    <DollarSign className="w-6 h-6 text-emerald-500" key="dollar" />,
    <ShieldCheck className="w-6 h-6 text-blue-500" key="shield" />,
    <Sparkles className="w-6 h-6 text-amber-500" key="sparkles" />,
    <Gauge className="w-6 h-6 text-indigo-500" key="gauge" />
  ];

  const processIcons = [
    <Search className="w-6 h-6 text-cyan-400" key="search" />,
    <FileText className="w-6 h-6 text-blue-400" key="file" />,
    <Gavel className="w-6 h-6 text-indigo-400" key="gavel" />,
    <Ship className="w-6 h-6 text-purple-400" key="ship" />,
    <FileCheck className="w-6 h-6 text-emerald-400" key="customs" />,
    <Wrench className="w-6 h-6 text-amber-400" key="repair" />
  ];

  return (
    <Layout lang={lang} dict={dict}>
      <div className="max-w-6xl mx-auto space-y-24 py-8">
        
        {/* HERO SECTION */}
        <section className="relative text-center py-16 px-6 overflow-hidden rounded-3xl border border-white/10 dark:border-white/5 bg-gradient-to-b from-white/10 to-transparent dark:from-black/20 dark:to-transparent backdrop-blur-md shadow-2xl">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          
          <span className="inline-flex items-center gap-1.5 mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            {dict.nav.about}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {dict.aboutPage.title}
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            {dict.aboutPage.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/calculator`}
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              {dict.aboutPage.ctaButton}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground border border-border px-8 py-4 rounded-xl font-semibold hover:bg-secondary/80 hover:-translate-y-0.5 transition-all duration-200"
            >
              {dict.cta.buttons.contact}
            </Link>
          </div>
        </section>

        {/* WHY USA SECTION */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {dict.aboutPage.whyTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {dict.aboutPage.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.aboutPage.whyItems.map((item: any, idx: number) => (
              <div 
                key={idx} 
                className="group relative p-8 rounded-2xl border border-border/50 bg-card/65 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-300" />
                
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-card border border-border/80 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {whyIcons[idx]}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS FLOW SECTION */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {dict.aboutPage.processTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {dict.aboutPage.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {dict.aboutPage.processSteps.map((step: any, idx: number) => (
              <div 
                key={idx} 
                className="group relative p-6 rounded-2xl border border-border/50 bg-card/65 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Large transparent step number in corner */}
                <span className="absolute top-4 right-6 text-6xl font-extrabold text-foreground/5 select-none group-hover:text-primary/10 group-hover:scale-105 transition-all duration-300">
                  {`0${idx + 1}`}
                </span>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    {processIcons[idx]}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Progress bar line effect under the card */}
                <div className="w-full h-1 bg-border/20 rounded-full mt-6 overflow-hidden">
                  <div className="w-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNED SECTION */}
        <section className="relative overflow-hidden rounded-3xl p-10 md:p-14 bg-gradient-to-br from-blue-600/10 via-purple-500/10 to-cyan-500/10 border border-white/10 dark:border-white/5 backdrop-blur-md shadow-xl text-center">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl -z-10" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl -z-10" />
          
          <div className="max-w-2xl mx-auto space-y-8">
            <TrendingUp className="w-12 h-12 text-primary mx-auto animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {dict.aboutPage.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {dict.aboutPage.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/calculator`}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                {dict.aboutPage.ctaButton}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="border border-primary/40 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 dark:hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                {dict.cta.buttons.contact}
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
