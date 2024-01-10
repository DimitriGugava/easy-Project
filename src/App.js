import "./App.css";
import Icon from "./img/icon.svg";
import Greg from "./img/greg.svg";

function App() {
  return (
    <div className="App">
      <div className="main_Box">
        <div className="upper_Image_Box">
          <img src={Icon} alt="icon" className="upperIcon" />
        </div>

        <div className="lower_Box">
          <div className="learning_Box">Learning</div>
          <a className="published_Text">Published 21 Dec 2023</a>
          <h2 className="html_CSS_Text">HTML & CSS foundations</h2>
          <a className="lower_Box_Big_Text">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </a>
        </div>
        <div className="greg_Photo_Box">
          <img src={Greg} alt="Greg Photo" className="greg_Photo" />
          <a className="greg_Text">Greg Hooper</a>
        </div>
      </div>
    </div>
  );
}

export default App;
