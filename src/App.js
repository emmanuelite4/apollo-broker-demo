import "./App.css";
import { useEffect, useState } from "react";
import { getStories } from "./api";
import Story from "./component/Story";
import CategorySelect from "./component/CategorySelect";

function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("top");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    async function fetchStory() {
      setLoading(true);
      let stories = await getStories(type);
      setStories(stories);
      setLoading(false);
    }

    fetchStory();
  }, [type]);

  return (
    <div className={"main"}>
      <header className={"header"}>
        <b>Hacker news (Stories)</b>
        {loading ? <small>Loading...</small> : null}
      </header>
      <CategorySelect onChange={handleChange} value={type} />
      <table className={"table"}>
        <tbody>
          {stories &&
            stories.map((story, index) => (
              <Story index={index + 1} key={story.id} {...story} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
