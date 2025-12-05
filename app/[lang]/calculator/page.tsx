import { getDictionary } from "../dictionaries";
import Calculator from "./Calculator";
import Layout from "@/components/layout";

interface PageProps {
  params: { lang: "ua" | "ru" | "en" };
}

export default async function Page({ params }: PageProps) {
  const { lang } = params;        // ← БЕЗ await !!!
  const dict = await getDictionary(lang);

  return (
    <Layout lang={lang} dict={dict}>
      <Calculator dict={dict} />
    </Layout>
  );
}
