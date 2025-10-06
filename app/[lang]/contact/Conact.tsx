"use client";

import Layout from "@/components/layout";

interface ContactProps {
  dict: {
    contact: {
      title: string;
      subtitle: string;
      office: string;
    };
  };
  lang: "ua" | "ru" | "en";
}

export default function Contact({ dict, lang }: ContactProps) {
  return (
    <Layout lang={lang} dict={dict}>
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">{dict.contact.title}</h1>
        <p className="mb-4">{dict.contact.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">{dict.contact.office}</h2>
            <p>📍 Київ, вул. Хрещатик, 10</p>
            <p>📞 +38 (067) 123-45-67</p>
            <p>📧 info@delivery-car.in.ua</p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.9760653747!2d30.5234!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5a06eb2a17%3A0x1234567890abcdef!2sKyiv!5e0!3m2!1suk!2sua!4v1680000000000!5m2!1suk!2sua"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
