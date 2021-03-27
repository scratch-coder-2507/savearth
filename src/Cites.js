import React, {useState} from 'react';
import sources from './strings/source.json';

import i18n from 'i18next';
import k from "./i18n/keys";

import './css/cites.css';

export function Cites() {

  const [showMore, setShowMore] = useState(false);

  return (
    <div className = 'sources-container'>
      <div className = 'sources-trigger' onClick={() => {showMore === true ? setShowMore(false) : setShowMore(true)}}>
        {showMore === true && <p>{i18n.t(k["HSOURCES"])}</p>}
        {showMore === false && <p>{i18n.t(k["SSOURCES"])}</p>}
      </div>
      {showMore &&
      <div className = 'sources'>
        {sources.map(source => {
          return (
            <div className = 'source' id = {'source' + source.id}>
              <a className = 'link' href={source.link}>{source.name}</a>
            </div>
          );
        })}
      </div>}
    </div>
  );
}
