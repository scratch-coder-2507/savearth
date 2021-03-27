import React, { useEffect } from 'react';

import './css/Quote.css'

import i18n from 'i18next';
import k from "./i18n/keys";

export function Quote() {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', getQuote());
    });

    return (
        <div className = "quote-container">
            <div className = "quote activeQuote">
                <p className = 'quote-text'>{i18n.t(k['QUOTE01'])}</p>
                <p className = 'quote-person'>{i18n.t(k['QUOTE01PERSON'])}</p>
            </div>
            <div className = "quote">
                <p className = 'quote-text'>{i18n.t(k['QUOTE02'])}</p>
                <p className = 'quote-person'>{i18n.t(k['QUOTE02PERSON'])}</p>
            </div>
            <div className = "quote">
                <p className = 'quote-text'>{i18n.t(k['QUOTE03'])}</p>
                <p className = 'quote-person'>{i18n.t(k['QUOTE03PERSON'])}</p>
            </div>
            <div className = "quote">
                <p className = 'quote-text'>{i18n.t(k['QUOTE04'])}</p>
                <p className = 'quote-person'>{i18n.t(k['QUOTE04PERSON'])}</p>
            </div>
            <div className = "quote">
                <p className = 'quote-text'>{i18n.t(k['QUOTE05'])}</p>
                <p className = 'quote-person'>{i18n.t(k['QUOTE05PERSON'])}</p>
            </div>
        </div>
    );
}

function getQuote() {
    let e = document.getElementsByClassName('quote');
    let current = 0;

    for (let i = 0; i < e.length; i++) {
        if (e[i].classList.contains('activeQuote')) {
            e[i].classList.remove('activeQuote');
            current = i + 1;
        }
    }
    if (current > 4) {
        current = 0;
    }

    e[current].classList.add('activeQuote');
    setTimeout(getQuote, 7000);
}
