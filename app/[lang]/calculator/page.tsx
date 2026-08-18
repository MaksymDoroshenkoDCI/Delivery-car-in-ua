import Layout from "@/components/layout";
import { getDictionary } from "../dictionaries";
import Calculator from "./Calculator";

type Lang = "ua" | "ru" | "en";

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <Layout lang={lang} dict={dict}>
      <Calculator dict={dict} />
    </Layout>
  );
}
