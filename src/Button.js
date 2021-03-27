import React from 'react';

import './css/button.css';

export function Button(props) {
  return (
    <div className={props.className} onClick={props.action}>
            {props.buttonText != null && <p>{props.buttonText}</p>}
            {props.symbol != null && <img alt={props.symbol} className="button-symbol" src={require('./icons/' + props.symbol + '.svg')}></img>}
        </div>);

}