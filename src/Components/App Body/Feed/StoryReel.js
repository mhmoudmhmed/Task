import React from 'react';
import Story from './Story';

import './storyReel.css';

const StoryReel = () => {
  return(
    <div className="storyReel">
      <Story
        className="storyReel_story"
        image="https://images4.alphacoders.com/167/thumb-350-167128.jpg"
        profileSrc="https://images5.alphacoders.com/663/thumb-350-663592.png"
        title="Natsu Dragneel"
      />

      <Story
        image="https://images2.alphacoders.com/541/thumb-350-541052.jpg"
        profileSrc="https://images6.alphacoders.com/552/thumb-350-552185.jpg"
        title="Gray Fullbuster"
      />

      <Story
        image="https://images5.alphacoders.com/735/thumb-350-735680.png"
        profileSrc="https://images.alphacoders.com/744/thumb-350-744311.png"
        title="Erza Scarlet"
      />
    </div>
  );
};

export default StoryReel;