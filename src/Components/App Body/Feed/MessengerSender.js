import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import db from '../../../firebase';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../../ContextProvider/StateProvider';
import { storage } from '../../../firebase';

import './MessengerSender.css';

const MessengerSender = () => {
  
  console.log(storage);

  const [ { user }, dispatch ] = useStateValue();
  const [uploadTask, setUploadTask] = useState();
  const [input, setInput] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState(null);
  const [url, setUrl] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      photoPic: user.photoURL,
      username: user.displayName,
      image: imgUrl,
    })
    setInput('');
    setImgUrl('');
  }
  
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setVideoUrl(e.target.files[0]);
    }
  }

  const handleUpload = (e) => {
    e.preventDefault();
    setUploadTask(storage.child(`videos/${videoUrl.name}`).put(videoUrl));
  }
  useEffect(() => {
    if(uploadTask) {
      uploadTask.on(
        "state_changed",
        snap => {
          console.log(snap);
        },
        error => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(url => {
            setUrl(url);
            console.log(url);
          });
        }
      )
    }
  }, [uploadTask])

  return(
    <div className="MessengerSender">
      <div className="MessengerSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="MessengerSender_input"
            placeholder={`What's on your mind ? ${user.displayName}`}
          />
          <input
            value={imgUrl && url}
            accept="video/*,image/*"
            onChange={e => setImgUrl(e.target.value)}
            placeholder="Post Url"
          />
          <button className="hidden_button" onClick={handleSubmit} type="submit" >Hidden Submit</button>
        </form>
        
        <form>
          <input className="upload_input" type="file" onChange={handleChange} />
          <button onClick={handleUpload}>Upload</button>
        </form>
        
      </div>

      <div className="MessengerSender_bottom">
        <div className="MessengerSender_option">
          <VideocamIcon style={{ color: 'red' }} />
          <h4>Live Video</h4>
        </div>

        <div className="MessengerSender_option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h4>Photo/Video</h4>
        </div>

        <div className="MessengerSender_option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default MessengerSender;