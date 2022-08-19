import './App.css';
import AboutPage from "./pages/AboutPage";

function App() {
  const inf = {
    title: "i am title",
    body: "Lorem ipsum dolor sit amet,"
  }
  return (
    <div className="App">
        <AboutPage info={inf}/>
    </div>
  );
}

export default App;
