import './App.css';
import items from "./itemsData";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const yearDescending = [...items].sort((a, b) => b.year - a.year);
  console.log(yearDescending);

  const cards = yearDescending.map(item => {
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
