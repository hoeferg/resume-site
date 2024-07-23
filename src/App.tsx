import "./App.css";
import MyInfo from "./parts/myinfo";
import Body from "./parts/body";
import "./index.css";

function App() {
  return (
    <div className="bg-gray">
      <div className="m-10 items-start text-center flex border-2 border-black bg-white">
        <div className="">
          <Body />
        </div>
        <div className="h-max ml-5 mr-5" >
          <MyInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
