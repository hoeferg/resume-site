import "./App.css";
import MyInfo from "./parts/myinfo";
import Body from "./parts/body";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="w-full md:w-3/4 bg-white border border-gray-200 rounded-lg shadow">
            <Body />
          </div>
          <div className="w-full md:w-1/4 bg-white border border-gray-200 rounded-lg shadow">
            <MyInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
