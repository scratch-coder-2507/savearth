import React from 'react';

import './css/fh.css'

export default function Fh() {
    return (
        <div className = 'fh-logo'>
            <div class="social-links">
                <a href="https://github.com/hardiksakpal2507"><img alt="" className="button-symbol" src={require('./icons/github.png')}></img></a>
                <a href="https://www.youtube.com/channel/UCPV-2YdLd8T3Cr_SCPZE03g"><img alt="" className="button-symbol" src={require('./icons/youtube.png')}></img></a>
                <a href="https://www.instagram.com/hardik.mufc_2507/"><img alt="" className="button-symbol" src={require('./icons/instagram.png')}></img></a>
                <a href="https://www.facebook.com/hardiksakpal251407/"><img alt="" className="button-symbol" src={require('./icons/facebook.png')}></img></a>
                <a href="https://www.linkedin.com/in/hardik-sakpal-635768201/"><img alt="" className="button-symbol" src={require('./icons/linkedin.png')}></img></a>
            </div>
        </div>
    );
}