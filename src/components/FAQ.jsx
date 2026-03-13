import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = ({ title = "Frequently Asked Questions", faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="faq-section" aria-labelledby="faq-heading">
            <div className="container">
                <header className="section-header">
                    <span className="section-label">FAQ</span>
                    <h2 id="faq-heading">{title}</h2>
                </header>

                <div className="faq-list" role="list">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`faq-item ${isOpen ? 'open' : ''}`}
                                role="listitem"
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <h3>{faq.question}</h3>
                                    <ChevronDown
                                        className="faq-icon"
                                        size={20}
                                        aria-hidden="true"
                                    />
                                </button>
                                <div
                                    id={`faq-answer-${index}`}
                                    className="faq-answer-wrapper"
                                    aria-hidden={!isOpen}
                                >
                                    <p className="faq-answer">{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
