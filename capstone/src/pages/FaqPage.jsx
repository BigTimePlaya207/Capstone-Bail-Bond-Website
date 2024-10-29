import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import './FaqPage.css';

const faqData = [
    {
        question: 'What is a bailbond?',
        answer: 'A bail bond is where a person spends money to secure the release of a person who has been arrested and is awating trial.'
    },
    {
        question: 'How long will it take for a defendant to be released once bond is posted?',
        answer: 'The time it takes for a defendant to be released after a bond is posted can vary, but it ranges up to 12 hours.',
    },
    {
        question: 'Are bail bond fees refundable?',
        answer: 'Bail bond fees are not refundable.',
    },
    {
        question: 'What time is bonding court?',
        answer: 'Bonding court times vary by county and state. Georgetown County times are 9am and 3pm. Georgetown City Time is at 11am. Court times are subject to change on holidays and weekends.'
    },
    {
        question: 'Bond has been posted. Why is my loved one not been released yet?',
        answer: 'Release times are determined at the jail/detention center.',
    },
    {
        question: 'When is my court date?',
        answer: 'Court dates are issued upon inmate release. It will be printed on the release paperwork given to you. Your bail bondsman will also have a copy of the court date.',
    },
    {
        question: 'Where do i go for court?',
        answer: 'It is determined by the type of charge. Refer to your release paperwork - it should be listed there along with the address.',
    },
    {
        question: 'If I need an attorney, but cant afford one, who should I call?',
        answer: 'Contact the public defender office in the county where the alleged crime took place.',
    },
    {
        question: 'Can you use a bail bondsman for a probation violation?',
        answer: 'Yes',
    },
    {
        question: 'Can a bail bondsman refer an attorney to a defendant?',
        answer: 'No',
    },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MainLayout>
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              {faq.question}
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default FaqPage;