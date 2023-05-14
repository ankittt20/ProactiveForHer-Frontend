import React, { useState } from "react";

const questions = [
  {
    question: "What are STIs/STDs? Is there a difference between the two?",
    answer:
      "STIs are sexually transmitted infections. They occur when sexually transmitted bacteria, viruses, parasites, or other microbes enter the body and begin multiplying. STDs are sexually transmitted diseases that result from STIs as symptoms start to develop and show. Since STIs can often be asymptomatic (which means not everyone with an infection develops symptoms), when talking about screening, the term STI is often more accurate. However, both the terms can be used interchangeably.",
  },
  {
    question: "When do I need STI/STD test? What is the frequency?",
    answer:
      "You will need an STI test if you’ve ever had unprotected sex or if something went wrong during sex like a burst condom. The frequency of getting tested varies depending on your sexual activity.",
  },
  {
    question: "Are there any specific STIs I should keep in mind?",
    answer:
      "STI tests can include trichomoniasis urine test, gonorrhoea screening test, syphilis std test chlamydia lab test, throat chlamydia test, HIV testing, herpes and many more depending on the panel you pick. It is always best to be safe than sorry and do the entire panel to get you treatment as soon as you need it.",
  },
  {
    question: "How do I know if I have an STD?",
    answer:
      "There is no way to know for sure without being tested. Many STDs don't have obvious symptoms. Being sexually active can include vaginal intercourse, anal and/or oral sex. When doctors or nurses ask this question, they are really asking if you've done anything since your last check up that might have exposed you to an STD or pregnancy. STD tests should be part of your regular check-up. But, if you have any concerns at all that you may have been exposed to an STD, see a doctor and ask to be tested.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="faqs" className="h-full my-10 lg:my-24">
      <div className="max-w-5xl mx-auto px-10 z-5">
        <div>
          <h1 className="text-xl mb-4 lg:text-3xl lg:mb-10 text-center lg:text-left">Frequently Asked Questions.</h1>
        </div>
        {questions.map((q, index) => (
          <div
            key={index}
            className="mb-4 bg-[#BA90C6] hover:bg-[#BA90C6]/90 transition duration-200 rounded-lg shadow-lg"
          >
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <h2 className="text-lg font-medium mr-5">{q.question}</h2>
              <svg
                className={`w-7 h-7 transition-transform ${
                  index === activeIndex ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {index === activeIndex && (
              <div className="px-4 pr-10 py-2 pb-5 text-justify">
                {q.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
