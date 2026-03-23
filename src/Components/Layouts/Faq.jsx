import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is PTSKart?",
    answer:
      "PTSKart is your dream online store, offering a wide range of high-quality products including fashion for Men, Women, and Kids. We are dedicated to providing a seamless shopping experience with premium products, competitive pricing, and excellent customer service.",
  },
  {
    question: "How do I create an account?",
    answer: [
      "Click on the Login/Register button at the top right of the homepage.",
      "Select 'Create an Account.'",
      "Fill in your name, email address, and choose a secure password.",
      "Once registered, you can save your shipping details, track orders, and receive exclusive offers."
    ]
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. We use industry-standard encryption and secure payment gateways to protect your data.",
  },
  {
    question: "Can I track my orders?",
    answer:
      "Absolutely. Go to your account dashboard and open the Orders section to track your purchases in real time.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@parakshtech.com.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-10">
          Find answers to the most common questions about our platform.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-5 pb-5 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
