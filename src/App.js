import React, {useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/de';
import {Section} from './Section';
import ReactFullpage from "@fullpage/react-fullpage";
import i18n from 'i18next';
import k from "./i18n/keys";

import "./css/App.css";
import "./css/Section.css";

function App(props) {
  useEffect(() => {
    moment.locale(localStorage.getItem("lng") || "en")
    sessionStorage.setItem("timestamp", moment());
  });

  const colors = [
    "#12131D",
    "#12131D",
    "#E4E5F2",
    "#E4E5F2",
    "#E4E5F2",
    "#E4E5F2",
    "#E4E5F2",
    "#E4E5F2",
    "#223970",
    "#12131D",
    "#12131D"
  ];

  const toolTips = [
    i18n.t(k['HEROTITLE']),
    i18n.t(k['SPACETITLE']),
    i18n.t(k['OZONETITLE']),
    i18n.t(k['POLLUTIONTITLE']),
    i18n.t(k['MOUNTAINSTITLE']),
    i18n.t(k['WEATHERTITLE']),
    i18n.t(k['ANIMALSTITLE']),
    i18n.t(k['ICETITLE']),
    i18n.t(k['PLASTICTITLE']),
    i18n.t(k['TIMETITLE']),
    "How can you help",
    "Team"
  ];

  return (
    <ReactFullpage
    licenseKey= 'qp%pf3P$n8'
    sectionsColor={colors}
    verticalCentered = {false}
    fitToSection = {false}
    navigation
    slidesNavigation
    navigationPosition = "left"
    navigationTooltips={toolTips}
    render = {({ state, fullpageApi }) => {
      return (
      <div className="App">
        <Section className="hero" button="button call-to-action" action = {() => scrollDown()} buttonText={i18n.t(k['HEROBUTTONTEXT'])}/>
        <Section className="space" texts = {["space"]} src={["Planet"]} />
        <Section className="ozone" texts = {["ozone"]} src={["Rocket"]}/>
        <Section className="pollution" texts = {["air", "pollution"]} src={["Plane", "Car"]}/>
        <Section className="mountains" texts = {["mountains"]} src={["Mountain"]}/>
        <Section className="weather"/>
        <Section className="animals"/>
        <Section className="ice" texts = {["ice"]} src={["Ice"]}/>
        <Section className="plastic" texts = {["plastic", "coral"]} src={["Fish"]}/>
        <Section className="time" texts = {["time"]}/>
        <Section className="help1" texts = {["help1"]}/>
        <Section className="team" texts = {["team"]}/>
      </div>);
    }}
    />
  );
}

function scrollDown() {
  window.fullpage_api.moveSectionDown();
}

export default App;