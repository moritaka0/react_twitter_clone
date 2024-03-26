import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import TimeLine from "./components/timeline/timeline";
import Widget from "./components/widget/widgets";

function App() {
  return (
    <div className="app">
      {/*Sidebar*/}
      <Sidebar />
      {/*TimeLine*/}
      <TimeLine />
      {/*Widget*/}
      <Widget />
    </div>
  );
}

export default App;
