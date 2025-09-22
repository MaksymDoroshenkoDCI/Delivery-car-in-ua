import { getDictionary } from "../dictionaries";
import Contact from "../Contact/Conact";

interface PageProps {
  params: { lang: "ua" | "ru" | "en" };
}

export default async function Page({ params }: PageProps) {
  const dict = await getDictionary(params.lang);
  return <Contact dict={dict} lang={params.lang} />;
}
