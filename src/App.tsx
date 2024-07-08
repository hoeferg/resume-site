import "./App.css";
import MyInfo from "./parts/myinfo";
import Body from "./parts/body";
import "./index.css"

function App() {
  return (
    <div className="p-10 items-center text-center">
      <MyInfo />
      <Body />
    </div>
  );
}

export default App;
