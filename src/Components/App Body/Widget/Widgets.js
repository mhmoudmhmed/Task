import React from 'react';
import './Widgets.css';

const Widgets = () => {
  return(
    <div className="widgets">
      <iframe
        title='iframe'
        src="https://www.powr.io/banner-slider/u/2b77354b_1601516815#platform=iframe"
        height="100%"
        width="340"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameBorder="0"
        allowtransparency='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  );
};

export default Widgets;