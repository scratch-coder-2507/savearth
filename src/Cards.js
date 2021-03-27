import React, { useEffect } from 'react';
import Animal from './Animal';
import animals from './strings/animals.json';
import forward from './icons/forward.svg';
import back from './icons/back.svg';

import './css/Cards.css';

export function Cards(props) {

  useEffect(() => {
    let startA = document.getElementsByClassName('animal')[0];
    startA.classList.add('activeCard');
  });

  if (props.type === 'animals') {
    return (
      <div className='cards'>
        <div className="control back" onClick={() => switchCard("back", "animal")}>
          <img src={back} alt="back"></img>
        </div>
        {animals.map(animal => {
          return <Animal img={animal.img} key={animal.id} id={animal.id} name={animal.name} text={animal.text} />;
        })}
        <div className="control forward" onClick={() => switchCard("forward", "animal")}>
          <img src={forward} alt="forward"></img>
        </div>
      </div>);
  }
}

function switchCard(direction, type) {

  let elements = document.getElementsByClassName(type);
  let current;
  let target;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains('activeCard')) {

      current = i;

      if (direction === 'forward') {
        target = i + 1;
      } else {
        target = i - 1;
      }
    }
  }
  elements[current].classList.remove('activeCard');

  if (target < 0) {
    elements[elements.length - 1].classList.add('activeCard');
  } else if (target < elements.length) {
    elements[target].classList.add('activeCard');
  } else {
    elements[0].classList.add('activeCard');
  }
}
