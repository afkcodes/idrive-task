/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import getData from '../../utils/getData';
import './tweets.css';

const Tweets = ({ topic }) => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getData
      .tweets(topic)
      .then((tweet) => {
        setTweets(tweet);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <div className="main-tweets-container">
        {tweets
          ? tweets.map((tweet) => (
              <div key={tweet.quote_id} className="tweet-container">
                <p className="tweet-text">{tweet.value}</p>
              </div>
            ))
          : 'No Tweets Found'}
      </div>
    </>
  );
};
export default Tweets;
