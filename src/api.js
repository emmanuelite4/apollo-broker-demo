import axios from "axios";

const BASE_URI = "https://hacker-news.firebaseio.com/v0";

const handleFetchStory = async (id) => {
  try {
    const result = await axios.get(`${BASE_URI}/item/${id}.json`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const getStories = async (type) => {
  try {
    const result = await axios.get(`${BASE_URI}/${type}stories.json`);
    return await Promise.all(result.data.splice(0, 30).map(handleFetchStory));
  } catch (err) {
    console.log(err);
  }
};
