import axios from 'axios';

const getData = {};

getData.topics = async () => {
  try {
    const response = await axios.get('https://www.tronalddump.io/tag');

    return response.data._embedded.tag;
  } catch (error) {
    console.log(error);
  }
};

getData.tweets = async (topic) => {
  try {
    const response = await axios.get(
      `https://www.tronalddump.io/search/quote?query=${encodeURI(topic)}`
    );
    return response.data._embedded.quotes;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
