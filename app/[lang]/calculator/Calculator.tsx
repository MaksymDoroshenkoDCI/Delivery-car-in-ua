"use client";

import { useState } from "react";

export default function Calculator({ dict }: { dict: any }) {
  const [price, setPrice] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    setResult(price + tax);
  };

  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
        {dict.calculator.title}
      </h1>

      <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-lg p-6 md:p-8 space-y-4">
        <input
          type="number"
          placeholder={dict.calculator.price}
          className="w-full border border-border/60 bg-background/70 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder={dict.calculator.tax}
          className="w-full border border-border/60 bg-background/70 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
          value={tax}
          onChange={(e) => setTax(Number(e.target.value))}
        />

        <button
          onClick={calculate}
          className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200"
        >
          {dict.calculator.calculate}
        </button>

        {result !== null && (
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
            {dict.calculator.result}: <b>{result} $</b>
          </div>
        )}
      </div>
    </section>
  );
}
