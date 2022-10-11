import "./App.scss";
import AppBar from "./components/AppBar";
import BoardBar from "./components/BoardBar";
import BoardContent from "./components/BoardContent";

function App() {
  return (
    <div className="app__container">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
