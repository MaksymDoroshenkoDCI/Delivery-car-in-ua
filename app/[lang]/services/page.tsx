import { getDictionary } from '../dictionaries';
import Layout from "@/components/layout";
import ServiceCard from '@/components/ServiceCard';


type Lang = 'ua' | 'ru' | 'en';

type Props = {
  params: { lang: Lang };
};

export default async function Page({ params }: Props) {
  const dict = await getDictionary(params.lang);

  return (
    <Layout lang={params.lang} dict={dict}>
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-600">
          Delivery Car in UA
        </h1>
        <p className="text-lg max-w-xl mx-auto text-black">{dict.hero.subtitle}</p>
      </section>
      <section className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-primary">{dict.services.title}</h2>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {(dict.services.items as { title: string; description: string }[]).map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </section>
    </Layout>
  );
}
