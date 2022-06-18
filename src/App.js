import "./App.css";
import CreatCard from "./Components/atoms/creatCard";
import CreateList from "./Components/Create_list";

function App() {
  return (
    <div className="App">
      <CreateList>
        <CreatCard />
      </CreateList>
    </div>
  );
}

export default App;
