"use client";

import Layout from "@/components/layout";
import { useState } from "react";
import { getDictionary } from "../dictionaries";

type Lang = "ua" | "ru" | "en";
type Props = { params: { lang: Lang } };

export default async function CalculatorPage({ params }: Props) {
  const dict = await getDictionary(params.lang);

  return (
    <Layout lang={params.lang} dict={dict}>
      <Calculator dict={dict} />
    </Layout>
  );
}

function Calculator({ dict }: { dict: any }) {
  const [price, setPrice] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    setResult(price + tax);
  };

  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{dict.calculator.title}</h1>

      <div className="space-y-4">
        <input
          type="number"
          placeholder={dict.calculator.price}
          className="w-full border p-2 rounded"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder={dict.calculator.tax}
          className="w-full border p-2 rounded"
          value={tax}
          onChange={(e) => setTax(Number(e.target.value))}
        />

        <button
          onClick={calculate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {dict.calculator.calculate}
        </button>

        {result !== null && (
          <div className="mt-4 p-4 bg-green-100 rounded">
            {dict.calculator.result}: <b>{result} $</b>
          </div>
        )}
      </div>
    </section>
  );
}
