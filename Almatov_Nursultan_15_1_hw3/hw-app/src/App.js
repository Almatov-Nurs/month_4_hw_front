import './App.css';
import InfoPage from "./pages/InfoPage/InfoPage";
import Info2Page from "./pages/Info2Page/Info2Page";

function App() {
    const user = {
        name: "Anna",
        age: 19
    }

  return (
    <>
      <InfoPage info={user}/>
        <br/>
      <Info2Page info={user}/>
    </>
  );
}

export default App;
