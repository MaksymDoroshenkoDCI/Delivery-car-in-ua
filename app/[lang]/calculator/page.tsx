import { getDictionary } from "../dictionaries";
import Calculator from "./Calculator";

export default function Page({ params }: { params: { lang: string } }) {
  const dict = getDictionary(params.lang as "ua" | "ru" | "en");

  return <Calculator dict={dict} />;
}