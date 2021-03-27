import React from 'react';

import './css/Animal.css'

import i18n from 'i18next';
import k from "./i18n/keys";

export default function Animal(props) {
  return (
    <div className="slide" id={'animal' + props.id}>
      <div className="animal">
        <div className = "animal-hero">
          <img src = {require('./images/' + props.img + '.png')} alt = {props.name}></img>
          <h1>{i18n.t(k[(props.name)])}</h1>
        </div>
        <p className = 'animal-text'>{i18n.t(k[(props.text)])}</p>
      </div>
    </div>);

}
