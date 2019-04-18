import {CONSUMER_KEY,SECRET_KEY,BEARER_TOKEN} from '../config';

var Twitter = require('twitter');


export  const twitterClient = new Twitter({
    consumer_key: CONSUMER_KEY,
    consumer_secret: SECRET_KEY,
    bearer_token: BEARER_TOKEN
  });

