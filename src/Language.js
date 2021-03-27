import React from 'react';
import english from './icons/english.svg';

import './css/Language.css'

export function Language() {
    
    const changeLanguage = lng => {
        localStorage.setItem("lng", lng);
        window.location.reload();
    };

    return (
        <div className = "lang-toggle">
            <div className = "lang-option" id = "en" onClick = {() => changeLanguage("en")}>
                <img src = {english} alt="flagg greate britan"></img>
            </div>
        </div>
    );
}