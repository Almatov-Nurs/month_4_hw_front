import './App.css';
import Menu from "./componenets/menu/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersList from "./componenets/usersList/UsersList";
import UsersPage from "./pages/usersPage/UsersPage";

function App() {
  return (
    <>
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<UsersPage/>}/>
                <Route path="/users" element={<UsersList/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
