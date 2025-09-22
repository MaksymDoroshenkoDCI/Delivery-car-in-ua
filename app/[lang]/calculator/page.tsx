import { getDictionary } from "../dictionaries";
import Calculator from "./Calculator";
import React from "react";
import Layout from "@/components/layout";
interface PageProps {
  params: { lang: "ua" | "ru" | "en" };
}

export default async function Page({ params }: PageProps) {
  const dict = await getDictionary(params.lang);
  return (
    <Layout lang={params.lang} dict={dict}>
      <Calculator dict={dict} />
    </Layout>
  );
} 