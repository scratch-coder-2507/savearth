import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/de';
import times from './strings/time.json';
import './css/Time.css';

import i18n from 'i18next';
import k from "./i18n/keys";
import { Button } from './Button';

export function Time() {
  const [timestamp, setTimestamp] = useState(sessionStorage.getItem("timestamp"));
  const [now, setNow] = useState(moment());

  useEffect(timestamp => {
    if (!timestamp) {
      sessionStorage.setItem("timestamp", moment());
      setTimestamp(sessionStorage.getItem("timestamp"));
    }
    const interval = setInterval(() => {
      setNow(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return createFigures(timestamp, now);
}

function createFigures(timestamp, now) {
  const diff = now.diff(timestamp);
  const diffDuration = moment.duration(diff);

  return (
    <div className="Time">
    {
      times.map((time, index) =>
      <figure key={index}>
        <i></i>
        <figcaption className = 'time-text'><span className = 'time-number'>{formatNumber(Math.round(time.value * (time.per === "m" ? diffDuration.asMinutes() : diffDuration.asSeconds())))}</span><p>{i18n.t(k[time.type.toUpperCase()])}<br/>{i18n.t(k[time.action.toUpperCase()])}</p></figcaption>
      </figure>)}

      <Button>How can you help</Button>
    </div>);

}

function formatNumber(num) {
  let p = ",";
  if (localStorage.getItem("lng") === "en") {
    p = ".";
  }
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + p);
}
