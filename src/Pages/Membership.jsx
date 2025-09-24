import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Membership = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipiscing eliteiusmod tempor incididunt?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedqu non numquam eius modi tempora incidunt ut labore et dolore.",
    },
    {
      question:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      question:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedqu non numquam eius modi tempora incidunt ut labore et dolore.",
    },
    {
      question:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedqu non numquam eius modi tempora incidunt ut labore et dolore.",
    },
    {
      question:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit essen?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedqu non numquam eius modi tempora incidunt ut labore et dolore.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Frequently asked questions
        </h2>

        <div className="flex justify-center mb-6 border-1 p-1 px-4 w-180 ml-25">
          <div className="flex w-full  overflow-hidden">
            <input
              type="text"
              placeholder="Search FAQs"
              className=" text-white px-4 py-2 w-full outline-none"
            />
            <button className="bg-white text-black px-4 py-1">Search</button>
          </div>
        </div>

        <p className="text-center text-gray-400 mb-6">
          Choose a question to quickly find the help you need
        </p>

        <div className="space-y-2 ">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left border 
                 border-gray-600 rounded hover:bg-[#191B20] transition mt-10"
              >
                <span className="font-medium">Q. {faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && faq.answer && (
                <div className="px-4 pt-2 pb-4 text-[#CACACA] text-sm  rounded-b mt-10 mb-10">
                  <strong className="text-white"> A.</strong> {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Membership;
