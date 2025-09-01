import Layout from "@/components/layout";
// Update the import path if the dictionaries module is located elsewhere
import { getDictionary } from "../dictionaries";

type Lang = "ua" | "ru" | "en";
type Props = { params: { lang: Lang } };

export default async function DeliveryPage({ params }: Props) {
  const dict = await getDictionary(params.lang);

  return (
    <Layout lang={params.lang} dict={dict}>
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">{dict.delivery.title}</h1>
        <p className="text-lg mb-4">{dict.delivery.description}</p>
        <img
          src="/images/delivery-car.jpg"
          alt="Delivery car"
          className="rounded-lg shadow-md w-full"
        />
      </section>
    </Layout>
  );
}
