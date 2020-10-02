import React from 'react';
import { Avatar } from '@material-ui/core';

import './Story.css';

const Story = ({ image, profileSrc, title }) => {
  return(
    <div style={{ backgroundImage: `url(${image})` }} className="Story">
      <Avatar className="story_avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;