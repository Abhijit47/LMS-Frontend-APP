import { faqCardData } from "../../constants/index";
import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <section className="mx-auto mt-12 max-w-screen-xl px-4 leading-relaxed md:px-8">
      <div className="space-y-3 text-center">
        <h4 className="text-3xl font-semibold text-gray-800">
          Frequently Asked Questions
        </h4>
        <p className="mx-auto max-w-lg text-lg text-gray-600">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 mx-auto max-w-2xl p-4">
        {faqCardData.map((item, idx) => (
          <FAQCard idx={idx} key={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
