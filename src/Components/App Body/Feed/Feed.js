import React, {useState, useEffect} from 'react';
import StoryReel from './StoryReel';
import MessengerSender from './MessengerSender';
import Post from './Post/Post';
import db from '../../../firebase';

import './Feed.css';

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }) ))
    })
  }, []);

  return(
    <div className="feed">
      {/* StoyReel */}
      <StoryReel />
      {/* MessengerSender */}
      <MessengerSender />
      {/* Post */}

      {posts.map(post => (
        <>
          <Post
            key={post.id}
            image={post.data.image}
            message={post.data.message}
            profilePic={post.data.profilePic}
            timestamp={post.data.timestamp}
            username={post.data.username}
          />
        </>
      ))}
    </div>
  );
};

export default Feed;