import Layout from "@/components/layout";
import { getDictionary } from "../dictionaries";
// перевір шлях — файл має бути components/ContactForm.tsx
import ContactForm from "@/components/ContactForm";

type Lang = "ua" | "ru" | "en";
type Props = { params: { lang: Lang } };

export default async function ContactsPage({ params }: Props) {
  const dict = await getDictionary(params.lang);

  // використовуйте лише ключ 'contact'
  const contacts = dict.contact ?? {};
  const title = contacts.title ?? "Contacts";
  const subtitle = "subtitle" in contacts
    ? contacts.subtitle
    : contacts.description ?? "";

  return (
    <Layout lang={params.lang} dict={dict}>
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        {subtitle && <p className="mb-8">{subtitle}</p>}

        <ContactForm />
      </section>
    </Layout>
  );
}
