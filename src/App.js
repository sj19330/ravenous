import logo from "./logo.svg";
import "./App.css";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h1>This is the ravenous app</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
