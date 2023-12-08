import "./App.css";
import LikeImage from "./components/LikeImage";
import LikeImageHOC from "./components/LikeImageHOC";
import LikePost from "./components/LikePost";
import LikePostHOC from "./components/LikePostHOC";
import Render from "./components/Render";

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <h3>HOC</h3>
      <div className="buttons">
        <LikePostHOC />
        <LikeImageHOC />
      </div>
      <div>
        <h3>Render Props</h3>
        <Render
          render={(arg1, arg2) => <LikePost data={arg1} functionality={arg2} />}
        />
        <Render
          render={(arg1, arg2) => (
            <LikeImage data={arg1} functionality={arg2} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
