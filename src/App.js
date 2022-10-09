import './App.css';
import items from "./itemsData";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const cards = items.map(item => {
    return (
      <Card
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
